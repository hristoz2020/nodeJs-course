const authControler = require("../controllers/auth");
const homeControler = require("../controllers/home");

module.exports = (app) => {
	app.use(homeControler);
	app.use(authControler);
};
