function html(body, title = "Hello") {
	return `
    <!DOCTYPE html>
    <html lang="en">
    <head> 
        <title>${title}</title>
    </head>
    <body>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/catalog">Catalog</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>    
        ${body}
    </body>
    </html>
    `;
}

function addItem(name, lastName, age) {
	const id = nextId();
	data[id] = {
		name,
		lastName,
		age,
	};
}

function getItems() {
	return Object.entries(data).map(([id, item]) =>
		Object.assign({}, item, { id })
	);
}

function deleteItem(id) {
	delete data[id];
}

function nextId() {
	return "xxxxxxxx".replace(/x/g, () =>
		((Math.random() * 16) | 0).toString(16)
	);
}

const data = {
	"12s34f32": {
		name: "Pesho",
		lastName: "Petkov",
		age: 20,
	},
	fd21k4d5: {
		name: "Todor",
		lastName: "Todorov",
		age: 22,
	},
	"23jd748v": {
		name: "Hristoz",
		lastName: "Iliev",
		age: 25,
	},
};

module.exports = {
	html,
	addItem,
	getItems,
	deleteItem,
};
