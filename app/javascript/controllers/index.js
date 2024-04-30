

(function () {

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      playerVars: { 'autoplay': 1, 'controls': 0 },
      height: '360',
      width: '640',
      videoId: 'XW5rkR0JsGo',
      events: {
        'onReady': onPlayerReady,
      },
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  const setTimeoutId = setTimeout(() => {
    onYouTubeIframeAPIReady();
    clearTimeout(setTimeoutId);
  }, 1000);

  const rap = [
    { time: 16, text: '夏の草原に' },
    { time: 21, text: '銀河は高く歌う' },
    { time: 27, text: '胸に手を当てて' },
    { time: 32, text: '風を感じる' },
    { time: 38, text: '君のぬくもりは' },
    { time: 43, text: '宇宙が燃えていた' },
    { time: 49, text: '遠い時代のなごり' },
    { time: 54, text: '君は宇宙' },
    { time: 68, text: '百億年の歴史が今も身体に流れてる' },
    { time: 79, text: '光の声が天高く聞こえる' },
    { time: 85, text: '君も星だよ' },
    { time: 90, text: 'みんなみんな' },
  ]

  let index = 0;
  const show = document.querySelector('#show');
  const showText = document.createElement('p');
  showText.textContent = rap[index].text;
  show.appendChild(showText);
  const inputText = document.querySelector('#inputText');
  const sentence = document.querySelector('#sentence');
  const setIntervalId = setInterval(() => {
    if (index === rap.length) {
      clearInterval(setIntervalId);
      player.stopVideo();
      return;
    }
    const currentPlayTime = player.getCurrentTime();

    if (Math.ceil(currentPlayTime) === rap[index].time) {
      const inputTextValue = inputText.value;
      const p = document.createElement('p');
      p.textContent = inputTextValue;
      sentence.appendChild(p);
      inputText.value = '';
      index++;
      if (index === rap.length) {
        inputText.value = '';
        return;
      }
      showText.textContent = rap[index].text;
    }

  }, 1000);
})();