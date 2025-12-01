const express = require("express");
const app = express();

app.listen(5000, () => {
  console.log(`Successfully Connected Port : 5000 `);
});
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const user = [
    {
      id: 1,
      name: "Juwel Rana",
    },
    {
      id: 2,
      name: "Juwel Rana",
    },
    {
      id: 3,
      name: "Juwel Rana",
    },
    {
      id: 4,
      name: "Juwel Rana",
    },
    {
      id: 5,
      name: "Juwel Rana",
    },
    {
      id: 6,
      name: "Juwel Rana",
    },
  ];
  res.json(user);
});

app.get("/about", (req, res) => {
  res.redirect(301, "https://www.google.com");
});

app.get("/user", (req, res) => {
  // console.log(res)
  res.render("user");
});

app.get("/gallery", (req, res) => {
  res.send("<h1>Gallery Page</h1>");
});
app.get("/download", (req, res) => {
  res.download("./files/dummy.pdf", "juwel.pdf");
});
app.get("/read", (req, res) => {
  //   res.sendFile("./files/dummy.pdf");
  res.sendFile(__dirname + "/files/dummy.pdf");
});
app.get("/end", (req, res) => {
  res.write("Hello world");
  res.end();
});
app.get("/status", (req, res) => {
  res.set("custom-header", "hello123");
  res.send(res.get("custom-header"));
});

app.get("/request", (req, res) => {
  //   if (req.accepts("html")) {
  //     res.send(req.header);
  //   } else if (req.accepts("json")) {
  //     res.send({ message: "Hello JSON" });
  //   } else if (req.accepts("xml")) {
  //     res.send("<message>Hello XML</message>");
  //   } else {
  //     res.send("Content Type NOt Supp")
  //   }

  if (req.is("application/json")) {
    res.send("Valid json data");
  } else if (req.is("text/html")) {
    res.send("HTML Data");
  } else {
    res.send("not support any formate");
  }
});
