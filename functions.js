const axios = require("axios");
const fs = require("fs");

function joinLinkComId(id) {
  const urlCortada = "https://www.letras.mus.br/api/v2/subtitle/";
  const join = `${urlCortada + id}/`;
  return join;
}

async function getLinkYoutube(id) {
  const funçãoDoLink = joinLinkComId(id);
  const response = await axios.get(funçãoDoLink);
  const data = response.data[0];
  return data;
}

async function createLinkApiWithYoutube(id) {
  const data = await getLinkYoutube(id);
  const urlApi = joinLinkComId(id) + `${data}/`;
  return urlApi;
}

async function createFilesSubititles(id) {
  const urlApiComplet = await createLinkApiWithYoutube(id);
  const getResponse = await axios.get(urlApiComplet);
  const getSubitiles = getResponse.data;
  fs.writeFileSync(
    "./originalSubtitle.json",
    JSON.stringify(getSubitiles.Original.Subtitle, null, 2)
  );
  fs.writeFileSync(
    "./traduçãoSubtitle.json",
    JSON.stringify(getSubitiles.Translation.Subtitle, null, 2)
  );
}
module.exports = createFilesSubititles;
