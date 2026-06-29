import { cloud_name, upload_present } from "../utils/Contains";

export const uploadImageToCloudinary = async (imgFile, folderName) => {
    const formData = new FormData();
    formData.append('file', imgFile);
    formData.append('upload_preset', upload_present); // Replace 'vamfilm' with your actual unsigned upload preset name
    formData.append('cloud_name', cloud_name); // Replace 'dymypfkt4' with your actual Cloudinary cloud name

    // Set the folder parameter
    if (folderName) {
        formData.append('folder', folderName); // Specify folder name for organized storage
    }

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        return data.secure_url; // Return the image URL from Cloudinary
    } catch (error) {
        console.error('Upload failed:', error);
        throw error;
    }
};