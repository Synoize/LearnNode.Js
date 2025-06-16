const os = require('os')

// -------------------------------------
            //  os module
// -------------------------------------

console.log("OS: ", os);
console.log("Platform: ", os.platform());
console.log("User: ", os.userInfo());
console.log("OS Architecture: ", os.arch());
console.log("Free Memory: ", os.freemem(), "bytes");
console.log("Total Memory: ", os.totalmem(), "bytes");
console.log("Up Time: ", os.uptime(), "seconds");
console.log("Home Directory: ", os.homedir());
console.log("Host Name: ", os.hostname());
console.log("Network Interfaces: ", os.networkInterfaces());
console.log("CPU Info: ", os.cpus());
console.log("Temporary Directory: ", os.tmpdir());
console.log("Operating System: ", os.type());