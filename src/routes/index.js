import { Router } from "express";

import auth from "../app/middlewares/auth";
import customersRoutes from "./customers.routes";
import contactsRoutes from "./contacts.routes";
import usersRoutes from "./users.routes";
import sessionsRoutes from "./sessions.routes";


const routes = new Router();

routes.use("/sessions", sessionsRoutes);

routes.use(auth);

routes.use("/customers", customersRoutes);
routes.use("/customers/:customerId/contacts", contactsRoutes);
routes.use("/users", usersRoutes);

export default routes;
