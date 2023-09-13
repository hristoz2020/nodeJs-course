const mongoose = require("mongoose");

require("./Car");
require("./Accessory");

const connectionString = "mongodb://localhost:27017/cars";

async function init() {
	try {
		await mongoose.connect(connectionString, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("Connected to database!");

		mongoose.connection.on("error", (err) => {
			console.error("Database error");
			console.error(err);
		});
	} catch (err) {
		console.log("Error connecting to database!");
		process.exit(1);
	}
}

module.exports = init;
