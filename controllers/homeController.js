
const Upload = require("../models/upload");

module.exports.home = (req, res) => {
  const searchVal = req.query.s;
  Upload.find()
    .then((files) => {
      res.render("home", {
        title: "CSV Upload",
        files,
        searchVal
      });
    })
    .catch((err) => {
      console.log("Error Finding Files");
      res.redirect("/");
    });
};

module.exports.upload = (req, res) => {
    console.log("body", req.body);
    console.log("file:", req.file);
    const { filename, originalname, path, size } = req.file;
    const newUpload = {
      filename,
      originalname,
      path,
      size,
    };
    Upload.create(newUpload)
      .then((createdUpload) => {
        console.log("Upload created:", createdUpload);
        res.redirect("/");
      })
      .catch((error) => {
        console.error("Error creating upload:", error);
        res.redirect("/");
      });
  };
  
  