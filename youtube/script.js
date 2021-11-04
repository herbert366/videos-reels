// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script')

tag.src = 'https://www.youtube.com/iframe_api'
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

console.log({ idY: videoSettings.videoYoutubeLink })
var player
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: '1FvEDuWeB4A',
    playerVars: {
      playsinline: 1,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  })
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo()
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000)
    done = true
  }
}
function stopVideo() {
  player.stopVideo()
}

function getSubtitle(index) {
  return {
    pt: subtitlePt[index],
    en: subtitleEn[index],
  }
}

setInterval(() => {
  if (!player.getCurrentTime) return
  const time = player.getCurrentTime()

  const index = subtitlePt.findIndex(sub => {
    // console.log({ time, subStart: parseFloat(sub[1]) })

    return time >= parseFloat(sub[1]) && time <= parseFloat(sub[2])
  })

  // console.log({ index })
  if (index === -1) {
    document.querySelector('.pt').innerHTML = ''
    document.querySelector('.en').innerHTML = ''
    return
  }

  const { pt, en } = getSubtitle(index)

  const [textPt, startPt, endPt] = pt
  const [textEn, startEn, endEn] = en

  document.querySelector('.time').innerHTML = time
  document.querySelector('.pt').innerHTML = textEn
  document.querySelector('.en').innerHTML = textPt
}, 600)
