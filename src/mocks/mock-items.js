import BSImg1 from './images/Black Shoe/BSImg1.png'

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

const whiteSneaker = new Item({ brand: 'Sneaker Company', name: 'White Sneakers', description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.", price: 125, discount: 50, realPrice: 250, images: ['src/mocks/images/White shoe/WSImg1.png', 'src/mocks/images/White shoe/WSImg2.png', 'src/mocks/images/White shoe/WSImg3.png', 'src/mocks/images/White shoe/WSImg4.png'], thumbnail: 'src/mocks/images/White shoe/WSImg1.png', department: 'men' })

const blackSneaker = new Item({ brand: 'Sneaker Company', name: 'Black Sneackers', description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.", price: 250, images: [BSImg1, 'src/mocks/images/Black Shoe/BSImg2.png', 'src/mocks/images/Black Shoe/BSImg3.png', 'src/mocks/images/Black Shoe/BSImg4.png'], thumbnail: 'src/mocks/images/Black Shoe/BSImg1.png', department: 'men' })

const yellowSneaker = new Item({ brand: 'Sneaker Company', name: 'Yellow Sneakers', description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.", price: 75, discount: 25, realPrice: 100, images: ['src/mocks/images/Yellow Shoe/YSImg1.png', 'src/mocks/images/Yellow Shoe/YSImg2.png', 'src/mocks/images/Yellow Shoe/YSImg3.png', 'src/mocks/images/Yellow Shoe/YSImg4.png'], thumbnail: 'src/mocks/images/Yellow Shoe/YSImg1.png', department: 'men' })

const pinkSneaker = new Item({ brand: 'Sneaker Company', name: 'Pink Sneakers', description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.", price: 50, discount: 50, realPrice: 100, images: ['src/mocks/images/Women Pink Shoe/WPImg1.png', 'src/mocks/images/Women Pink Shoe/WPImg2.png', 'src/mocks/images/Women Pink Shoe/WPImg3.png', 'src/mocks/images/Women Pink Shoe/WPImg4.png'], thumbnail: 'src/mocks/images/Women Pink Shoe/WPImg1.png', department: 'women' })

const goldenSneaker = new Item({ brand: 'Sneaker Company', name: 'Golden Sneakers', description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.", price: 120, images: ['src/mocks/images/Women Golden shoe/WGImg1.png', 'src/mocks/images/Women Golden shoe/WGImg2.png', 'src/mocks/images/Women Golden shoe/WGImg3.png', 'src/mocks/images/Women Golden shoe/WGImg4.png'], thumbnail: 'src/mocks/images/Women Golden shoe/WGImg1.png', department: 'women' })

const beigeSneaker = new Item({ brand: 'Sneaker Company', name: 'Beige Sneakers', description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.", price: 160, images: ['src/mocks/images/Women Beige shoe/WBImg1.png', 'src/mocks/images/Women Beige shoe/WBImg2.png', 'src/mocks/images/Women Beige shoe/WBImg3.png', 'src/mocks/images/Women Beige shoe/WBImg4.png'], thumbnail: 'src/mocks/images/Women Beige shoe/WBImg1.png', department: 'women' })

export const mockItems = [whiteSneaker, blackSneaker, yellowSneaker, pinkSneaker, goldenSneaker, beigeSneaker]