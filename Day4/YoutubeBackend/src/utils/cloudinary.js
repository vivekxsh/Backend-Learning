import {v2 as cloudinary } from "cloudinary";
import fs from "fs";


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;

        // upload
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });
        // if upload successful
        console.log("file is upload successfully", response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath); // remove currupted file or which upload got failed

        return null;

    }
};


export {uploadOnCloudinary};