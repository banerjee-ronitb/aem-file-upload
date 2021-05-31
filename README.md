# aem-file-upload

This is a Node js utility to upload files to AEM.
Sample Code Structure:


const DirectBinary = require('@adobe/aem-upload'); <br/>
// URL to the folder in AEM where assets will be uploaded.<br/>
// Foldermust already exist <br/>
const targetUrl = 'https://author-pxxxxx-exxxxx.adobeaemcloud.com/content/dam/target';<br/>

// list of all local files that will be uploaded.<br/>
const uploadFiles = [<br/>
    {<br/>
        fileName: 'myasset.jpeg', // name of the file as it will appear in AEM<br/>
        fileSize: 5242880, // total size, in bytes, of the file<br/>
        filePath: '/Users/ronitbanerjee/Adobe/aem-file-upload/myasset.jpeg' // Full path to the local file<br/>
    }<br/>
];<br/>

const upload = new DirectBinary.DirectBinaryUpload();<br/>
const options = new DirectBinary.DirectBinaryUploadOptions()<br/>
    .withUrl(targetUrl)<br/>
    .withBasicAuth('username:password')<br/>
    .withUploadFiles(uploadFiles);<br/>

// this call will upload the files. The method returns a Promise, which will be resolved
// when all files have uploaded.
upload.uploadFiles(options)<br/>
    .then(result => {<br/>
        console.log(result);<br/>
     })
    .catch(err =>{ <br/>
      console.log(err); <br/>
      }); <br/>
      

    
