/** Command-line tool to generate Markov text. */
// let httpText = 'http'
const MarkovMachine = require("./markov");

const fs = require('fs');
const process = require('process');
const argv = process.argv;
const axios = require('axios');

function generateText(text){
    let createMarkovPromise = new Promise(function(resolve, reject){
        let mm = new MarkovMachine(text);
        if(mm)resolve(mm);
        else{reject("an error occured")}
    })
createMarkovPromise
.then(mm => {
    console.log(mm.makeText())})
}


function cat(path){
    try{
       let text = fs.readFileSync(path, "utf8")
        
       generateText(text);
        
        console.log(`generated data from ${path}`)
        }
    catch(e){
        console.log("there was an error reading the file.");
        process.exit(1);
    }
            }

async function webCat(url){

    let response = axios.get(url);
    response
    .then(response => {
        let text = response.data
        generateText(text)})
    .catch(err => {
        console.log("Error reading the page")
        process.exit(1);})}
    

if(argv[2] === 'file') cat(argv[3]);
else if(argv[2] === 'url') webCat(argv[3])