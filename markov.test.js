const MarkovMachine = require("./markov");

describe("MarkovMachine class tests", function (){

    beforeEach(function(){
     testMarkov = new MarkovMachine("cat in the hat");
    })


test('new Markov Machine should have words', function(){
expect(testMarkov.words.length).toEqual(4);})

test('it should return a string', function(){
let expected = testMarkov.makeText();

expect(expected).toMatch(/the/);

})



})