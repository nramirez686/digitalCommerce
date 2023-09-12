// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.hasOne(Category, {
  foreignKey: "",
  onDelete: "Cascade",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "",
  onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
