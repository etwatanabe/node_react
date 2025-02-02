import * as Yup from "yup";
import { Op } from "sequelize";
import { parseISO } from "date-fns";

import User from "../models/User";

class UsersController {
    // Listagem dos registros
    async index(req, res) {
        const {
            name,
            email,
            createdBefore,
            createdAfter,
            updatedBefore,
            updatedAfter,
            sort,
        } = req.query;

        const page = req.query.page || 1;
        const limit = req.query.limit || 25;

        let where = {};
        let order = [];

        if (name) {
            where = {
                ...where,
                name: {
                    [Op.iLike]: name,
                },
            };
        }

        if (email) {
            where = {
                ...where,
                email: {
                    [Op.iLike]: email,
                },
            };
        }

        if (createdBefore) {
            where = {
                ...where,
                createdAt: {
                    [Op.gte]: parseISO(createdBefore),
                },
            };
        }

        if (createdAfter) {
            where = {
                ...where,
                createdAt: {
                    [Op.lte]: parseISO(createdAfter),
                },
            };
        }

        if (updatedBefore) {
            where = {
                ...where,
                updatedAt: {
                    [Op.gte]: parseISO(updatedBefore),
                },
            };
        }

        if (updatedAfter) {
            where = {
                ...where,
                updatedAt: {
                    [Op.lte]: parseISOu(updatedAfter),
                },
            };
        }

        if (sort) {
            order = sort.split(",").map((item) => item.split(":"));
        }

        const data = await User.findAll({
            attributes: { exclude: ["password", "password_hash"] },
            where,
            order,
            limit,
            offset: limit * page - limit,
        });
        return res.json(data);
    }

    // Recupera um registro
    async show(req, res) {
        const user = await User.findByPk(req.params.id);

        if (!user) {
            return res.status(404).json();
        }

        const { id, name, email, createdAt, updatedAt } = user;
        return res.json({ id, name, email, createdAt, updatedAt });
    }

    // Cria um registro
    async create(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(8),
            passwordConfirmation: Yup.string().when("password", (password, field) => {
                return password ? field.required().oneOf([Yup.ref("password")]) : field
            })
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validation fails" });
        }

        const { id, name, email, createdAt, updatedAt } = await User.create(req.body);

        return res.status(201).json({ id, name, email, createdAt, updatedAt });
    }

    // Atualiza um registro
    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string(),
            email: Yup.string().email(),
            oldPassword: Yup.string().min(8),
            password: Yup.string().min(8).when("oldPassword", (oldPassword, field) => {
                return oldPassword ? field.required() : field
            }),
            passwordConfirmation: Yup.string().when("password", (password, field) => {
                return password ? field.required().oneOf([Yup.ref("password")]) : field
            })
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validation fails" });
        }

        const user = await User.findByPk(req.params.id);

        if (!user) {
            return res.status(404).json();
        }

        const { oldPassword } = req.body;

        if (oldPassword && !(await user.checkPassword(oldPassword))) {
            return res.status(401).json({ error: "Password does not match" });
        }

        const { id, name, email, createdAt, updatedAt } = await user.update(req.body);

        return res.json({ id, name, email, createdAt, updatedAt });
    }

    // Deleta um registro
    async destroy(req, res) {
        const user = await User.findByPk(req.params.id);

        if (!user) {
            return res.status(404).json();
        }

        await user.destroy();

        return res.json();
    }
}

export default new UsersController();
