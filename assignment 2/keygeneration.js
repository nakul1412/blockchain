const cr=require("crypto");
const fs=require("fs");
let public_Key,private_Key;
let key=cr.generateKeyPair('rsa',
 {
    modulusLength: 1024,
    publicKeyEncoding:
    {
      type: 'pkcs1',
      format: 'pem'
    },
    privateKeyEncoding: 
    {
      type: 'pkcs1',
      format: 'pem',
     }
 },
 function(err, publicKey, privateKey) 
      { 
         if(!err)
         {
          fs.writeFile('pprivate.pem',privateKey,function(err){})
          fs.writeFile('ppublic.pem',publicKey,function(err){})
         }
         else
         {
           console.log("Errr is: ", err);
         }
           
      }
);
