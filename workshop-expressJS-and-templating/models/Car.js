const {
	Schema,
	model,
	Types: { ObjectId },
} = require("mongoose");

const carSchema = new Schema({
	name: { type: String, required: true, minLength: 3 },
	description: { type: String, default: "" },
	imageUrl: { type: String, default: "noCar.jpeg" },
	price: { type: Number, required: true, min: 0 },
	accessories: { type: [ObjectId], default: [], ref: "Accessory" },
	isDeleted: { type: Boolean, default: false },
});

const Car = model("Car", carSchema);

module.exports = Car;
