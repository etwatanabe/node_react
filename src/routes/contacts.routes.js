import { Router } from "express";
import contacts from "../app/controllers/ContactsController";

const router = new Router({ mergeParams: true });

router.get("/", contacts.index);
router.get("/:id", contacts.show);
router.post("/", contacts.create);
router.put("/:id", contacts.update);
router.delete("/:id", contacts.destroy);

export default router;
