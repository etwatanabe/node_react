import { Router } from "express";
import customersRoutes from "./customers.routes";
import contactsRoutes from "./contacts.routes";
import usersRoutes from "./users.routes";

const routes = new Router();

routes.use("/customers", customersRoutes);
routes.use("/customers/:customerId/contacts", contactsRoutes);
routes.use("/users", usersRoutes);

export default routes;
