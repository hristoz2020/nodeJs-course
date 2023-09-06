const express = require("express");

const catalogController = require("./catalog");

const app = express();

app.use('/catalog' ,catalogController);

app.get("/home", (req, res) => {
	res.send("Hello Express");
});

app.get("/create", (req, res) => {
	res.send(
		'<form method="POST><label>Name:<input name="name"></inout></label><button>Send</button></form>'
	);
});

app.post("/create", (req, res) => {
	res.status(201).send("Article created");
});

app.all("*", (req, res) => {
	res.send("404 Custom Not Found Page");
});

app.listen(3000);
