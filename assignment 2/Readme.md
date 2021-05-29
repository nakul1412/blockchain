#       ASSIGNMENT 2
This folder contains three programs. One for generation of key-pair, one for creating the signature and one for verifying the same. 

I have already run the keygen.js to generate the keypairs which are automatically stored in public.pem and private.pem files after their generation.

So the example of encoded texts i am providing will only work with this pre-generated pair otherwise as the process of key generation generates a new pair everytime we would have different signatures each time. 


so, input as following in [verificationofmessage.js](./verificationofmessage.js) :-

public key path- [public.pem ](./public.pem)
## INPUT:
* Input 1: (correct)
    -  unencrypted text : apple
    -  [encrypted text(path) : sign1.txt](./sign1.txt)
* Input 2: (correct)
    -  unencrypted text : nakul patel
    -  [encrypted text(path) : sign2.txt](./sign2.txt)

* Input 3: (incorrect)
    - unencrypted text : banana
    -   [encrypted text(path) : sign1.txt](./sign1.txt)