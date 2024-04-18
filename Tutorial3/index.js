const os = require('os');
const path = require('path');
// console.log(os);
// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());

// const tot_mem = os.totalmem(); // bytes
// const tot_Kb = tot_mem / 1024; // KB
// const tot_Mb = tot_Kb / 1024; //MB
// const tot_Gb = Math.ceil(tot_Mb / 1024); //GB

// console.log('Total Memory : ', tot_Gb , 'Gb');


//Path Module
// console.log(__dirname);
// console.log(__filename);

// const ext = path.extname('myVideo.mp4')
// console.log(ext);

// const joinName = path.join(__dirname + '/all-files')
const joinName = path.join(__dirname + '/../all-files')
console.log(joinName);


