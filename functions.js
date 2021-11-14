const axios = require('axios')
const fs = require('fs')
const path = require('path')

function joinLinkComId(id) {
  const urlCortada = 'https://www.letras.mus.br/api/v2/subtitle/'
  const join = `${urlCortada + id}/`
  return join
}

async function getLinkYoutube(id, num) {
  const funçãoDoLink = joinLinkComId(id)
  const response = await axios.get(funçãoDoLink)
  const data = response.data[num]
  return data
}

async function createLinkApiWithYoutube(id, num) {
  const data = await getLinkYoutube(id, num)
  const urlApi = joinLinkComId(id) + `${data}/`
  return {
    urlApi,
    youtubeId: data,
  }
}

async function getSubtitleMusic(id, num) {
  const { urlApi, youtubeId } = await createLinkApiWithYoutube(id, num)
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
  const htmlStr = fs.readFileSync(
    path.join(__dirname, './video local/index.html'),
    'utf8'
  )
  fs.writeFileSync(
    path.join(__dirname, './video local/index.html'),
    htmlStr.replace(/video_id=.*?"/g, `video_id=${youtubeId}"`)
  )
  console.log({ num })
}
module.exports = getSubtitleMusic
