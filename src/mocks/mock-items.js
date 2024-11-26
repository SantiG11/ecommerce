import BSImg1 from './images/Black Shoe/BSImg1.png'
import BSImg2 from './images/Black Shoe/BSImg2.png'
import BSImg3 from './images/Black Shoe/BSImg3.png'
import BSImg4 from './images/Black Shoe/BSImg4.png'

import WSImg1 from './images/White shoe/WSImg1.png'
import WSImg2 from './images/White shoe/WSImg2.png'
import WSImg3 from './images/White shoe/WSImg3.png'
import WSImg4 from './images/White shoe/WSImg4.png'

import WBImg1 from './images/Women Beige shoe/WBImg1.png'
import WBImg2 from './images/Women Beige shoe/WBImg2.png'
import WBImg3 from './images/Women Beige shoe/WBImg3.png'
import WBImg4 from './images/Women Beige shoe/WBImg4.png'

import WGImg1 from './images/Women Golden shoe/WGImg1.png'
import WGImg2 from './images/Women Golden shoe/WGImg2.png'
import WGImg3 from './images/Women Golden shoe/WGImg3.png'
import WGImg4 from './images/Women Golden shoe/WGImg4.png'

import WPImg1 from './images/Women Pink shoe/WPImg1.png'
import WPImg2 from './images/Women Pink shoe/WPImg2.png'
import WPImg3 from './images/Women Pink shoe/WPImg3.png'
import WPImg4 from './images/Women Pink shoe/WPImg4.png'

import YSImg1 from './images/Yellow Shoe/YSImg1.png'
import YSImg2 from './images/Yellow Shoe/YSImg2.png'
import YSImg3 from './images/Yellow Shoe/YSImg3.png'
import YSImg4 from './images/Yellow Shoe/YSImg4.png'


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

const whiteSneaker = new Item({ brand: 'Sneaker Company', name: 'White Sneakers', description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.", price: 125, discount: 50, realPrice: 250, images: [WSImg1, WSImg2, WSImg3, WSImg4], thumbnail: WSImg1, department: 'men' })

const blackSneaker = new Item({ brand: 'Sneaker Company', name: 'Black Sneackers', description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.", price: 250, images: [BSImg1, BSImg2, BSImg3, BSImg4], thumbnail: BSImg1, department: 'men' })

const yellowSneaker = new Item({ brand: 'Sneaker Company', name: 'Yellow Sneakers', description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.", price: 75, discount: 25, realPrice: 100, images: [YSImg1, YSImg2, YSImg3, YSImg4], thumbnail: YSImg1, department: 'men' })

const pinkSneaker = new Item({ brand: 'Sneaker Company', name: 'Pink Sneakers', description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.", price: 50, discount: 50, realPrice: 100, images: [WPImg1, WPImg2, WPImg3, WPImg4], thumbnail: WPImg1, department: 'women' })

const goldenSneaker = new Item({ brand: 'Sneaker Company', name: 'Golden Sneakers', description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.", price: 120, images: [WGImg1, WGImg2, WGImg3, WGImg4], thumbnail: WGImg1, department: 'women' })

const beigeSneaker = new Item({ brand: 'Sneaker Company', name: 'Beige Sneakers', description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.", price: 160, images: [WBImg1, WBImg2, WBImg3, WBImg4], thumbnail: WBImg1, department: 'women' })

export const mockItems = [whiteSneaker, blackSneaker, yellowSneaker, pinkSneaker, goldenSneaker, beigeSneaker]