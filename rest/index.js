const express = require("express");

const data = [
	{
		id: "asdfa1231",
		name: "First",
		color: "red",
	},
	{
		id: "asdfa1264",
		name: "Second",
		color: "blue",
	},
	{
		id: "asdfa6431",
		name: "Third",
		color: "yellow",
	},
];

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD, OPTIONS');
    next();
});

app.use(express.json());

app.get("/", (req, res) => res.json({ message: "Hello" }));

app.get("/api/catalog", (req, res) => {
	res.json(data);
});

app.post("/api/catalog", (req, res) => {
	const id = "asdfa" + ((Math.random() * 9999) | 0);
	req.body.id = id;
	data.push(req.body);

	res.json(req.body);
});

app.get("/api/catalog/:id", (req, res) => {
	const id = req.params.id;
	const record = data.find((r) => r.id == id);

	res.json(record);
});

app.put("/api/catalog/:id", (req, res) => {
	const id = req.params.id;
	let index;
	for (let i = 0; i < data.length; i++) {
		if (data[i].id == id) {
			index = i;
			break;
		}
	}
	req.body.id = id;
	data[index] == req.body;

	res.json(data[index]);
});

app.delete("/api/catalog/:id", (req, res) => {
	const id = req.params.id;
	let index;
	for (let i = 0; i < data.length; i++) {
		if (data[i].id == id) {
			index = i;
			break;
		}
	}

	data.splice(index, 1);

	res.status(204).end();
});

app.listen(3000, () => console.log("Server started on post 3000"));
