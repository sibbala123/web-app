import React from 'react';
import { CSVLink } from "react-csv";
 



const Template = () =>{

const csvData = [
    ["/id","/searchResultState","/duns","/registrationNumber","/Street address line1","/Street address line2","/countryISOAlpha2Code","/postalCode","/addressRegion","/addressCounty","/customerReference1","/Customer reference 2","/Customer reference 3","/Customer reference 4","/Customer reference 5"],
]
   
 return (
    <div >
      <h6>[you can download the sample templates for your input <CSVLink data={csvData}>here</CSVLink>] </h6>
      
    </div>
  );
};
export default Template;

 
