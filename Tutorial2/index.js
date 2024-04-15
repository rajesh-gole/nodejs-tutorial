const fs = require('fs')

// console.log(fs);
// fs.writeFile('t1.txt', 'How are you?', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('Sucess');
//     }
// })

// fs.appendFile('t1.txt', ' How do you do?', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('Sucess');
//     }
// })

// fs.readFile('t1.txt', 'utf8' ,(err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// fs.rename('t1.txt', 't2.txt' ,(err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('Renamed Success');
//     }
// })

// fs.unlink('t2.txt',(err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('Deleted Success');
//     }
// })

// fs.exists('t1.txt',(res) => {
//     if(res) {
//         console.log('Found Success');
//     } else {
//         console.log('Not Found');
//     }
// })

fs.writeFileSync('myFile.txt', 'Test Again')


// http url path fs

// writrFile() // writeFileSync()
// appendFile()
// readFile()
// rename()
// unlink()
// exists()

