export class OrderItem {
    id: number;
    product_title: string;
    price: number;
    quantity: number;

    constructor(id = 0, product_title = '', price = 0, quantity = 0) {
        this.id = id;
        this.product_title = product_title;
        this.price = price;
        this.quantity = quantity;
    }
}