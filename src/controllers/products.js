import Product from "../modals/products";
export const list = async (req, res) => {
  const gt = req.query.gt
  const lt = req.query.lt
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(400).json({
      messages: "Khong tim thay san pham",
    });
  }
};
export const read = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(400).json({
      messages: "Khong tim thay san pham",
    });
  }
};
export const create = async (req, res) => {
  try {
    const product = await new Product(req.body).save();
    res.json(product);
  } catch (error) {
    res.status(400).json({
      messages: "Khong the them san pham",
    });
  }
};
export const remove = async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(400).json({
      messages: "Khong the xoa san pham",
    });
  }
};
export const update = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(product);
  } catch (error) {
    res.status(400).json({
      messages: "Khong the cap nhat",
    });
  }
};

export const textSearch = async (req, res) => {
  try {
    const product = await Product.find({
      $text: { $search: req.query.name },
    }).exec();
    res.json(product);
  } catch (error) {
    res.status(400).json({
      messages: "Khong the tìm thấy sản phẩm",
    });
  }
};

export const rangePrice = async (req, res) => {
  try {
    const product = await Product.find({ $and: [ 
        {price: {$gt: req.body.range[0]}, },
        { price: {$lt: req.body.range[1]} } 
    ]}).exec();
    res.json(product);
  } catch (error) {
    res.status(400).json({
      messages: "Khong the tìm thấy sản phẩm",
    });
  }
};
