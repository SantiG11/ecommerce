class Item {
    constructor({ brand, name, description, price = realPrice, discount = null, realPrice = null, images, amount = 0, thumbnail }) {
        this.brand = brand;
        this.name = name;
        this.description = description;
        this.price = price;
        this.discount = discount;
        this.realPrice = realPrice;
        this.images = images;
        this.amount = amount;
        this.thumbnail = thumbnail
    }

    addAmount() {
        this.amount++
    }

    substractAmount() {
        if (this.amount > 0) {
            this.amount--
        }

    }

    removeAmount() {
        this.amount = 0
    }

}

const mockSneaker = new Item({ brand: 'Sneaker Company', name: 'Fall Limited Edition Sneakers', description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.", price: 125, discount: 50, realPrice: 250, images: ['src/mocks/images/image-product-1.jpg', 'src/mocks/images/image-product-2.jpg', 'src/mocks/images/image-product-3.jpg', 'src/mocks/images/image-product-4.jpg'], thumbnail: 'src/mocks/images/image-product-1-thumbnail.jpg' })

const mockSneaker2 = new Item({ brand: 'Sneaker Company', name: 'Fall Limited Edition Sneakers 2', description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.", price: 125, discount: 50, realPrice: 250, images: ['src/mocks/images/image-product-2.jpg', 'src/mocks/images/image-product-1.jpg', 'src/mocks/images/image-product-3.jpg', 'src/mocks/images/image-product-4.jpg'], thumbnail: 'src/mocks/images/image-product-2-thumbnail.jpg' })

const mockSneaker3 = new Item({ brand: 'Sneaker Company', name: 'Fall Limited Edition Sneakers 3', description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.", price: 125, discount: 50, realPrice: 250, images: ['src/mocks/images/image-product-3.jpg', 'src/mocks/images/image-product-1.jpg', 'src/mocks/images/image-product-2.jpg', 'src/mocks/images/image-product-4.jpg'], thumbnail: 'src/mocks/images/image-product-3-thumbnail.jpg' })

export const mockItems = [mockSneaker, mockSneaker2, mockSneaker3]