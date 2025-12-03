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

const router = express.Router();

router.get("/", getContacts);
router.get("/show-content/:id", showContacts);
router.get("/add-content", addContactPage);
router.get("/update-content/:id", updateContactPage);
router.post("/add-content", addContact);
router.post("/update-content/:id", updateContact);
router.get("/delete-content/:id", deleteContact);

export default router;
