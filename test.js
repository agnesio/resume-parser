const ResumeParser = require('./src');

// const fileDir = process.cwd() + '/files/';
// ResumeParser
//   .parseResumeFile(fileDir + 'resume.doc', fileDir + 'compiled') //input file, output dir
//   .then(file => {
//     console.log("Yay! " + file);
//   })
//   .catch(error => {
//     console.log('parseResume failed');
//     console.error(error);
//   });

ResumeParser.parseResumeUrl('https://webflow.com/files/5bad090c54fd3cec09571c85/formUploads/10d7c99a-d9f1-4eaa-9d89-292d7f2dc18f.pdf') // url
  .then(data => {
    console.log('Yay! ', data);
  })
  .catch(error => {
    console.log('parseResume failed');
    console.error(error);
  });
