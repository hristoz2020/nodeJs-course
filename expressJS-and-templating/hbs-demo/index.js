const app = require("express")();

app.get("/", (req, res) => {
	res.render("home", { layout: false });
});

app.listen(3000);
