const path = require('path');
const multer = require('multer');
const  fs=require('fs')
const uploadImg = (req, res, next) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });

  const upload = multer({ storage: storage }).single('file'); // Use 'file' as the fieldname

  upload(req, res, function (err) {
    if (err) {
      console.error('Error uploading image:', err);
      return res.status(500).json({ error: 'Image upload failed' });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    req.photourl = `http://localhost:5000/images/${req.file.filename}`;
    
    next();
    // return `http://localhost:5000/images/${req.file.filename}`;
  });
};



const deleteSingleFile = (imageUrl) => {
  const filenameToDelete = path.basename(imageUrl);
  const filePathToDelete = path.join(__dirname, '../images', filenameToDelete);

  try {
     fs.unlinkSync(filePathToDelete);
    console.log('Image deleted successfully:', imageUrl);
  } catch (err) {
    console.error('Error deleting image:', err);
  }

  // Implement your logic to remove the image URL from the database or perform any other necessary actions
};



module.exports = {uploadImg,deleteSingleFile}
