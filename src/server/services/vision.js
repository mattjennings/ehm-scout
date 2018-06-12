// Imports the Google Cloud client library
const vision = require('@google-cloud/vision')

// Creates a client
const client = new vision.ImageAnnotatorClient()

// Performs label detection on the image file
// client
//   .textDetection('./examples/just-attributes.png')
//   .then(results => {
//     const detections = results[0].textAnnotations
//     console.log('Text:')
//     detections.forEach(text => console.log(text))
//     jsonfile.writeFile(
//       'examples/just-attributes.json',
//       detections,
//       { spaces: 2 },
//       err => {
//         console.error(`json write error: ${err}`)
//       }
//     )
//   })
//   .catch(err => {
//     console.error('ERROR:', err)
//   })

const translateScout = require('../services/translate-scout')
const fullReport = require('../../../examples/full-page-scout-report.json')

const fullDescription = fullReport[0].description
console.log(translateScout.getAttributes(fullDescription))
console.log(translateScout.getCareerRole(fullDescription))
console.log(translateScout.getProjection(fullDescription))
console.log(translateScout.getInjuryConcerns(fullDescription))
console.log(translateScout.getScout(fullDescription))
