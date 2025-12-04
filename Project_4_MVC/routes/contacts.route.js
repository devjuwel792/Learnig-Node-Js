import express from "express";
import {
  addContact,
  addContactPage,
  deleteContact,
  getContacts,
  showContacts,
  updateContact,
  updateContactPage,
} from "../controllers/contacts.controller.js";
import { contactMiddleware } from "../middleware/contacts.middleware.js";

const router = express.Router();
// router.use(contactMiddleware);
router.get("/", getContacts);
router.get("/show-content/:id", showContacts);
router.get("/add-content",contactMiddleware, addContactPage);
router.get("/update-content/:id", updateContactPage);
router.post("/add-content", addContact);
router.post("/update-content/:id", updateContact);
router.get("/delete-content/:id", deleteContact);

export default router;
