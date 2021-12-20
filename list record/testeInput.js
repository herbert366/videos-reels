const songsData = []
// put songs Datas in array

function addToArray(songObject) {
  if (!songObject.song_Name) {
    throw new Error('song_Name is required')
  }
  songsData.push({
    song_Name: songObject.song_Name,
    reels: songObject.reels || 0000,
    id: songObject.id || 0000,
    emAlta: songObject.emAlta || false,
    problem: songObject.problem || false,
    done: songObject.done || false,
    link: songObject.link || '',
  })
}

addToArray({
  song_Name: 'Scars To Your Beautiful',
  id: 2772881,
  problem: true,
  link: 'https://www.letras.mus.br/alessia-cara/scars-to-your-beautiful/',
})

console.log(songsData)
