import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRETE 
});
const uploadOnCloudinary=async(localFilePath)=>{
 try {
  if(!localFilePath)return null

  //upload the file on cloudinary
  const response=await cloudinary.uploader.upload(localFilePath,{
resource_type: "auto",
  }
 )
 console.log("file has been uploaded on cloudinary",response.url );
 return response;
 } catch (error) {
  fs.unLinkSync(localFilePath);
  return null
 }
}

export { uploadOnCloudinary };

