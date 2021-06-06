var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", {title: "KabodKaash Architecture || Home"});
});

router.get("/about", (req, res) => {
  res.render("about", {title: "KabodKaash Architecture || About"});
});

router.get("/services", (req, res) => {
  res.render("services", {title: "KabodKaash Architecture || Services"});
});

router.get("/services-single", (req, res) => {
  res.render("services-single", {title: "KabodKaash Architecture || Services Details"});
});

router.get("/projects", (req, res) => {
  res.render("projects", {title: "KabodKaash Architecture || Projects"});
});

router.get("/pages/team", (req, res) => {
  res.render("team", {title: "KabodKaash Architecture || Team"});
});

router.get("/project-single", (req, res) => {
  res.render("project-single", {title: "KabodKaash Architecture || Project Details"});
});

router.get("/pages/testimonials", (req, res) => {
  res.render("testimonials", {title: "KabodKaash Architecture || Testimonials"});
});

router.get("/pages/faqs", (req, res) => {
  res.render("faqs", {title: "KabodKaash Architecture || Faqs"});
});

router.get("/pages/gallery", (req, res) => {
  res.render("gallery", {title: "KabodKaash Architecture || Gallery"});
});

router.get("/blog", (req, res) => {
  res.render("blog", {title: "KabodKaash Architecture || Blog"});
});

router.get("/blog-single", (req, res) => {
  res.render("blog-single", {title: "KabodKaash Architecture || Blog Details"});
});

router.get("/contact", (req, res) => {
  res.render("contact", {title: "KabodKaash Architecture || Contact Us"});
});

router.get("*", (req, res) => {
  res.render("errorpage", {title: "KabodKaash Architecture || Error"});
});

module.exports = router;
