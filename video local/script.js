let time = -10
function getSubtitle(index) {
  return {
    pt: subtitlePt[index],
    en: subtitleEn[index],
  }
}
setInterval(() => {
  time += 500 / 1000
  document.querySelector('.time').innerHTML = time
  if (time < 0) return
  const ptHtml = document.querySelector('.legenda > .pt')
  const enHtml = document.querySelector('.legenda > .en')

  const index = subtitlePt.findIndex(sub => {
    // console.log({ time, subStart: parseFloat(sub[1]) })

    return time >= parseFloat(sub[1]) && time <= parseFloat(sub[2])
  })

  // console.log({ index })
  if (index === -1) {
    enHtml.innerHTML = ''
    ptHtml.innerHTML = ''
    return
  }

  const { pt, en } = getSubtitle(index)

  const [textPt, startPt, endPt] = pt
  const [textEn, startEn, endEn] = en

  enHtml.innerHTML = textEn
  ptHtml.innerHTML = textPt
}, 500)
