const fs = require('fs');
const path = require('path');

const getProductsFromFile = cb => {
    const p = path.join(path.dirname(require.main.filename), 
    'data', 
    'products.json');
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
    
    save() {
        const p = path.join(path.dirname(require.main.filename), 
        'data', 
        'products.json');
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
};