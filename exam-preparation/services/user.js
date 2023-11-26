const User = require("../models/User");
const { hash, compare } = require("bcrypt");

//TODO add all fields required by the exam
async function register(username, password) {
	const existing = await getUserByUsername(username);

	if (existing) {
		throw new Error("Username is taken.");
	}

	const hashedPassword = await hash(password, 10);

	const user = new User({
		username,
		hashedPassword,
	});
	await user.save();

	return user;
}

//TODO change identifier
async function login(username, password) {
	const user = await getUserByUsername(username);
	if (!user) {
		throw new Error("User doesn't exist :(");
	}

	const hasMatch = compare(password, user.hashedPassword);
	if (!hasMatch) {
		throw new Error("Incorrect password.");
	}

	return user;
}

//TODO identify ures by given identifier
async function getUserByUsername(username) {
	const user = await User.findOne({ username: new RegExp(`^${username}$`, "i") });

	return user;
}

module.exports = {
	login,
	register,
};
