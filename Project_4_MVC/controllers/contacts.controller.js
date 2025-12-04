import mongoose from "mongoose";
import Contact from "../models/contacts.model.js";

export const getContacts = async (req, res) => {
  try {
    // const data = await Contact.find();
    const data = await Contact.paginate(
      {},
      {
        page: req.query.page || 1,
        limit: req.query.limit || 5,
      }
    );
    if (!data) {
      res.render("404", {
        message: "The page you are looking for does not exist.",
      });
    }
   //     res.json({data});
  res.render("home", { ...data });
  } catch (error) {
    res.render("500", { message: error });
  }
};

export const showContacts = async (req, res) => {
  // const data = await Contact.findOne({ _id: req.params.id });

  let paramId = mongoose.Types.ObjectId.isValid(req.params.id);

  if (!paramId) {
    res.render("404", {
      message: "The page you are looking for does not exist.",
    });
  }
  try {
    const data = await Contact.findById(req.params.id);
    if (!data) {
      res.render("404", {
        message: "The page you are looking for does not exist.",
      });
    }
    res.render("show-content", { data });
  } catch (error) {
    res.render("500", { message: error });
  }
};

export const addContactPage = (req, res) => {
  try {
    res.render("add-content");
  } catch (error) {
    res.render("500", { message: error });
  }
};

export const updateContactPage = async (req, res) => {
  let paramId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!paramId) {
    res.render("404", {
      message: "The page you are looking for does not exist.",
    });
  }
  try {
    const data = await Contact.findById(req.params.id);
    if (!data) {
      res.render("404", {
        message: "The page you are looking for does not exist.",
      });
    }

    res.render("update-content", { data });
  } catch (error) {
    res.render("500", { message: error });
  }
};

export const addContact = async (req, res) => {
  try {
    await Contact.insertOne({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
    });

    res.redirect("/");
  } catch (error) {
    res.render("500", { message: error });
  }
};

export const updateContact = async (req, res) => {
  let paramId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!paramId) {
    res.render("404", {
      message: "The page you are looking for does not exist.",
    });
  }
  try {
    const data = await Contact.findByIdAndUpdate(req.params.id, {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
    });
    console.log("🚀 ~ updateContact ~ data:", data);
    res.redirect("/");
  } catch (error) {
    res.render("500", { message: error });
  }
};

export const deleteContact = async (req, res) => {
  let paramId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!paramId) {
    res.render("404", {
      message: "The page you are looking for does not exist.",
    });
  }
  try {
    const data = await Contact.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    res.render("500", { message: error });
  }
};
