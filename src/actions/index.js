import * as api from '../Api/index.js';
export const UploadData = (data) => async (dispatch) => {
    try {
        console.log("function called")
    api.UploadData(data);
  
      
    } catch (error) {
      console.log(error.message);
    }
  };