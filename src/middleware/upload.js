import multer  from 'multer';

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Create multer instance
const upload = multer({ storage: storage });

// Middleware function to handle image uploads
const uploadMiddleware = upload.single('image');

export default  uploadMiddleware;
