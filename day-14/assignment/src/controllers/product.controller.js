const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const client = require("../config/redis");
// const { findById } = require("../models/product.model");

// for post method
router.post("", async (req, res) => {
  try {
    // updatiing the product
    let product = await Product.create(req.body);
    // call all the product
    const products = await Product.find({}).lean().exec();
    // add all the product in redis
    client.set("products", JSON.stringify(products));
    // send the data
    res.status(210).send(product);
  } catch (error) {
    console.log({ post_message: error.message });
  }
});

// get method for getting all data
router.get("/", async (req, res) => {
  try {
    const page = req.query.page;
    const pageSize = req.query.pageSize;
    const skip = Math.ceil((page - 1) * pageSize);
    if (page != null && pageSize != null) {
      client.get(`products.${page}.${pageSize}`, async (err, AllProduct) => {
        if (AllProduct) {
          res.send(JSON.parse(AllProduct));
        } else {
          const productAll = await Product.find({})
            .skip(skip)
            .limit(pageSize)
            .lean()
            .exec();
          client.set(
            `products.${page}.${pageSize}`,
            JSON.stringify(productAll)
          );
          res.send(productAll);
        }
      });
    } else {
      // get all the products from the from redis
      client.get("products", async (err, allProduct) => {
        // checking the availability for the prooducts in redis
        if (allProduct) {
          res.send(JSON.parse(allProduct));
        } else {
          // get the data from the database
          let products = await Product.find({}).lean().exec();
          // set the products on redis
          client.set("products", JSON.stringify(products));
          res.status(500).send(products);
        }
      });
    }
  } catch (error) {
    res.send({ get_message: error.message });
  }
});

// get the data through a particlar id

router.get("/:id", async (req, res) => {
  try {
    // get the required product from redis
    client.get(`product.${req.params.id}`, async (err, getProduct) => {
      if (getProduct) {
        res.status(201).send(JSON.parse(getProduct));
      } else {
        try {
          // get the required product from data base
          console.log(req.params.id);
          let product = await Product.findById(req.params.id).lean().exec();
          // set the product in redis
          client.set(`product.${req.params.id}`, JSON.stringify(product));
          res.status(201).send(product);
        } catch (error) {
          res.send({ get_id_message: error.message });
        }
      }
    });
  } catch (error) {
    res.send({ get_id_message: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    let product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    const products = await Product.find({}).lean().exec();
    client.set(`product.${req.params.id}`, JSON.stringify(product));
    client.set("products", JSON.stringify(products));
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send({ patch_message: reportError.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let product = await Product.findByIdAndDelete(req.params.id, {
      new: true,
    });

    const products = await Product.find({}).lean().exec();
    client.del(`product.${req.params.id}`);
    client.set("products", JSON.stringify(products));
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send({ delete_message: error.message });
  }
});

module.exports = router;
