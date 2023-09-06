const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
	res.send("Catalog");
});

router.get("/:id/details", (req, res) => {
	console.log(req.params);
	res.send("Details page");
});

router.get("/:category/:productId", (req, res) => {
	console.log(req.params);
	res.send("Product from category");
});

module.exports = router;
