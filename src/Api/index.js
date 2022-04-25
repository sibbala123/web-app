
import axios from 'axios';

export const UploadData = async(file) => {
    try {
       
        var data = JSON.stringify(file)
          
          
        var config = {
            method: 'post',
            url: 'https://dev.hybrid-integration-platform.internal.amadeus.com:443/ws/rest/v1/DnBSearch/',
            headers: { 
              'x-api-key': 'cacfb37b-9557-4985-b0e3-ae62147d706c',              
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin':'127.0.0.1.nip.io'
            },
            auth:{
              'username': 'MDM_2020_dev',
            'password':'0ad5d495-082e-4154-8f2e-305082512bed'
                      }, 
            data : data
          };
          
        axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
}).catch(function (error) {
            console.log(error);
          });
          
          console.log(data)
    } catch (error) {
      console.log(error.message);
    }
  };
  
