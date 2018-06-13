const fs = require('fs')
const { promisify } = require('util')

const vision = require('@google-cloud/vision')
const axios = require('axios')
const jsonfile = require('jsonfile')
const path = require('path')

const translateScout = require('../../services/translate-scout')

const readFile = promisify(fs.readFile)
const client = new vision.ImageAnnotatorClient()

module.exports = async (req, res) => {
  const file = await readFile(req.files.file.path)
  const results = await client.textDetection(Buffer.from(file, 'base64'))
  const detections = results[0].textAnnotations

  const { description } = detections[0]

  const attributes = translateScout.getAttributes(description)
  const careerRole = translateScout.getCareerRole(description)
  const projection = translateScout.getProjection(description)
  const injuryConcerns = translateScout.getInjuryConcerns(description)
  const scout = translateScout.getScout(description)

  jsonfile.writeFile(
    path.resolve(
      process.cwd(),
      'log',
      `${req.files.file.name}-${Date.now()}.json`
    ),
    { description },
    { spaces: 2 },
    err => {
      console.error(err)
    }
  )
  res.status(200).json({
    attributes,
    careerRole,
    projection,
    injuryConcerns,
    scout
  })
}
