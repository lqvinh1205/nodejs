import Carts from '../modals/carts';
import Products from '../modals/products';
import { addItem, cartFind } from './respostory';

export const addItemToCart = async (req, res) => {
    const { productId, userId } = req.body;
    const quantity = Number.parseInt(req.body.quantity) || 1;
    try {
        // lay tat ca cac san pham trong cart
        let cart = await cartFind(userId);
        // check san pham co id do co ton tai hay khong
        const product = await Products.findById(productId);
        if (!product) {
            return res.status(500).json({
                msg: 'san pham khong ton tai'
            });
        }
        console.log(cart);

        if (cart && (cart.status == "Đang chờ")) {
            const indexFound = cart.items.findIndex(
                (item) => item.productId.id == productId
            );
            console.log(indexFound);
            if (indexFound !== -1 && quantity <= 0) {
                cart.items.splice(indexFound, 1);
                if (cart.items.length == 0) {
                    cart.subTotal = 0;
                } else {
                    cart.subTotal = cart.items
                        .map((item) => item.total)
                        .reduce((acc, next) => acc + next);
                }
            } else if (indexFound !== -1) {
                cart.items[indexFound].quantity =
                    cart.items[indexFound].quantity + quantity;
                cart.items[indexFound].total =
                    cart.items[indexFound].quantity * product.price;
                cart.items[indexFound].price = product.price;
                cart.subTotal = cart.items
                    .map((item) => item.total)
                    .reduce((acc, next) => acc + next);
            } else if (quantity > 0) {
                cart.items.push({
                    productId: productId,
                    quantity: quantity,
                    price: product.price,
                    total: parseInt(product.price * quantity)
                });
                cart.subTotal = cart.items
                    .map((item) => item.total)
                    .reduce((acc, next) => acc + next);
            } else {
                return res.status(400).json({
                    type: 'Invalid',
                    msg: 'Invalid request'
                });
            }
            let data = await cart.save();
            res.status(200).json({
                type: 'success',
                mgs: 'Process Successful',
                data: data
            });
        } else {
            const cartData = {
                items: [
                    {
                        productId: productId,
                        quantity: quantity,
                        total: parseInt(product.price * quantity),
                        price: product.price
                    }
                ],
                status: 'Đang chờ',
                userId: userId,
                subTotal: parseInt(product.price * quantity)
            };
            cart = await addItem(cartData);
            // let data = await cart().save();
            res.json(cart);
        }
    } catch (error) {
        console.log(error);
    }
};

export const getCart = async (req, res) => {
    try {
        const listCars = await cartFind(req.params.userId);
        res.json(listCars);
    } catch (error) {
        console.log(error);
    }
};

export const updateCart = async (req, res) => {
    try {
        const cart = await Carts.findByIdAndUpdate(req.body._id, req.body, {
            new: true
        }).exec();
        res.status(200).json({
            msg: 'success',
            data: cart
        });
    } catch (error) {
        res.status(500).json({
            messages: 'Khong the cap nhat san pham' + error
        });
    }
};
