class Item {
    constructor({ brand, name, description, price = realPrice, discount = null, realPrice = null, images, amount = 0, thumbnail, department }) {
        this.brand = brand;
        this.name = name;
        this.description = description;
        this.price = price;
        this.discount = discount;
        this.realPrice = realPrice;
        this.images = images;
        this.amount = amount;
        this.thumbnail = thumbnail;
        this.department = department
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

const whiteSneaker = new Item({ brand: 'Sneaker Company', name: 'White Sneakers', description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.", price: 125, discount: 50, realPrice: 250, images: ['src/mocks/images/White shoe/WSImg1.jpg', 'src/mocks/images/White shoe/WSImg2.jpg', 'src/mocks/images/White shoe/WSImg3.jpg', 'src/mocks/images/White shoe/WSImg4.jpg'], thumbnail: 'src/mocks/images/White shoe/WSImg1.jpg', department: 'men' })

const blackSneaker = new Item({ brand: 'Sneaker Company', name: 'Black Sneackers', description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.", price: 250, images: ['src/mocks/images/Black Shoe/BSImg1.jpg', 'src/mocks/images/Black Shoe/BSImg2.jpg', 'src/mocks/images/Black Shoe/BSImg3.jpg', 'src/mocks/images/Black Shoe/BSImg4.jpg'], thumbnail: 'src/mocks/images/Black Shoe/BSImg1.jpg', department: 'men' })

const yellowSneaker = new Item({ brand: 'Sneaker Company', name: 'Yellow Sneakers', description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.", price: 75, discount: 25, realPrice: 100, images: ['src/mocks/images/Yellow Shoe/YSImg1.jpg', 'src/mocks/images/Yellow Shoe/YSImg2.jpg', 'src/mocks/images/Yellow Shoe/YSImg3.jpg', 'src/mocks/images/Yellow Shoe/YSImg4.jpg'], thumbnail: 'src/mocks/images/Yellow Shoe/YSImg1.jpg', department: 'men' })

const pinkSneaker = new Item({ brand: 'Sneaker Company', name: 'Pink Sneakers', description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.", price: 50, discount: 50, realPrice: 100, images: ['src/mocks/images/Women Pink Shoe/WPImg1.jpg', 'src/mocks/images/Women Pink Shoe/WPImg2.jpg', 'src/mocks/images/Women Pink Shoe/WPImg3.jpg', 'src/mocks/images/Women Pink Shoe/WPImg4.jpg'], thumbnail: 'src/mocks/images/Women Pink Shoe/WPImg1.jpg', department: 'women' })

const goldenSneaker = new Item({ brand: 'Sneaker Company', name: 'Golden Sneakers', description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.", price: 120, images: ['src/mocks/images/Women Golden shoe/WGImg1.jpg', 'src/mocks/images/Women Golden shoe/WGImg2.jpg', 'src/mocks/images/Women Golden shoe/WGImg3.jpg', 'src/mocks/images/Women Golden shoe/WGImg4.jpg'], thumbnail: 'src/mocks/images/Women Golden shoe/WGImg1.jpg', department: 'women' })

const beigeSneaker = new Item({ brand: 'Sneaker Company', name: 'Beige Sneakers', description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.", price: 160, images: ['src/mocks/images/Women Beige shoe/WBImg1.jpg', 'src/mocks/images/Women Beige shoe/WBImg2.jpg', 'src/mocks/images/Women Beige shoe/WBImg3.jpg', 'src/mocks/images/Women Beige shoe/WBImg4.jpg'], thumbnail: 'src/mocks/images/Women Beige shoe/WBImg1.jpg', department: 'women' })

export const mockItems = [whiteSneaker, blackSneaker, yellowSneaker, pinkSneaker, goldenSneaker, beigeSneaker]