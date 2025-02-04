import { Router } from "express";
import customers from "../app/controllers/CustomersController";

const router = new Router({});

router.get("/", customers.index);
router.get("/:id", customers.show);
router.post("/", customers.create);
router.put("/:id", customers.update);
router.delete("/:id", customers.destroy);

export default router;
