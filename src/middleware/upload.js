import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});


const imageUploadController = async (req, res, next) => {
  try {
    const image = await cloudinary.uploader.upload(req.file.path);
    req.imageUrl = image.url;
    next();
  } catch (error) {
    console.error();
    res.status(error.status).json('error', error);
  }
};

export default imageUploadController;