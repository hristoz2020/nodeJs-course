const observer = require("./observer");

function publish(index) {
	console.log("Publish called");
	observer.emit("alert", `Published ${index} times`);
}

module.exports = publish;
