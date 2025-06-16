const crypto = require('crypto')

// -------------------------------------
//              crypto module
// -------------------------------------

// console.log(crypto);

const randomBytes = crypto.randomBytes(10).toString('hex')

console.log('randomBytes: ', randomBytes);

const hashValue = crypto.createHash('sha256').update('synoize').digest('hex')

console.log('hashValue: ', hashValue);

const newHashValue = crypto.createHash('sha256').update('synoize').digest('hex')

console.log('newHashValue: ', newHashValue);
