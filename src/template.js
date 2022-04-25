import React from 'react';
import { CSVLink } from "react-csv";
























const Template = () =>{

const csvData = [
    ["inLanguage","duns",
    "registrationNumber","registrationNumberType","name","streetAddressLine1","streetAddressLine2","countryISOAlpha2Code","postalCode","addressLocality","addressRegion"
  ,"addressCounty","telephoneNumber","url","email","customerBillingEndorsement","customerReference1","customerReference2",
  "customerReference3","customerReference4","customerReference5","candidateMaximumQuantity","confidenceLowerLevelThresholdValue","exclusionCriteria","isCleanseAndStandardizeInformationRequired"]
]
   
 return (
    <div >
      <h6>[you can download the sample templates for your input <CSVLink data={csvData}>here</CSVLink>] </h6>
      
    </div>
  );
};
export default Template;

 
