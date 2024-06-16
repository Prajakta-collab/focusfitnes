import React, { useState } from "react";
import WebcamCapture from "./WebcamCapture";
import jsQR from 'jsqr';
import axios from "axios";
import { baseUrl } from "../../../configs/urlConfigs";
import { getCredentials } from "../../../Credentials/creds";


const QRScanner = () => {
const [qrCode, setQrCode] = useState("");

const markAttendance = async () => {

    try {
      const token = await getCredentials();
  
      if (token) {
        const response = await axios.post(`${baseUrl}/attendance`,{
            params: {
              batchId:1
            }, 
          headers: {
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*' ,
            'userId':4
            
            // This header is typically set on the server side, not in client requests
          }
        });
        
        if(response?.data?.success){
          console.log("res",response)
        }

        console.log("Response:", response.data);


      } else {
        console.log("Error: Token not available.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

const handleScan = (imageSrc) => {
    if (imageSrc) {
        const image = new Image();
        image.src = imageSrc;
        image.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = image.width;
            canvas.height = image.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: "dontInvert"});
            if (code) {
                setQrCode(code);
                console.log("code: ", code);
                markAttendance()
            }
        }
    }
}

return (
    <div className="container mx-auto h-screen w-full flex items-center justify-center bg-black">
    <div className="centered-element bg-white p-6 rounded-lg shadow-md  ">        
    <WebcamCapture onScan={handleScan} />
    </div>
    </div>
);
}

export default QRScanner;