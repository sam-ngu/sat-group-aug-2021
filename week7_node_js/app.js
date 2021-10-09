const os = require('os')
const fs = require('fs');

const math = require("./src/utils/math");


// // sync
// console.log('hea')

// // async
// setInterval(function(){
//     console.log('clock')
// }, 1000)

// setTimeout(function(){
//     console.log('heya')
// }, 500)

// fetch().then()

console.log(__dirname)

const htmlPath = __dirname + '/demo.html';

// expensive


const html = fs.readFileSync(htmlPath, 'utf-8');

console.log(html);

const content = `
# Hyehehafad

## this is a readme
`

fs.writeFileSync(__dirname + '/demo.html', content);

// fs.appendFileSync(__dirname + "/demo.html", content);



// console.log(os.cpus());


// console.log(math.add(5, 6));
// console.log(math.minus(5, 6));
// // module 



// console.log('heyayyayaa');
// console.log(1 + 5);


// const imgPath = process.argv[2]
// console.log(imgPath)



// nodejs?

// modules?

// 
