const slugify = require("slugify");
//นำ model blogs เข้ามาทำงานที่ blogController.js
const Blogs = require("../model/blogModel");
const { uuidv4 } = require("uuid");

exports.create = (req, res) => {
  //รับค่า request ที่ส่งมาเก็บลงใน object data
  const { title, content, author } = req.body;
  console.log(title, content, author);
  const slug = slugify(title);
  Blogs.create({ title: title, content: content, author: author, slug: slug })
    .then((blogDoc) => {
      res.json(blogDoc);
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
};

exports.getAllBlog = (req, res) => {
  Blogs.find({})
    .exec()
    .then((blogs) => {
      res.json(blogs);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getBlog = (req, res) => {
  const { slug } = req.params; //เก็บค่า slug ที่ส่งมาพร้อม URL request ลงไป
  if (!slug) {
    slug = uuidv4();
  }
  //ค้นหาบทความตาม slug ที่ส่งมา
  Blogs.findOne({ slug: slug })
    .exec()
    .then((blog) => {
      res.json(blog);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.remove = (req, res) => {
  const { slug } = req.params;
  Blogs.findOneAndRemove({ slug })
    .exec()
    .then((blog) => {
      res.json({ error: "ลบบทความเรียบร้อยแล้ว" });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.update = (req, res) => {
  const { slug } = req.params;
  const { title, content, author } = req.body;
  Blogs.findOneAndUpdate({ slug }, { title, content, author }, { new: true })
    .exec()
    .then((blog) => {
      res.json(blog);
    })
    .catch((err) => {
      console.log(err);
    });
};
