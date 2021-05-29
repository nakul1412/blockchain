const fs=require('fs');
const cr=require('crypto');
const prompt=require('prompt-sync')();

let message=prompt('enter message ');

let private_Key= fs.readFileSync('pprivate.pem');
data=Buffer.from(message)

let sign=cr.privateEncrypt(private_Key,data);
console.log("message in bit (hex format) = ",data.toString("hex"))

console.log("encrypted message=",sign.toString("hex"));
fs.writeFile('sign.txt',sign,function(err){ console.log("encrypted file created(sign)")});


