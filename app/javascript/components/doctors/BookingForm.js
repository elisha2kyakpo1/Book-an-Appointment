/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
var widget = cloudinary.applyUploadWidget({
  cloudName: 'demo',
  uploadPreset: 'blog_upload',
},
(error, result) => {
  if (!error && result && result.event === 'success') {
    console.log('Done uploading..: ', result.info);
  }
});

document.getElementById('upload_widget').addEventListener('click', () => {
  myWidget.open();
}, false);
