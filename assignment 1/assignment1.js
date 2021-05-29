const prompt = require('prompt-sync')();
const cr=require('crypto');
const name = prompt('enter the string input ');
console.log(name ,"in bit(hex format) = ",(Buffer.from(name,"utf-8").toString("hex")))
let target="0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF";
let hash,i=1,nname;
nname=name+String(i);
hash=cr.createHash('sha256').update(nname).digest('hex');
while(hash>=target)
{ i++;
  nname=name+String(i); 
 hash=cr.createHash('sha256').update(nname).digest('hex')
}
console.log("output \n magic number = ",i);
console.log(nname ,"in bit(hex format) = ",(Buffer.from(nname,"utf-8").toString("hex")))
// buffer.from(nnmae,"any type of encoding ,always give answer in utf8 format")
console.log("sha-256 of ",nname," = ",hash)

