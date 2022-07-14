/** Textual markov chain generator */
class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let a = text.split(/[ \r\n]+/);
    this.words = a.filter(c => c !== "");
    this.obj = this.makeChains();
  }
  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */
    makeChains() {
    let arr = this.words;
    return arr.reduce(function(acc, next, i){
      let entry;
      if(next in acc && arr[i+1] == undefined) entry = [...acc[next], null];
      else if(next in acc) entry = [...acc[next], arr[i+1]];
      else if(arr[i+1] == undefined) entry = [null];
      else{entry = [arr[i+1]] }
      
      return {...acc, [next]: entry}

    },{})
  }
  /** return random text from chains */

    makeText(numWords = 100) {

    let obj = this.obj;

    let nextWord;
    let str = '';
    let count = 0;
    while (count <= numWords){
    for(let entry in obj){
      if(obj[entry] == undefined) {
        console.log(entry, undefined);
        return str;}
      nextWord = obj[entry][Math.floor(Math.random() * obj[entry].length)];
      if (nextWord != null && str.length === 0) str = nextWord;
      else if(nextWord != null) str = str.concat(" ",nextWord);
      else {return str;}
      count ++;}}
  return str;
}
}
module.exports = MarkovMachine;