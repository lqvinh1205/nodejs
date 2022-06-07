// import DetailCart from "../modals/detailCart";

// export const list = async (req, res) => {
//   try {
//     const detailCart = await DetailCart.find();
//     res.json(detailCart);
//   } catch (error) {
//     res.status(400).json({
//       messages: "Khong tim thay san pham",
//     });
//   }
// };

// export const create = async (req, res) => {
//   try {
//     const detailCart = await new DetailCart(req.body).save();
//     res.json(detailCart);
//   } catch (error) {
//     res.status(400).json({
//       messages: "Khong the them san pham",
//     });
//   }
// };
// export const remove = async (req, res) => {
//   try {
//     const detailCart = await DetailCart.findByIdAndRemove(req.params.id);
//     res.json(detailCart);
//   } catch (error) {
//     res.status(400).json({
//       messages: "Khong the xoa san pham",
//     });
//   }
// };
// export const update = async (req, res) => {
//   try {
//     const detailCart = await DetailCart.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     res.json(detailCart);
//   } catch (error) {
//     res.status(400).json({
//       messages: "Khong the cap nhat",
//     });
//   }
// };