const { IncomingForm } = require("formidable");
const { html, getItems, addItem, deleteItem } = require("../util");

const catalogPage = (data) => `
<h1>Catalog</H1>
<form method="POST" action="/create">
    <label>Name: <input type="text" name="name"></label>
    <label>Last Name: <input type="text" name="lastName"></label>
    <label>Age: <input type="number" name="age"></label>
    <input type="submit" value="Login">
<ul>
    ${data
		.map(
			(user) =>
				`<li>${user.name} ${user.lastName} ---> ${user.age} <a href="/delete?id=${user.id}" >[&#x1F5D1 Delete]</a></li>`
		)
		.join("\n")}
</ul>`;

function catalogController(req, res) {
	const data = getItems();
	res.write(html(catalogPage(data)));
	res.end();
}

function createController(req, res) {
	console.log("create request");

	const form = new IncomingForm();
	form.parse(req, (err, fields) => {
		addItem(fields.name, fields.lastName, fields.age);

		res.writeHead(301, {
			Location: "/catalog",
		});
		res.end();
	});
}

function deleteController(req, res) {
	const id = req.url.searchParams.get("id");
	deleteItem(id);

	res.writeHead(301, {
		Location: "/catalog",
	});
	res.end();
}

module.exports = {
	catalogController,
	createController,
	deleteController,
};
