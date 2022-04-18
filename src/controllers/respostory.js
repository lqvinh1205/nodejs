import Carts from "../modals/carts";

export const cartFind = async (userId) => {
    const carts = await Carts.find({userId: userId, status: "Đang chờ"}).populate('items.productId');
    return carts[0];
};
export const addItem = async (product) => {
    const newItem = await Carts.create(product);
    return newItem;
};
