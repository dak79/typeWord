let threeLetters = ['art', 'add', 'aye', 'big', 'bow', 'cat', 'cos', 'dig', 'duo', 'elf', 'end', 'fog', 'flu', 'gag', 'got', 'hat', 'how', 'ink', 'its', 'jet', 'jug', 'ken', 'kin', 'led', 'low', 'mag', 'mob', 'neb', 'nod', 'old', 'owe', 'peg', 'per', 'ran', 'rid', 'see', 'shy', 'tea', 'ten', 'van', 'via', 'who', 'won', 'yep', 'you'];

let fourLetters = ['also', 'away', 'belt', 'bird', 'come', 'copy', 'duke', 'down', 'edge', 'evil', 'fact', 'flow', 'glad', 'gulf', 'hope', 'huge', 'into', 'iron', 'jump', 'just', 'lack', 'load', 'mind', 'most', 'nine', 'nose', 'okey', 'open', 'pipe', 'post', 'rent', 'rule', 'seem', 'shot', 'text', 'trip', 'unit', 'user', 'very', 'vote', 'whom', 'word', 'yeah', 'year', 'zero', 'zone'];

let fiveLetters = ['ahead', 'agent', 'badly', 'broad', 'cheap', 'clean', 'delay', 'drive', 'enemy', 'exist', 'fault', 'fight', 'green', 'guest', 'ideal', 'index', 'japan', 'judge', 'known', 'legal', 'logic', 'media', 'music', 'nurse', 'noted', 'occur', 'other', 'power', 'prior', 'quick', 'quiet', 'roger', 'round', 'scale', 'sleep', 'thank', 'touch', 'until', 'urban', 'where', 'white', 'young', 'youth'];

let sixLetters = ['anyone', 'artist', 'behalf', 'beyond', 'client', 'crisis', 'debate', 'device', 'eating', 'eleven', 'finger', 'formal', 'garden', 'global', 'headed', 'honest', 'injury', 'island', 'jersey', 'junior', 'killed', 'league', 'lucent', 'memory', 'minute', 'nights', 'motion', 'orange', 'origin', 'player', 'proven', 'really', 'region', 'season', 'social', 'toward', 'twenty', 'visual', 'volume', 'wholly', 'weight', 'yellow'];

let sevenLetters = ['advised', 'anybody', 'beneath', 'burning', 'chamber', 'chronic', 'display', 'dynamic', 'elderly', 'enhance', 'foreign', 'further', 'gateway', 'gigabit', 'hearing', 'himself', 'instant', 'involve', 'kitchen', 'knowing', 'learned', 'limited', 'massive', 'mention', 'neither', 'nuclear', 'outcome', 'organic', 'portion', 'payment', 'replace', 'routine', 'serious', 'similar', 'thought', 'typical', 'upgrade', 'utility', 'veteran', 'visible', 'wanting', 'welcome'];

let eightLetters = ['achieved', 'anywhere', 'boundary', 'business', 'chemical', 'colorful', 'deadline', 'disclose', 'earnings', 'evidence', 'flagship', 'frontier', 'genomics', 'grateful', 'historic', 'humanity', 'initiate', 'isolated', 'judgment', 'junction', 'keyboard', 'laughter', 'literary', 'meantime', 'merchant', 'northern', 'numerous', 'optimism', 'overseas', 'patience', 'pipeline', 'regional', 'research', 'scrutiny', 'solution', 'taxpayer', 'tropical', 'unlawful', 'unlikely', 'weakness', 'withdraw', 'yourself'];
let point = 0;
let level = 0;
let i;
let rW;
let w;
let downloadTimer;
let h;



window.addEventListener('keydown', start);

function start(evt) {
  if (evt.key === 'Enter') {
    random();
    countDown();
    window.removeEventListener('keydown', start);
    document.addEventListener('input', wordValue);

    function wordValue() {
      let word = document.querySelector('#typeWord');
      let w2 = word.value;
      if (w2 === rW) {
        point += 100;
        let addPoint = document.querySelector('#point');
        addPoint.innerHTML = point;
        i += 1;
        level += 1;
        let addLevel = document.querySelector('#level');
        addLevel.innerHTML = level;
        document.querySelector('#typeWord').value = "";
        random();
        countDown();
      }
    }

  }
}

function countDown() {
  let timeleft = 10;
  let downloadTimer1 = setInterval(timer, 1000);

  function timer() {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      console.log('hai perso');
    }
    document.querySelector("#progressBar").value = timeleft;
    timeleft -= 1;

  }
}


function random() {
  if (level <= 5) {
    let rl = Math.round(Math.random() * (threeLetters.length - 1));
    rW = threeLetters[rl];
    let b = document.querySelector('#randomWord');
    b.innerHTML = rW;
    return rW;

  } else if ((level > 5) && (level <= 10)) {
    let rl = Math.round(Math.random() * (fourLetters.length - 1));
    rW = fourLetters[rl];
    let b = document.querySelector('#randomWord');
    b.innerHTML = rW;
    return rW;

  } else if ((level > 10) && (level <= 15)) {
    let rl = Math.round(Math.random() * (fiveLetters.length - 1));
    rW = fiveLetters[rl];
    let b = document.querySelector('#randomWord');
    b.innerHTML = rW;
    return rW;
  } else if ((level > 15) && (level <= 20)) {
    let rl = Math.round(Math.random() * (sixLetters.length - 1));
    rW = sixLetters[rl];
    let b = document.querySelector('#randomWord');
    b.innerHTML = rW;
    return rW;

  } else if ((level > 20) && (level <= 25)) {
    let rl = Math.round(Math.random() * (sevenLetters.length - 1));
    rW = sevenLetters[rl];
    let b = document.querySelector('#randomWord');
    b.innerHTML = rW;
    return rW;
  } else if ((level > 25) && (level <= 30)) {
    let rl = Math.round(Math.random() * (eightLetters.length - 1));
    rW = eightLetters[rl];
    let b = document.querySelector('#randomWord');
    b.innerHTML = rW;
    return rW;
  } else if (level > 30) {
    console.log('hai vinto');
  }

}
