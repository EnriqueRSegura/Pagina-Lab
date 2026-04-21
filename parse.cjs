const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('C:/Users/Enrique/Downloads/Semblanza JGTF V3.2 Final.pdf');
pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(err => console.error(err));
