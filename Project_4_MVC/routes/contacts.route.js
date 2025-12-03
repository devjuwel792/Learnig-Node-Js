import express from "express";
import Contact from "../models/contacts.model.js";

const router = express.Router();
router.get("/", async (req, res) => {
  const data = await Contact.find();
  // res.json(data)
  res.render("home", { data });
});

router.get("/show-content/:id", async (req, res) => {
  // const data = await Contact.findOne({ _id: req.params.id });
  const data = await Contact.findById(req.params.id);
  //  res.json(data);
  res.render("show-content", { data });
});

router.get("/add-content", (req, res) => {
  res.render("add-content");
});

router.get("/update-content/:id", async (req, res) => {
  const data = await Contact.findById(req.params.id);
  res.render("update-content", { data });
});

router.post("/add-content", async (req, res) => {
  await Contact.insertOne({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  });

  res.redirect("/");
});

router.post("/update-content/:id", async (req, res) => {
  await Contact.findByIdAndUpdate(req.params.id, {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  });
  res.redirect("/");
});

router.get("/delete-content/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

export default router;
