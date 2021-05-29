const prompt=require("prompt-sync")();
const fs=require("fs")
const now = require('nano-time');
const cr = require("crypto")


    function toBytesInt32 (num)
    {
        arr = new ArrayBuffer(4); 
        view = new DataView(arr);
        view.setUint32(0, num, false); 
        return arr;
    }

    function toBuffer(ab) 
    {
        var buf = Buffer.alloc(ab.byteLength);
        var view = new Uint8Array(ab);
        for (var i = 0; i < buf.length; ++i)
        {
            buf[i] = view[i];
        }
        return buf;
    }

let no_of_inputs = prompt("enter no. of inputs = ");
transaction_data=Buffer.from(now())
transaction_data=Buffer.concat([transaction_data,toBuffer(toBytesInt32(no_of_inputs))]);
let i=0;

while(i<no_of_inputs)
{
    console.log("input ",i+1)
    let transaction_id =prompt("enter transaction id  (hex format) = ")
    let index = prompt("enter index = ");
    let sign =  prompt("enter  signatue = ");
    sign_length=(Buffer.from(sign)).byteLength;
    transaction_data=Buffer.concat([transaction_data,Buffer.from(transaction_id),
                                   toBuffer(toBytesInt32(index)),
                                   toBuffer(toBytesInt32(sign_length))])
    transaction_data=Buffer.concat([transaction_data,Buffer.from(sign)])
    i++;
 }

let no_of_outputs = prompt("enter no. of outputs = ");
transaction_data=Buffer.concat([transaction_data,toBuffer(toBytesInt32(no_of_outputs))]);
i=0;

while(i<no_of_outputs)
{
    console.log("output ",i+1)
    let  no_of_coins=prompt("number of coins = ")
    let  public_key_path = prompt("enter path of public key = ");
    let  publickey = fs.readFileSync(public_key_path);
    publickey_length=(Buffer.from(publickey)).byteLength;
    transaction_data = Buffer.concat([transaction_data,
                                     toBuffer(toBytesInt32(no_of_coins)),
                                     toBuffer(toBytesInt32(publickey_length)),
                                     Buffer.from(publickey)])
    i++;
 }

console.log("transaction data(buffer (hex format)) =",transaction_data.toString("hex"));
hash=cr.createHash('sha256').update(transaction_data).digest('hex')
console.log("hash of transaction data(transaction id) = ",hash)
fs.writeFileSync("the calculated transaction ID in hex format.dat",Buffer.from(hash))

