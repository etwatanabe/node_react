import express from "express";
import Youch from "youch";
import "express-async-errors";

import authMiddleware from "./app/middlewares/auth";
import routes from "./routes";


import "./database";

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
        this.exceptionHandle();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(authMiddleware);
    }

    routes() {
        this.server.use(routes);
    }

    exceptionHandle() {
        this.server.use(async (err, req, res, next) => {
            if(process.env.NODE_ENV === "development"){
                const errors = await new Youch(err, req).toJSON();

                return res.status(500).json(errors);
            }

            return res.status(500).json({ error: "Internal server error" });
        });
    }
}

export default new App().server;
