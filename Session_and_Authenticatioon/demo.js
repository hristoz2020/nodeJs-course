const express = require("express");
const expressSession = require("express-session");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(
	expressSession({
		secret: "super secret",
		resave: false,
		saveUninitialized: true,
		cookie: { secure: "auto" },
	})
);

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("/login", (req, res) => {
	res.sendFile(__dirname + "/login.html");
});

app.post("/login", (req, res) => {
	console.log(req.body);
	res.redirect("/");
});

app.listen(3000);
