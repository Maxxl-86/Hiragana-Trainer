
window.addEventListener("DOMContentLoaded",()=>{
  const DATA = [
    {"kana": "あ", "romaji": "a", "block": "Block 1 Vokale", "blockNr": 1},
    {"kana": "い", "romaji": "i", "block": "Block 1 Vokale", "blockNr": 1},
    {"kana": "う", "romaji": "u", "block": "Block 1 Vokale", "blockNr": 1},
    {"kana": "え", "romaji": "e", "block": "Block 1 Vokale", "blockNr": 1},
    {"kana": "お", "romaji": "o", "block": "Block 1 Vokale", "blockNr": 1}
    // ... (kürzung: hier könntest du deine komplette DATA weiterführen)
  ];
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
    updateBar: document.getElementById('updateBar')
  };
  function fillBlocks(){
    const blocks = [...new Set(DATA.map(d => d.blockNr))].sort((a,b)=>a-b);
    els.blockFrom.innerHTML = '';
    els.blockTo.innerHTML = '';
    blocks.forEach(b => { els.blockFrom.add(new Option(b, b)); els.blockTo.add(new Option(b, b)); });
    els.blockFrom.value = Math.min(...blocks);
    els.blockTo.value = Math.max(...blocks);
  }
  function keyOf(d){ return `${d.kana}\n${d.romaji}`; }
  function currentPool(){
    let from = parseInt(els.blockFrom.value, 10);
    let to = parseInt(els.blockTo.value, 10);
    if(isNaN(from) || isNaN(to)) return [];
    if(from > to){ [from, to] = [to, from]; }
    return DATA.filter(d => d.blockNr >= from && d.blockNr <= to);
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
    els.answer.textContent = (mode === 'kana') ? pick.romaji : pick.kana;
    els.answer.hidden = !show;
    els.meta.textContent = `${pick.block} (Block ${pick.blockNr})`;
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
    ['blockFrom','blockTo','mode','showSolution','avoidRepeats'].forEach(id => {
      els[id].addEventListener('change', () => { updateTotals(); render(lastPick); });
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

  // SW Update banner
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'SW_UPDATED') {
        els.updateBar.hidden = false;
      }
    });
  }
});
