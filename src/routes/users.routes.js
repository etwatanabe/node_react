import { Router } from "express";
import users from "../app/controllers/UsersController";

const router = new Router();

router.get("/", users.index);
router.get("/:id", users.show);
router.post("/", users.create);
router.put("/:id", users.update);
router.delete("/:id", users.destroy);

export default router;
