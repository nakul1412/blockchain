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
          fs.writeFileSync('pprivate.pem',privateKey)
          fs.writeFile('ppublic.pem',publicKey,function(err){})
          console.log("public key = ",publicKey.toString('base64')); // toString("base64") in just fuck (no impact)
          console.log("private key = ",privateKey);
         }
         else
         {
           console.log("Errr is: ", err);
         }
           
      }
);
