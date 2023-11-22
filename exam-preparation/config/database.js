const mongoose = require("mongoose");

const dbName = "wildlife";
const comnectionString = `mongodb://27017/${dbName}`;

module.exports = async (app) => {
	try {
		await mongoose.connect(comnectionString, {
			useNewUrlParser: true,
			useUnifieldTopology: true,
		});

		console.log("Database connected!");

		mongoose.connection.on("error", (err) => {
			console.error("Database error!");
			console.error(app);
		});
	} catch (err) {
		console.error("Error connection to database");
		process.exit(1);
	}
};
