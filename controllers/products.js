export const products = [
    {id: 1, name: "San pham A"},
    {id: 2, name: "San pham B"},
    {id: 3, name: "San pham C"},
]

export const list = (req, res,) => {
    res.json(products);
}
export const read = (req, res,) => {
    res.json(products.find(item => item.id === +req.params.id));
}
export const create = (req, res) => {
    const product = req.body;
    res.json(product)
}
export const remove = (req, res) => {
    res.json(products.filter(item => item.id !== +req.params.id))
}
export const update = (req, res) => {
    res.json(products.map(item => item.id === +req.params.id ? req.body : item))
}