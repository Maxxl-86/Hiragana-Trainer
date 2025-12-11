
window.addEventListener("DOMContentLoaded",()=>{
  // --- Datenquellen ---
  const H = [
    {kana:"あ",romaji:"a",block:"Block 1 Vokale",blockNr:1,script:'H'},
    {kana:"い",romaji:"i",block:"Block 1 Vokale",blockNr:1,script:'H'},
    {kana:"う",romaji:"u",block:"Block 1 Vokale",blockNr:1,script:'H'},
    {kana:"え",romaji:"e",block:"Block 1 Vokale",blockNr:1,script:'H'},
    {kana:"お",romaji:"o",block:"Block 1 Vokale",blockNr:1,script:'H'},

    {kana:"か",romaji:"ka",block:"Block 2 K-Reihe",blockNr:2,script:'H'},
    {kana:"き",romaji:"ki",block:"Block 2 K-Reihe",blockNr:2,script:'H'},
    {kana:"く",romaji:"ku",blockNr:2,block:"Block 2 K-Reihe",script:'H'},
    {kana:"け",romaji:"ke",blockNr:2,block:"Block 2 K-Reihe",script:'H'},
    {kana:"こ",romaji:"ko",blockNr:2,block:"Block 2 K-Reihe",script:'H'},

    {kana:"さ",romaji:"sa",block:"Block 3 S-Reihe",blockNr:3,script:'H'},
    {kana:"し",romaji:"shi",block:"Block 3 S-Reihe",blockNr:3,script:'H'},
    {kana:"す",romaji:"su",block:"Block 3 S-Reihe",blockNr:3,script:'H'},
    {kana:"せ",romaji:"se",block:"Block 3 S-Reihe",blockNr:3,script:'H'},
    {kana:"そ",romaji:"so",block:"Block 3 S-Reihe",blockNr:3,script:'H'},

    {kana:"た",romaji:"ta",block:"Block 4 T-Reihe",blockNr:4,script:'H'},
    {kana:"ち",romaji:"chi",block:"Block 4 T-Reihe",blockNr:4,script:'H'},
    {kana:"つ",romaji:"tsu",block:"Block 4 T-Reihe",blockNr:4,script:'H'},
    {kana:"て",romaji:"te",block:"Block 4 T-Reihe",blockNr:4,script:'H'},
    {kana:"と",romaji:"to",block:"Block 4 T-Reihe",blockNr:4,script:'H'},

    {kana:"な",romaji:"na",block:"Block 5 N-Reihe",blockNr:5,script:'H'},
    {kana:"に",romaji:"ni",block:"Block 5 N-Reihe",blockNr:5,script:'H'},
    {kana:"ぬ",romaji:"nu",block:"Block 5 N-Reihe",blockNr:5,script:'H'},
    {kana:"ね",romaji:"ne",block:"Block 5 N-Reihe",blockNr:5,script:'H'},
    {kana:"の",romaji:"no",block:"Block 5 N-Reihe",blockNr:5,script:'H'},

    {kana:"は",romaji:"ha",block:"Block 6 H-Reihe",blockNr:6,script:'H'},
    {kana:"ひ",romaji:"hi",block:"Block 6 H-Reihe",blockNr:6,script:'H'},
    {kana:"ふ",romaji:"fu",block:"Block 6 H-Reihe",blockNr:6,script:'H'},
    {kana:"へ",romaji:"he",block:"Block 6 H-Reihe",blockNr:6,script:'H'},
    {kana:"ほ",romaji:"ho",block:"Block 6 H-Reihe",blockNr:6,script:'H'},

    {kana:"ま",romaji:"ma",block:"Block 7 M-Reihe",blockNr:7,script:'H'},
    {kana:"み",romaji:"mi",block:"Block 7 M-Reihe",blockNr:7,script:'H'},
    {kana:"む",romaji:"mu",block:"Block 7 M-Reihe",blockNr:7,script:'H'},
    {kana:"め",romaji:"me",block:"Block 7 M-Reihe",blockNr:7,script:'H'},
    {kana:"も",romaji:"mo",block:"Block 7 M-Reihe",blockNr:7,script:'H'},

    {kana:"や",romaji:"ya",block:"Block 8 Y-Reihe",blockNr:8,script:'H'},
    {kana:"ゆ",romaji:"yu",block:"Block 8 Y-Reihe",blockNr:8,script:'H'},
    {kana:"よ",romaji:"yo",block:"Block 8 Y-Reihe",blockNr:8,script:'H'},

    {kana:"ら",romaji:"ra",block:"Block 9 R-Reihe",blockNr:9,script:'H'},
    {kana:"り",romaji:"ri",block:"Block 9 R-Reihe",blockNr:9,script:'H'},
    {kana:"る",romaji:"ru",block:"Block 9 R-Reihe",blockNr:9,script:'H'},
    {kana:"れ",romaji:"re",block:"Block 9 R-Reihe",blockNr:9,script:'H'},
    {kana:"ろ",romaji:"ro",block:"Block 9 R-Reihe",blockNr:9,script:'H'},

    {kana:"わ",romaji:"wa",block:"Block 10 W und ん",blockNr:10,script:'H'},
    {kana:"を",romaji:"wo",block:"Block 10 W und ん",blockNr:10,script:'H'},
    {kana:"ん",romaji:"n",block:"Block 10 W und ん",blockNr:10,script:'H'},

    {kana:"が",romaji:"ga",block:"Block 11 Dakuten",blockNr:11,script:'H'},
    {kana:"ぎ",romaji:"gi",block:"Block 11 Dakuten",blockNr:11,script:'H'},
    {kana:"ぐ",romaji:"gu",block:"Block 11 Dakuten",blockNr:11,script:'H'},
    {kana:"げ",romaji:"ge",block:"Block 11 Dakuten",blockNr:11,script:'H'},
    {kana:"ご",romaji:"go",block:"Block 11 Dakuten",blockNr:11,script:'H'},
    {kana:"ざ",romaji:"za",block:"Block 11 Dakuten",blockNr:11,script:'H'},
    {kana:"じ",romaji:"ji",block:"Block 11 Dakuten",blockNr:11,script:'H'},
    {kana:"ず",romaji:"zu",block:"Block 11 Dakuten",blockNr:11,script:'H'},
    {kana:"ぜ",romaji:"ze",block:"Block 11 Dakuten",blockNr:11,script:'H'},
    {kana:"ぞ",romaji:"zo",block:"Block 11 Dakuten",blockNr:11,script:'H'},
    {kana:"だ",romaji:"da",block:"Block 11 Dakuten",blockNr:11,script:'H'},
    {kana:"ぢ",romaji:"ji",block:"Block 11 Dakuten",blockNr:11,script:'H'},
    {kana:"づ",romaji:"zu",block:"Block 11 Dakuten",blockNr:11,script:'H'},
    {kana:"で",romaji:"de",block:"Block 11 Dakuten",blockNr:11,script:'H'},
    {kana:"ど",romaji:"do",block:"Block 11 Dakuten",blockNr:11,script:'H'},
    {kana:"ば",romaji:"ba",block:"Block 11 Dakuten",blockNr:11,script:'H'},
    {kana:"び",romaji:"bi",block:"Block 11 Dakuten",blockNr:11,script:'H'},
    {kana:"ぶ",romaji:"bu",block:"Block 11 Dakuten",blockNr:11,script:'H'},
    {kana:"べ",romaji:"be",block:"Block 11 Dakuten",blockNr:11,script:'H'},
    {kana:"ぼ",romaji:"bo",block:"Block 11 Dakuten",blockNr:11,script:'H'},

    {kana:"ぱ",romaji:"pa",block:"Block 12 Handakuten",blockNr:12,script:'H'},
    {kana:"ぴ",romaji:"pi",block:"Block 12 Handakuten",blockNr:12,script:'H'},
    {kana:"ぷ",romaji:"pu",block:"Block 12 Handakuten",blockNr:12,script:'H'},
    {kana:"ぺ",romaji:"pe",block:"Block 12 Handakuten",blockNr:12,script:'H'},
    {kana:"ぽ",romaji:"po",block:"Block 12 Handakuten",blockNr:12,script:'H'},

    {kana:"ゃ",romaji:"ya",block:"Block 13 Kleine Kana",blockNr:13,script:'H'},
    {kana:"ゅ",romaji:"yu",block:"Block 13 Kleine Kana",blockNr:13,script:'H'},
    {kana:"ょ",romaji:"yo",block:"Block 13 Kleine Kana",blockNr:13,script:'H'},
    {kana:"っ",romaji:"tsu",block:"Block 13 Kleine Kana",blockNr:13,script:'H'}
  ];

  const K = [
    {kana:"ア",romaji:"a",block:"Block 1 Vokale",blockNr:1,script:'K'},
    {kana:"イ",romaji:"i",block:"Block 1 Vokale",blockNr:1,script:'K'},
    {kana:"ウ",romaji:"u",block:"Block 1 Vokale",blockNr:1,script:'K'},
    {kana:"エ",romaji:"e",block:"Block 1 Vokale",blockNr:1,script:'K'},
    {kana:"オ",romaji:"o",block:"Block 1 Vokale",blockNr:1,script:'K'},

    {kana:"カ",romaji:"ka",block:"Block 2 K-Reihe",blockNr:2,script:'K'},
    {kana:"キ",romaji:"ki",block:"Block 2 K-Reihe",blockNr:2,script:'K'},
    {kana:"ク",romaji:"ku",block:"Block 2 K-Reihe",blockNr:2,script:'K'},
    {kana:"ケ",romaji:"ke",block:"Block 2 K-Reihe",blockNr:2,script:'K'},
    {kana:"コ",romaji:"ko",block:"Block 2 K-Reihe",blockNr:2,script:'K'},

    {kana:"サ",romaji:"sa",block:"Block 3 S-Reihe",blockNr:3,script:'K'},
    {kana:"シ",romaji:"shi",block:"Block 3 S-Reihe",blockNr:3,script:'K'},
    {kana:"ス",romaji:"su",block:"Block 3 S-Reihe",blockNr:3,script:'K'},
    {kana:"セ",romaji:"se",block:"Block 3 S-Reihe",blockNr:3,script:'K'},
    {kana:"ソ",romaji:"so",block:"Block 3 S-Reihe",blockNr:3,script:'K'},

    {kana:"タ",romaji:"ta",block:"Block 4 T-Reihe",blockNr:4,script:'K'},
    {kana:"チ",romaji:"chi",block:"Block 4 T-Reihe",blockNr:4,script:'K'},
    {kana:"ツ",romaji:"tsu",block:"Block 4 T-Reihe",blockNr:4,script:'K'},
    {kana:"テ",romaji:"te",block:"Block 4 T-Reihe",blockNr:4,script:'K'},
    {kana:"ト",romaji:"to",block:"Block 4 T-Reihe",blockNr:4,script:'K'},

    {kana:"ナ",romaji:"na",block:"Block 5 N-Reihe",blockNr:5,script:'K'},
    {kana:"ニ",romaji:"ni",block:"Block 5 N-Reihe",blockNr:5,script:'K'},
    {kana:"ヌ",romaji:"nu",block:"Block 5 N-Reihe",blockNr:5,script:'K'},
    {kana:"ネ",romaji:"ne",block:"Block 5 N-Reihe",blockNr:5,script:'K'},
    {kana:"ノ",romaji:"no",block:"Block 5 N-Reihe",blockNr:5,script:'K'},

    {kana:"ハ",romaji:"ha",block:"Block 6 H-Reihe",blockNr:6,script:'K'},
    {kana:"ヒ",romaji:"hi",block:"Block 6 H-Reihe",blockNr:6,script:'K'},
    {kana:"フ",romaji:"fu",block:"Block 6 H-Reihe",blockNr:6,script:'K'},
    {kana:"ヘ",romaji:"he",block:"Block 6 H-Reihe",blockNr:6,script:'K'},
    {kana:"ホ",romaji:"ho",block:"Block 6 H-Reihe",blockNr:6,script:'K'},

    {kana:"マ",romaji:"ma",block:"Block 7 M-Reihe",blockNr:7,script:'K'},
    {kana:"ミ",romaji:"mi",block:"Block 7 M-Reihe",blockNr:7,script:'K'},
    {kana:"ム",romaji:"mu",block:"Block 7 M-Reihe",blockNr:7,script:'K'},
    {kana:"メ",romaji:"me",block:"Block 7 M-Reihe",blockNr:7,script:'K'},
    {kana:"モ",romaji:"mo",block:"Block 7 M-Reihe",blockNr:7,script:'K'},

    {kana:"ヤ",romaji:"ya",block:"Block 8 Y-Reihe",blockNr:8,script:'K'},
    {kana:"ユ",romaji:"yu",block:"Block 8 Y-Reihe",blockNr:8,script:'K'},
    {kana:"ヨ",romaji:"yo",block:"Block 8 Y-Reihe",blockNr:8,script:'K'},

    {kana:"ラ",romaji:"ra",block:"Block 9 R-Reihe",blockNr:9,script:'K'},
    {kana:"リ",romaji:"ri",block:"Block 9 R-Reihe",blockNr:9,script:'K'},
    {kana:"ル",romaji:"ru",block:"Block 9 R-Reihe",blockNr:9,script:'K'},
    {kana:"レ",romaji:"re",block:"Block 9 R-Reihe",blockNr:9,script:'K'},
    {kana:"ロ",romaji:"ro",block:"Block 9 R-Reihe",blockNr:9,script:'K'},

    {kana:"ワ",romaji:"wa",block:"Block 10 W und ン",blockNr:10,script:'K'},
    {kana:"ヲ",romaji:"wo",block:"Block 10 W und ン",blockNr:10,script:'K'},
    {kana:"ン",romaji:"n",block:"Block 10 W und ン",blockNr:10,script:'K'},

    {kana:"ガ",romaji:"ga",block:"Block 11 Dakuten",blockNr:11,script:'K'},
    {kana:"ギ",romaji:"gi",block:"Block 11 Dakuten",blockNr:11,script:'K'},
    {kana:"グ",romaji:"gu",block:"Block 11 Dakuten",blockNr:11,script:'K'},
    {kana:"ゲ",romaji:"ge",block:"Block 11 Dakuten",blockNr:11,script:'K'},
    {kana:"ゴ",romaji:"go",block:"Block 11 Dakuten",blockNr:11,script:'K'},
    {kana:"ザ",romaji:"za",block:"Block 11 Dakuten",blockNr:11,script:'K'},
    {kana:"ジ",romaji:"ji",block:"Block 11 Dakuten",blockNr:11,script:'K'},
    {kana:"ズ",romaji:"zu",block:"Block 11 Dakuten",blockNr:11,script:'K'},
    {kana:"ゼ",romaji:"ze",block:"Block 11 Dakuten",blockNr:11,script:'K'},
    {kana:"ゾ",romaji:"zo",block:"Block 11 Dakuten",blockNr:11,script:'K'},
    {kana:"ダ",romaji:"da",block:"Block 11 Dakuten",blockNr:11,script:'K'},
    {kana:"ヂ",romaji:"ji",block:"Block 11 Dakuten",blockNr:11,script:'K'},
    {kana:"ヅ",romaji:"zu",block:"Block 11 Dakuten",blockNr:11,script:'K'},
    {kana:"デ",romaji:"de",block:"Block 11 Dakuten",blockNr:11,script:'K'},
    {kana:"ド",romaji:"do",block:"Block 11 Dakuten",blockNr:11,script:'K'},
    {kana:"バ",romaji:"ba",block:"Block 11 Dakuten",blockNr:11,script:'K'},
    {kana:"ビ",romaji:"bi",block:"Block 11 Dakuten",blockNr:11,script:'K'},
    {kana:"ブ",romaji:"bu",block:"Block 11 Dakuten",blockNr:11,script:'K'},
    {kana:"ベ",romaji:"be",block:"Block 11 Dakuten",blockNr:11,script:'K'},
    {kana:"ボ",romaji:"bo",block:"Block 11 Dakuten",blockNr:11,script:'K'},

    {kana:"パ",romaji:"pa",block:"Block 12 Handakuten",blockNr:12,script:'K'},
    {kana:"ピ",romaji:"pi",block:"Block 12 Handakuten",blockNr:12,script:'K'},
    {kana:"プ",romaji:"pu",block:"Block 12 Handakuten",blockNr:12,script:'K'},
    {kana:"ペ",romaji:"pe",block:"Block 12 Handakuten",blockNr:12,script:'K'},
    {kana:"ポ",romaji:"po",block:"Block 12 Handakuten",blockNr:12,script:'K'},

    {kana:"ャ",romaji:"ya",block:"Block 13 Kleine Kana",blockNr:13,script:'K'},
    {kana:"ュ",romaji:"yu",block:"Block 13 Kleine Kana",blockNr:13,script:'K'},
    {kana:"ョ",romaji:"yo",block:"Block 13 Kleine Kana",blockNr:13,script:'K'},
    {kana:"ッ",romaji:"tsu",block:"Block 13 Kleine Kana",blockNr:13,script:'K'},

    {kana:"ァ",romaji:"a",block:"Block 14 Kleine Vokale",blockNr:14,script:'K'},
    {kana:"ィ",romaji:"i",block:"Block 14 Kleine Vokale",blockNr:14,script:'K'},
    {kana:"ゥ",romaji:"u",block:"Block 14 Kleine Vokale",blockNr:14,script:'K'},
    {kana:"ェ",romaji:"e",block:"Block 14 Kleine Vokale",blockNr:14,script:'K'},
    {kana:"ォ",romaji:"o",block:"Block 14 Kleine Vokale",blockNr:14,script:'K'}
  ];

  let consumed = new Set();
  let lastPick = null;
  const els = {
    script: document.getElementById('script'),
    blockFrom: document.getElementById('blockFrom'),
    blockTo: document.getElementById('blockTo'),
    mode: document.getElementById('mode'),
    showSolution: document.getElementById('showSolution'),
    avoidRepeats: document.getElementById('avoidRepeats'),
    newDraw: document.getElementById('newDraw'),
    toggleSolution: document.getElementById('toggleSolution'),
    reset: document.getElementById('reset'),
    question: document.getElementById('question'),
    answer: document.getElementById('answer'),
    meta: document.getElementById('meta'),
    consumed: document.getElementById('consumed'),
    total: document.getElementById('total'),
    updateBar: document.getElementById('updateBar')
  };

  function dataset(){
    const s = els.script.value;
    if(s === 'hiragana') return H;
    if(s === 'katakana') return K;
    return H.concat(K);
  }

  function fillBlocks(){
    const blocks = [...new Set(dataset().map(d => d.blockNr))].sort((a,b)=>a-b);
    els.blockFrom.innerHTML = '';
    els.blockTo.innerHTML = '';
    blocks.forEach(b => { els.blockFrom.add(new Option(b, b)); els.blockTo.add(new Option(b, b)); });
    els.blockFrom.value = Math.min(...blocks);
    els.blockTo.value = Math.max(...blocks);
  }

  function keyOf(d){ return `${d.script}|${d.kana}
${d.romaji}`; }

  function currentPool(){
    let from = parseInt(els.blockFrom.value, 10);
    let to   = parseInt(els.blockTo.value, 10);
    if(isNaN(from) || isNaN(to)) return [];
    if(from > to){ [from, to] = [to, from]; }
    return dataset().filter(d => d.blockNr >= from && d.blockNr <= to);
  }

  function updateTotals(){
    const pool = currentPool();
    els.total.textContent = pool.length;
    const used = [...consumed].filter(key => pool.some(d => keyOf(d) === key)).length;
    els.consumed.textContent = used;
  }

  function render(pick){
    if(!pick){ els.question.textContent = '?'; els.answer.textContent = '?'; els.answer.hidden = true; els.meta.textContent=''; return; }
    const mode = els.mode.value;
    const show = els.showSolution.checked;
    els.question.textContent = (mode === 'kana') ? pick.kana : pick.romaji;
    els.answer.textContent   = (mode === 'kana') ? pick.romaji : pick.kana;
    els.answer.hidden = !show;
    const scriptLabel = pick.script === 'H' ? 'Hiragana' : 'Katakana';
    els.meta.textContent = `${scriptLabel} · ${pick.block} (Block ${pick.blockNr})`;
  }

  function drawNew(){
    const pool = currentPool();
    const avoid = els.avoidRepeats.checked;
    const candidates = avoid ? pool.filter(d => !consumed.has(keyOf(d))) : pool;
    if(candidates.length === 0){
      consumed.clear();
      els.answer.hidden = true;
      updateTotals();
      alert('Alle Karten im Bereich wurden gezogen. Verbrauch zurückgesetzt.');
      return;
    }
    const pick = candidates[Math.floor(Math.random() * candidates.length)];
    lastPick = pick;
    consumed.add(keyOf(pick));
    render(pick);
    updateTotals();
  }

  function wire(){
    els.newDraw.addEventListener('click', drawNew);
    els.toggleSolution.addEventListener('click', () => { els.showSolution.checked = !els.showSolution.checked; render(lastPick); });
    els.reset.addEventListener('click', () => { consumed.clear(); updateTotals(); render(lastPick); });
    ['script','blockFrom','blockTo','mode','showSolution','avoidRepeats'].forEach(id => {
      els[id].addEventListener('change', () => { fillBlocks(); updateTotals(); render(lastPick); });
    });
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Enter') drawNew();
      if(e.key.toLowerCase() === 's') { els.showSolution.checked = !els.showSolution.checked; render(lastPick); }
      if(e.key.toLowerCase() === 'r') { consumed.clear(); updateTotals(); render(lastPick); }
    });
  }

  fillBlocks();
  updateTotals();
  wire();
  drawNew();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'SW_UPDATED') {
        els.updateBar.hidden = false;
        els.updateBar.onclick = () => location.reload();
      }
    });
  }
});
