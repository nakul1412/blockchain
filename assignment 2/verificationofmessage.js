const pr=require("prompt-sync")();
const fs=require("fs");
const cr=require('crypto');

let publickey_path=pr('enter public key(path) : ');
let sign_path=pr('enter sign(encrypted text)(path) : ');
let message=pr('enter message(unencrypted text) : ');
let public_key=fs.readFileSync(publickey_path);
let sign=fs.readFileSync(sign_path);
let decrypted_message=cr.publicDecrypt(public_key,sign);
console.log("sign = " ,sign.toString("hex"))
console.log("decrypted message = " ,decrypted_message.toString("hex"))  // in tostring,by default give ans in utf8 format 

if(decrypted_message.toString()==message)
console.log("Signature verified!");
else
console.log("Verification failed");

