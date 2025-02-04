import { Router } from "express";
import sessions from "../app/controllers/SessionsController";

const router = new Router();

router.post("/", sessions.create);

export default router;
