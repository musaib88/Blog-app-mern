const path = require("path");
const multer = require("multer");
const fs = require("fs");
const uploadImg = (req, res, next) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });

  const upload = multer({ storage: storage }).single("file"); // Use 'file' as the fieldname

  upload(req, res, (uploadError) => {
    if (uploadError instanceof multer.MulterError) {
      // Handle multer errors
      return res.status(400).json({ error: uploadError.message });
    } else if (uploadError) {
      // Handle other errors
      return res.status(500).json({ error: "Image upload failed" });
    }

    // Check if a file is present in the request
    if (!req.file) {
      // No file was provided, continue to the next middleware
      return next();
    }

    // File was successfully uploaded
    req.photourl = `http://localhost:5000/images/${req.file.filename}`;
    next();
  });
};


const deleteSingleFile = (imageUrl) => {
  const filenameToDelete = path.basename(imageUrl);
  const filePathToDelete = path.join(__dirname, "../images", filenameToDelete);

  try {
    fs.unlinkSync(filePathToDelete);
    console.log("Image deleted successfully:", imageUrl);
  } catch (err) {
    console.error("Error deleting image:", err);
  }

  // Implement your logic to remove the image URL from the database or perform any other necessary actions
};

module.exports = { uploadImg, deleteSingleFile };
