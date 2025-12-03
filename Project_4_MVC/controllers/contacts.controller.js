import mongoose from "mongoose";
import Contact from "../models/contacts.model.js";

export const getContacts = async (req, res) => {
  const data = await Contact.find();
  // res.json(data)
  res.render("home", { data });
};

export const showContacts = async (req, res) => {
  // const data = await Contact.findOne({ _id: req.params.id });

  let paramId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!paramId) {
    res.render("404", {
      message: "The page you are looking for does not exist.",
    });
  }
  const data = await Contact.findById(req.params.id);
  //  res.json(data);
  res.render("show-content", { data });
};

export const addContactPage = (req, res) => {
  res.render("add-content");
};

export const updateContactPage = async (req, res) => {
  let paramId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!paramId) {
    res.render("404", {
      message: "The page you are looking for does not exist.",
    });
  }

  const data = await Contact.findById(req.params.id);
  res.render("update-content", { data });
};

export const addContact = async (req, res) => {
  await Contact.insertOne({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  });

  res.redirect("/");
};

export const updateContact = async (req, res) => {
  let paramId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!paramId) {
    res.render("404", {
      message: "The page you are looking for does not exist.",
    });
  }
  await Contact.findByIdAndUpdate(req.params.id, {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  });
  res.redirect("/");
};

export const deleteContact = async (req, res) => {
  let paramId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!paramId) {
    res.render("404", {
      message: "The page you are looking for does not exist.",
    });
  }
  await Contact.findByIdAndDelete(req.params.id);
  res.redirect("/");
};
