const DirectBinary = require('@adobe/aem-upload');

// URL to the folder in AEM where assets will be uploaded. Folder
// must already exist.
const targetUrl = 'https://author-pxxxxx-exxxxx.adobeaemcloud.com/content/dam/target';

// list of all local files that will be uploaded.
const uploadFiles = [
    {
        fileName: 'myasset.jpeg', // name of the file as it will appear in AEM
        fileSize: 5242880, // total size, in bytes, of the file
        filePath: '/Users/ronitbanerjee/Adobe/aem-file-upload/myasset.jpeg' // Full path to the local file
    }
];

const upload = new DirectBinary.DirectBinaryUpload();
const options = new DirectBinary.DirectBinaryUploadOptions()
    .withUrl(targetUrl)
    .withBasicAuth('username:password')
    .withUploadFiles(uploadFiles);

// this call will upload the files. The method returns a Promise, which will be resolved
// when all files have uploaded.
upload.uploadFiles(options)
    .then(result => {
        console.log(result);
        // "result" contains various information about the upload process, including
        // performance metrics and errors that may have occurred for individual files

        // at this point, assuming no errors, there will be two new assets in AEM:
        //  http://localhost:4502/content/dam/target/file1.jpg
        //  http://localhost:4502/content/dam/target/file2.jpg
    })
    .catch(err => {
        console.log(err);
        // the Promise will reject if something causes the upload process to fail at
        // a high level. Note that individual file failures will NOT trigger this

        // "err" will be an instance of UploadError. See "Error Handling"
        // for more information
    });