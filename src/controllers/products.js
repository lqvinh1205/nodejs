import Product from "../modals/products";
export const list = async (req, res) => {
  const searchText = req.query.search || "";
  const gte = req.query.gte || 0;
  const lte = req.query.lte || 100000000;
  const perPage = req.query._perpage || 9999999999;
  const page = req.query._page ? req.query._page -1 : 0;
  try {
    const products = await Product.find()
      .where({ name: { $regex: searchText, $options: "i" } })
      .where("price").gte(gte).lte(lte)
      .limit(perPage)
      .skip(perPage * page)
      const totalElement = await Product.find()
    return res.json({products: products, totalElement: totalElement.length});
  } catch (error) {
    return res.status(400).json({
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
      name: { $regex: req.params.name || "" },
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
    const product = await Product.find({
      $and: [
        { price: { $gt: req.body.range[0] } },
        { price: { $lt: req.body.range[1] } },
      ],
    }).exec();
    res.json(product);
  } catch (error) {
    res.status(400).json({
      messages: "Khong the tìm thấy sản phẩm",
    });
  }
};
