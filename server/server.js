const express = require("express");
const app = express();

const cors = require("cors");
const corsOption = {
  origin: "http://localhost:3000",
  Credential: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOption));

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// data base start

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(`sathik`, "sathik", "sathik@#123", {
  dialect: "mysql",
});

// cehcking db

const checkDb = () => {
  try {
    sequelize.authenticate();
    console.log("Database connected successFully");
  } catch (error) {
    console.log(error);
  }
};

checkDb();

// table creating

const first_table = sequelize.define("first_table", {
  userName: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
  phoneNumber: Sequelize.STRING,
});

// checking table

(async () => {
  await first_table.sync();
  console.log("table connected successFully");
})();

// post data

app.post("/", async (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;

  const post_data = first_table.build({
    userName,
    password,
    email,
    phoneNumber,
  });

  await post_data.save();
  res.send("data posted");
});

// signin data
 
app.post("/signin", async (req, res) => {
  const { userName, password } = req.body;

  const user = await first_table.findOne({where :  {userName} });

  if (!user) {
    return res.status(401).json({ error: "Invalid user and password" });
  }

  if (user.password !== password) {
    return res.status(401).json({ error: "Invalid user and password" });
  }

  res.json({ message: "Authenticate Success" });
});

// get all data

app.get("/", async (req, res) => {
  const data = await first_table.findAll();
  res.send(data);
});

// get uniq data

app.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const dataOne = await first_table.findOne({ where: { id } });
    res.send(dataOne);
  } catch (error) {
    res.send(error);
  }
});

// update data

app.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { userName, email, phoneNumber } = req.body;

  try {
    const dataTwo = await first_table.update(
      { userName, email, phoneNumber },
      { where: { id } }
    );
    res.send("data updated");
  } catch (error) {
    res.send(error);
  }
});

// delete data

app.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const dataThree = await first_table.destroy({ where: { id } });
    res.send("data deleted");
  } catch (error) {
    res.send(error);
  }
});

// running port
app.listen(5000, console.log(`port running on : ${5000}`));
