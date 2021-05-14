const fs=require('fs');
const cr=require('crypto');
const prompt=require('prompt-sync')();
let message=prompt('enter message ');
let private_Key= fs.readFileSync('private.pem','utf8');
let sign=cr.privateEncrypt(private_Key,Buffer.from(message));
console.log("encrypted message=",sign.toString("base64"));
fs.writeFile('sign.txt',sign,function(err){ console.log("encrypted file created")});


