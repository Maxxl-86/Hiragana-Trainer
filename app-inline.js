const DATA = [{"kana": "あ", "romaji": "a", "block": "Block 1 Vokale", "blockNr": 1}, {"kana": "い", "romaji": "i", "block": "Block 1 Vokale", "blockNr": 1}, {"kana": "う", "romaji": "u", "block": "Block 1 Vokale", "blockNr": 1}, {"kana": "え", "romaji": "e", "block": "Block 1 Vokale", "blockNr": 1}, {"kana": "お", "romaji": "o", "block": "Block 1 Vokale", "blockNr": 1}, {"kana": "か", "romaji": "ka", "block": "Block 2 K-Reihe", "blockNr": 2}, {"kana": "き", "romaji": "ki", "block": "Block 2 K-Reihe", "blockNr": 2}, {"kana": "く", "romaji": "ku", "block": "Block 2 K-Reihe", "blockNr": 2}, {"kana": "け", "romaji": "ke", "block": "Block 2 K-Reihe", "blockNr": 2}, {"kana": "こ", "romaji": "ko", "block": "Block 2 K-Reihe", "blockNr": 2}, {"kana": "さ", "romaji": "sa", "block": "Block 3 S-Reihe", "blockNr": 3}, {"kana": "し", "romaji": "shi", "block": "Block 3 S-Reihe", "blockNr": 3}, {"kana": "す", "romaji": "su", "block": "Block 3 S-Reihe", "blockNr": 3}, {"kana": "せ", "romaji": "se", "block": "Block 3 S-Reihe", "blockNr": 3}, {"kana": "そ", "romaji": "so", "block": "Block 3 S-Reihe", "blockNr": 3}, {"kana": "た", "romaji": "ta", "block": "Block 4 T-Reihe", "blockNr": 4}, {"kana": "ち", "romaji": "chi", "block": "Block 4 T-Reihe", "blockNr": 4}, {"kana": "つ", "romaji": "tsu", "block": "Block 4 T-Reihe", "blockNr": 4}, {"kana": "て", "romaji": "te", "block": "Block 4 T-Reihe", "blockNr": 4}, {"kana": "と", "romaji": "to", "block": "Block 4 T-Reihe", "blockNr": 4}, {"kana": "な", "romaji": "na", "block": "Block 5 N-Reihe", "blockNr": 5}, {"kana": "に", "romaji": "ni", "block": "Block 5 N-Reihe", "blockNr": 5}, {"kana": "ぬ", "romaji": "nu", "block": "Block 5 N-Reihe", "blockNr": 5}, {"kana": "ね", "romaji": "ne", "block": "Block 5 N-Reihe", "blockNr": 5}, {"kana": "の", "romaji": "no", "block": "Block 5 N-Reihe", "blockNr": 5}, {"kana": "は", "romaji": "ha", "block": "Block 6 H-Reihe", "blockNr": 6}, {"kana": "ひ", "romaji": "hi", "block": "Block 6 H-Reihe", "blockNr": 6}, {"kana": "ふ", "romaji": "fu", "block": "Block 6 H-Reihe", "blockNr": 6}, {"kana": "へ", "romaji": "he", "block": "Block 6 H-Reihe", "blockNr": 6}, {"kana": "ほ", "romaji": "ho", "block": "Block 6 H-Reihe", "blockNr": 6}, {"kana": "ま", "romaji": "ma", "block": "Block 7 M-Reihe", "blockNr": 7}, {"kana": "み", "romaji": "mi", "block": "Block 7 M-Reihe", "blockNr": 7}, {"kana": "む", "romaji": "mu", "block": "Block 7 M-Reihe", "blockNr": 7}, {"kana": "め", "romaji": "me", "block": "Block 7 M-Reihe", "blockNr": 7}, {"kana": "も", "romaji": "mo", "block": "Block 7 M-Reihe", "blockNr": 7}, {"kana": "や", "romaji": "ya", "block": "Block 8 Y-Reihe", "blockNr": 8}, {"kana": "ゆ", "romaji": "yu", "block": "Block 8 Y-Reihe", "blockNr": 8}, {"kana": "よ", "romaji": "yo", "block": "Block 8 Y-Reihe", "blockNr": 8}, {"kana": "ら", "romaji": "ra", "block": "Block 9 R-Reihe", "blockNr": 9}, {"kana": "り", "romaji": "ri", "block": "Block 9 R-Reihe", "blockNr": 9}, {"kana": "る", "romaji": "ru", "block": "Block 9 R-Reihe", "blockNr": 9}, {"kana": "れ", "romaji": "re", "block": "Block 9 R-Reihe", "blockNr": 9}, {"kana": "ろ", "romaji": "ro", "block": "Block 9 R-Reihe", "blockNr": 9}, {"kana": "わ", "romaji": "wa", "block": "Block 10 W und ん", "blockNr": 10}, {"kana": "を", "romaji": "wo", "block": "Block 10 W und ん", "blockNr": 10}, {"kana": "ん", "romaji": "n", "block": "Block 10 W und ん", "blockNr": 10}, {"kana": "が", "romaji": "ga", "block": "Block 11 Dakuten", "blockNr": 11}, {"kana": "ぎ", "romaji": "gi", "block": "Block 11 Dakuten", "blockNr": 11}, {"kana": "ぐ", "romaji": "gu", "block": "Block 11 Dakuten", "blockNr": 11}, {"kana": "げ", "romaji": "ge", "block": "Block 11 Dakuten", "blockNr": 11}, {"kana": "ご", "romaji": "go", "block": "Block 11 Dakuten", "blockNr": 11}, {"kana": "ざ", "romaji": "za", "block": "Block 11 Dakuten", "blockNr": 11}, {"kana": "じ", "romaji": "ji", "block": "Block 11 Dakuten", "blockNr": 11}, {"kana": "ず", "romaji": "zu", "block": "Block 11 Dakuten", "blockNr": 11}, {"kana": "ぜ", "romaji": "ze", "block": "Block 11 Dakuten", "blockNr": 11}, {"kana": "ぞ", "romaji": "zo", "block": "Block 11 Dakuten", "blockNr": 11}, {"kana": "だ", "romaji": "da", "block": "Block 11 Dakuten", "blockNr": 11}, {"kana": "ぢ", "romaji": "ji", "block": "Block 11 Dakuten", "blockNr": 11}, {"kana": "づ", "romaji": "zu", "block": "Block 11 Dakuten", "blockNr": 11}, {"kana": "で", "romaji": "de", "block": "Block 11 Dakuten", "blockNr": 11}, {"kana": "ど", "romaji": "do", "block": "Block 11 Dakuten", "blockNr": 11}, {"kana": "ば", "romaji": "ba", "block": "Block 11 Dakuten", "blockNr": 11}, {"kana": "び", "romaji": "bi", "block": "Block 11 Dakuten", "blockNr": 11}, {"kana": "ぶ", "romaji": "bu", "block": "Block 11 Dakuten", "blockNr": 11}, {"kana": "べ", "romaji": "be", "block": "Block 11 Dakuten", "blockNr": 11}, {"kana": "ぼ", "romaji": "bo", "block": "Block 11 Dakuten", "blockNr": 11}, {"kana": "ぱ", "romaji": "pa", "block": "Block 12 Handakuten", "blockNr": 12}, {"kana": "ぴ", "romaji": "pi", "block": "Block 12 Handakuten", "blockNr": 12}, {"kana": "ぷ", "romaji": "pu", "block": "Block 12 Handakuten", "blockNr": 12}, {"kana": "ぺ", "romaji": "pe", "block": "Block 12 Handakuten", "blockNr": 12}, {"kana": "ぽ", "romaji": "po", "block": "Block 12 Handakuten", "blockNr": 12}, {"kana": "ゃ", "romaji": "ya", "block": "Block 13 Kleine Kana", "blockNr": 13}, {"kana": "ゅ", "romaji": "yu", "block": "Block 13 Kleine Kana", "blockNr": 13}, {"kana": "ょ", "romaji": "yo", "block": "Block 13 Kleine Kana", "blockNr": 13}, {"kana": "っ", "romaji": "tsu", "block": "Block 13 Kleine Kana", "blockNr": 13}];
let consumed = new Set();
let lastPick = null;

const els = {
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
};

init();

function init(){
  const blocks = [...new Set(DATA.map(d => d.blockNr))].sort((a,b)=>a-b);
  blocks.forEach(b => {
    els.blockFrom.add(new Option(b, b));
    els.blockTo.add(new Option(b, b));
  });
  els.blockFrom.value = Math.min(...blocks);
  els.blockTo.value = Math.max(...blocks);
  updateTotals();

  els.newDraw.addEventListener('click', drawNew);
  els.toggleSolution.addEventListener('click', () => { els.showSolution.checked = !els.showSolution.checked; render(lastPick); });
  els.reset.addEventListener('click', () => { consumed.clear(); updateTotals(); render(lastPick); });
  ['blockFrom','blockTo','mode','showSolution','avoidRepeats'].forEach(id => {
    els[id].addEventListener('change', () => { updateTotals(); render(lastPick); });
  });

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') drawNew();
    if(e.key.toLowerCase() === 's') { els.showSolution.checked = !els.showSolution.checked; render(lastPick); }
    if(e.key.toLowerCase() === 'r') { consumed.clear(); updateTotals(); render(lastPick); }
  });

  drawNew();
}

function currentPool(){
  let from = parseInt(els.blockFrom.value, 10);
  let to = parseInt(els.blockTo.value, 10);
  if(from > to){ [from, to] = [to, from]; }
  return DATA.filter(d => d.blockNr >= from && d.blockNr <= to);
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

function keyOf(d){ return `${d.kana}|${d.romaji}`; }

function render(pick){
  if(!pick){ els.question.textContent = '?'; els.answer.textContent = '?'; return; }
  const mode = els.mode.value;
  const show = els.showSolution.checked;

  els.question.textContent = (mode === 'kana') ? pick.kana : pick.romaji;
  els.answer.textContent = (mode === 'kana') ? pick.romaji : pick.kana;
  els.answer.hidden = !show;
  els.meta.textContent = `${pick.block} (Block ${pick.blockNr})`;
}

function updateTotals(){
  const pool = currentPool();
  els.total.textContent = pool.length;
  const used = [...consumed].filter(key => pool.some(d => keyOf(d) === key)).length;
  els.consumed.textContent = used;
}
