const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Item = require("../../models/Item");

router.get("/", (req, res) => {
  Item.find().then(items => res.json(items));
});

router.post("/", auth, (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    isCompleted: req.body.isCompleted
  });
  newItem.save().then(item => res.json(item));
});

router.put("/:id", auth, (req, res) => {
  Item.findByIdAndUpdate(req.body._id, req.body)
    .then(() => res.json({ success: true }))
    .catch(err => console.log(err));
});

router.delete("/:id", auth, (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
