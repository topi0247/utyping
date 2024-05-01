

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
    { time: 16, kanji: '夏の草原に', hiragana: 'なつのくさはらに' },
    { time: 21, kanji: '銀河は高く歌う', hiragana: 'ぎんがはたかくうたう' },
    { time: 27, kanji: '胸に手を当てて', hiragana: 'むねにてをあてて' },
    { time: 32, kanji: '風を感じる', hiragana: 'かぜをかんじる' },
    { time: 38, kanji: '君のぬくもりは', hiragana: 'きみのぬくもりは' },
    { time: 43, kanji: '宇宙が燃えていた', hiragana: 'うちゅうがもえていた' },
    { time: 49, kanji: '遠い時代のなごり', hiragana: 'とおいじだいのなごり' },
    { time: 54, kanji: '君は宇宙', hiragana: 'きみはうちゅう' },
    { time: 68, kanji: '百億年の歴史が今も身体に流れてる', hiragana: 'ひゃくおくねんのれきしがいまもからだにながれてる' },
    { time: 79, kanji: '光の声が天高く聞こえる', hiragana: 'ひかりのこえがそらたかくきこえる' },
    { time: 85, kanji: '君も星だよ', hiragana: 'きみもほしだよ' },
    { time: 90, kanji: 'みんなみんな', hiragana: 'みんなみんな' },
  ]

  let index = 0;
  const currentKanji = document.querySelector('#current-kanji');
  currentKanji.textContent = rap[index].kanji;
  const currentHira = document.querySelector('#current-hira');
  currentHira.textContent = rap[index].hiragana;
  const nextKanji = document.querySelector('#next-kanji');
  nextKanji.textContent = rap[index + 1].kanji;
  const nextHira = document.querySelector('#next-hira');
  nextHira.textContent = rap[index + 1].hiragana;

  const inputText = document.querySelector('#inputText');
  const sentence = document.querySelector('#sentence');
  let volume = 100;
  const setIntervalId = setInterval(() => {
    const currentPlayTime = player.getCurrentTime();

    if (index === rap.length) {
      if (currentPlayTime <= rap[rap.length - 1].time + 5) {
        player.setVolume(volume);
        volume -= 20;
        return;
      }

      player.stopVideo();
      clearInterval(setIntervalId);
      return;
    }

    if (Math.ceil(currentPlayTime) === rap[index].time) {
      const inputTextValue = inputText.value;
      const p = document.createElement('p');
      p.textContent = inputTextValue;
      sentence.appendChild(p);
      inputText.value = '';
      index++;
      if (index === rap.length) {
        inputText.value = '';
        currentKanji.textContent = '終わり';
        currentHira.textContent = '';
        return;
      }
      currentKanji.textContent = rap[index].kanji;
      currentHira.textContent = rap[index].hiragana;
      if (index === rap.length - 1) {
        nextKanji.textContent = '終わり';
        nextHira.textContent = '';
        return;
      }
      nextKanji.textContent = rap[index + 1].kanji;
      nextHira.textContent = rap[index + 1].hiragana;
    }

  }, 1000);

})();