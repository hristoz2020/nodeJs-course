const exporess = require("express");
const hbs = require("express-handlebars");
const session = require("express-session");

const initDb = require("./models/index");

const carsService = require("./services/cars");
const accessoryService = require("./services/accessory");
const authService = require("./services/auth");

const { about } = require("./controllers/about");
const create = require("./controllers/create");
const { details } = require("./controllers/details");
const { home } = require("./controllers/home");
const deleteCar = require("./controllers/remove");
const editCar = require("./controllers/edit");
const accessory = require("./controllers/accessory");
const attach = require("./controllers/attach");
const {
	registerGet,
	registerPost,
	loginGet,
	loginPost,
	logout,
} = require("./controllers/auth");

const { notFound } = require("./controllers/notFound");
const { isLoggedIn } = require("./services/util");

start();

async function start() {
	await initDb();

	const app = exporess();

	app.engine(
		"hbs",
		hbs.create({
			extname: ".hbs",
		}).engine
	);
	app.set("view engine", "hbs");

	app.use(
		session({
			secret: "my super duper secret",
			resave: false,
			saveUninitialized: true,
			cookie: { secure: "auto" },
		})
	);
	app.use(exporess.urlencoded({ extended: true }));
	app.use("/static", exporess.static("static"));
	app.use(carsService());
	app.use(accessoryService());
	app.use(authService());

	app.get("/", home);
	app.get("/about", about);
	app.get("/details/:id", details);

	app.route("/create")
		.get(isLoggedIn(), create.get)
		.post(isLoggedIn(), create.post);
	app.route("/delete/:id")
		.get(isLoggedIn(), deleteCar.get)
		.post(isLoggedIn(), deleteCar.post);
	app.route("/edit/:id")
		.get(isLoggedIn(), editCar.get)
		.post(isLoggedIn(), editCar.post);
	app.route("/accessory")
		.get(isLoggedIn(), accessory.get)
		.post(isLoggedIn(), accessory.post);
	app.route("/attach/:id")
		.get(isLoggedIn(), attach.get)
		.post(isLoggedIn(), attach.post);
	app.route("/register").get(registerGet).post(registerPost);
	app.route("/login").get(loginGet).post(loginPost);
	app.get("/logout", isLoggedIn(), logout);

	app.get("*", notFound);

	app.listen(5000, () => console.log("Server started on port 5000."));
}
