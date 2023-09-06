const exporess = require("express");
const hbs = require("express-handlebars");

const carsService = require("./services/cars");

const { about } = require("./controllers/about");
const create = require("./controllers/create");
const { details } = require("./controllers/details");
const { home } = require("./controllers/home");

const deleteCar = require("./controllers/remove");
const editCar = require("./controllers/edit");
const { notFound } = require("./controllers/notFound");

const app = exporess();

app.engine(
	"hbs",
	hbs.create({
		extname: ".hbs",
	}).engine
);
app.set("view engine", "hbs");

app.use(exporess.urlencoded({ extended: true }));
app.use("/static", exporess.static("static"));
app.use(carsService());

app.get("/", home);
app.get("/about", about);
app.get("/details/:id", details);

app.route("/create").get(create.get).post(create.post);
app.route("/delete/:id").get(deleteCar.get).post(deleteCar.post);
app.route("/edit/:id").get(editCar.get).post(editCar.post);

app.get("*", notFound);

app.listen(5000, () => console.log("Server started on port 5000."));
