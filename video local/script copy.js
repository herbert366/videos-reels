const timeLine = {
  cena: {
    seletor: document.getElementById('cena'),
    legenda: true,
    // endTime: 10,
  },
  intro: { seletor: document.getElementById('intro') },
}

function getSubtitle(index) {
  return {
    pt: subtitlePt[index],
    en: subtitleEn[index],
  }
}

// const videoSrtSec = videoSrt.map(v => {
//   return {
//     ...v,
//     startTime: v.startTime / 1000,
//     endTime: v.endTime / 1000,
//     diference: v.diference / 1000,
//   }
// })
// console.log(videoSrtSec)

const ordem = Object.keys(timeLine)
timeLine[ordem[0]].seletor.play()
// console.log()

ordem.forEach(function (elemento) {
  console.log({
    vidElemento: timeLine[elemento],
    elemento: elemento,
    timeLine: timeLine,
  })
  timeLine[elemento].seletor.onplay = function () {
    // timeLine[elemento].seletor.playbackRate = 5
    timeLine[elemento].seletor.classList.add('show')
    if (timeLine[elemento].legenda) {
      document.querySelector('.legenda').classList.add('show')
      document.querySelector('#fade').classList.add('show')
    }
  }
})

ordem.forEach(function (elemento, index) {
  function handleEnded() {
    timeLine[elemento].seletor.classList.remove('show')
    timeLine[ordem[index + 1]].seletor.play()
    if (timeLine[elemento].legenda) {
      document.querySelector('.legenda').classList.remove('show')
      document.querySelector('#fade').classList.remove('show')
    }
  }
  // timeLine[elemento].seletor.onended = handleEnded
  // timeLine[elemento].seletor.onpause = handleEnded
})

function listeningTimeVideoOnChange() {
  const video = document.getElementById('cena')
  const ptHtml = document.querySelector('.legenda > .pt')
  const enHtml = document.querySelector('.legenda > .en')

  video.addEventListener('timeupdate', function () {
    // if (timeLine['cena'].endTime) {
    //   if (video.currentTime >= timeLine['cena'].endTime) {
    //     video.pause()
    //     video.currentTime = 0
    //   }
    // }

    const time = video.currentTime

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

    // videoSrtSec.forEach(v => {
    //   if (video.currentTime >= v.startTime && video.currentTime <= v.endTime) {
    //     en.innerHTML = v.text
    //     pt.innerHTML = v.translate
    //     // pt.style.fontSize = getFontSize(v.translate.length)
    //     // en.style.fontSize = getFontSize(v.text.length)
    //     // console.log(getFontSize(v.text.length))
    //   } else if (video.currentTime > v.endTime) {
    //     en.innerHTML = ''
    //     pt.innerHTML = ''
    //   }
    // })
  })
}

const getFontSize = textLength => {
  const baseSize = 3
  if (textLength >= baseSize) {
    textLength = baseSize - 2
  }
  const fontSize = baseSize - textLength
  return `${fontSize}vw`
}

// listeningTimeVideoOnChange()

let time = 0

setInterval(() => {
  time += 500 / 1000
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