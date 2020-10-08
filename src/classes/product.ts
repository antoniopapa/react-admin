export class Product {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;

    constructor(id = 0, title = '', description = '', image = '', price = 0) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.price = price;
    }
}