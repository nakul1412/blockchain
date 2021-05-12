const prompt = require('prompt-sync')();
const cr=require('crypto');
const name = prompt('enter the string input ');
let target="0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF";
let hash,i=1,nname;
nname=name+String(i);
hash=cr.createHash('sha256').update(nname).digest('hex');
while((parseInt(hash,16))>=(parseInt(target,16)))
{ i++;
  nname=name+String(i); 
 hash=cr.createHash('sha256').update(nname).digest('hex');
}
console.log(i);
