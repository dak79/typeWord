let threeLetters = ['art', 'add', 'aye', 'big', 'bow', 'cat', 'cos', 'dig', 'duo', 'elf', 'end', 'fog', 'flu', 'gag', 'got', 'hat', 'how', 'ink', 'its', 'jet', 'jug', 'ken', 'kin', 'led', 'low', 'mag', 'mob', 'neb', 'nod', 'old', 'owe', 'peg', 'per', 'ran', 'rid', 'see', 'shy', 'tea', 'ten', 'van', 'via', 'who', 'won', 'yep', 'you'];

let fourLetters = ['also', 'away', 'belt', 'bird', 'come', 'copy', 'duke', 'down', 'edge', 'evil', 'fact', 'flow', 'glad', 'gulf', 'hope', 'huge', 'into', 'iron', 'jump', 'just', 'lack', 'load', 'mind', 'most', 'nine', 'nose', 'okey', 'open', 'pipe', 'post', 'rent', 'rule', 'seem', 'shot', 'text', 'trip', 'unit', 'user', 'very', 'vote', 'whom', 'word', 'yeah', 'year', 'zero', 'zone'];

let fiveLetters = ['ahead', 'agent', 'badly', 'broad', 'cheap', 'clean', 'delay', 'drive', 'enemy', 'exist', 'fault', 'fight', 'green', 'guest', 'ideal', 'index', 'japan', 'judge', 'known', 'legal', 'logic', 'media', 'music', 'nurse', 'noted', 'occur', 'other', 'power', 'prior', 'quick', 'quiet', 'roger', 'round', 'scale', 'sleep', 'thank', 'touch', 'until', 'urban', 'where', 'white', 'young', 'youth'];

let sixLetters = ['anyone', 'artist', 'behalf', 'beyond', 'client', 'crisis', 'debate', 'device', 'eating', 'eleven', 'finger', 'formal', 'garden', 'global', 'headed', 'honest', 'injury', 'island', 'jersey', 'junior', 'killed', 'league', 'lucent', 'memory', 'minute', 'nights', 'motion', 'orange', 'origin', 'player', 'proven', 'really', 'region', 'season', 'social', 'toward', 'twenty', 'visual', 'volume', 'wholly', 'weight', 'yellow'];

let sevenLetters = ['advised', 'anybody', 'beneath', 'burning', 'chamber', 'chronic', 'display', 'dynamic', 'elderly', 'enhance', 'foreign', 'further', 'gateway', 'gigabit', 'hearing', 'himself', 'instant', 'involve', 'kitchen', 'knowing', 'learned', 'limited', 'massive', 'mention', 'neither', 'nuclear', 'outcome', 'organic', 'portion', 'payment', 'replace', 'routine', 'serious', 'similar', 'thought', 'typical', 'upgrade', 'utility', 'veteran', 'visible', 'wanting', 'welcome'];

let eightLetters = ['achieved', 'anywhere', 'boundary', 'business', 'chemical', 'colorful', 'deadline', 'disclose', 'earnings', 'evidence', 'flagship', 'frontier', 'genomics', 'grateful', 'historic', 'humanity', 'initiate', 'isolated', 'judgment', 'junction', 'keyboard', 'laughter', 'literary', 'meantime', 'merchant', 'northern', 'numerous', 'optimism', 'overseas', 'patience', 'pipeline', 'regional', 'research', 'scrutiny', 'solution', 'taxpayer', 'tropical', 'unlawful', 'unlikely', 'weakness', 'withdraw', 'yourself'];

let timeleft = 10;
let downloadTimer = setInterval(timer, 1000);

function timer() {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
  }
  document.querySelector("#progressBar").value = timeleft;
  timeleft -= 1;
}
