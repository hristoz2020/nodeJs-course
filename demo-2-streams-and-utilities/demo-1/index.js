require("./subscriber");
const publish = require("./publisher");

let index = 0;
setInterval(() => {
	publish(++index);
}, 2000);
