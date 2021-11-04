const axios = require('axios')
const fs = require('fs')

function joinLinkComId(id) {
  const urlCortada = 'https://www.letras.mus.br/api/v2/subtitle/'
  const join = `${urlCortada + id}/`
  return join
}

async function getLinkYoutube(id) {
  const funçãoDoLink = joinLinkComId(id)
  const response = await axios.get(funçãoDoLink)
  const data = response.data[0]
  return data
}

async function createLinkApiWithYoutube(id) {
  const data = await getLinkYoutube(id)
  const urlApi = joinLinkComId(id) + `${data}/`
  return {
    urlApi,
    youtubeId: data,
  }
}

async function createFilesSubtitles(id) {
  const { urlApi, youtubeId } = await createLinkApiWithYoutube(id)
  const getResponse = await axios.get(urlApi)
  const getSubtitles = getResponse.data
  fs.writeFileSync(
    './videoSettings.json',
    JSON.stringify(
      {
        videoYoutubeLink: youtubeId,
      },
      null,
      2
    )
  )
  fs.writeFileSync(
    './originalSubtitle.js',
    'var subtitleEn = ' + getSubtitles.Original.Subtitle
  )
  fs.writeFileSync(
    './traduçãoSubtitle.js',
    'var subtitlePt = ' + getSubtitles.Translation.Subtitle
  )
}
module.exports = createFilesSubtitles
