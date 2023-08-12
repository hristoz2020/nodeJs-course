const { html } = require("../util");

const homePage = `
<h1>Home</H1>
<p>Hello world!!</p>`;

const aboutPage = `
<h1>About Us</H1>
<p>Contant information</p>`;

function homeController(req, res) {
	res.write(html(homePage));
	res.end();
}

function aboutController(req, res) {
	res.write(html(aboutPage));
	res.end();
}

module.exports = {
	homeController,
	aboutController,
};
