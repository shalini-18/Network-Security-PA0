// Function to encipher plain text into cipher text

function plain_to_cipher(){

    // takes input value of plain text 
    let inputValue = document.getElementsByClassName("plain-text")[0]      
    
    var r = inputValue.value;
    const arr = [];
    var c = 'abcdefghijklmnopqrstuvwxyz';
    var cd = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(var i = 0; i < r.length; i++) {
        var cc = r[i];

        // If character is not alphabet, then continue
        if(!((cc>='a' && cc<='z') | (cc>='A' && cc<='Z'))) continue; 

        let ss = "", ed = "";
        if(i!=0) ss = r.substr(0,i);
        if(i!=r.length) ed = r.substr(i+1);
        var l = r.charCodeAt(i);

        // Enciphering the char by using the mapping: a->z, b->y, c->x, ..
        if(cc>='A' && cc<='Z') {
            l = l - 65;
            r = ss + cd[25-l] + ed;
            continue;
        }
        l = l - 97;
        r = ss + c[25-(l)] + ed;
    }
    document.getElementsByClassName("box")[0].innerText = r;
}

//Function to decipher cipher text into plain text

function cipher_to_plain(){

    // takes input value of cipher text
    let inputValue = document.getElementsByClassName("cipher-text2")[0]     
    
    var r = inputValue.value;
    const arr = [];
    var c = 'abcdefghijklmnopqrstuvwxyz';
    var cd = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(var i = 0; i < r.length; i++) {
        var cc = r[i];

        // If character is not alphabet, then continue
        if(!((cc>='a' && cc<='z') | (cc>='A' && cc<='Z'))) continue;    
            
        let ss = "", ed = "";
        if(i!=0) ss = r.substr(0,i);
        if(i!=r.length) ed = r.substr(i+1);
        var l = r.charCodeAt(i);

        // Deciphering the char by using the mapping: a->z, b->y, c->x, ..
        if(cc>='A' && cc<='Z') {
            l = l - 65;
            r = ss + cd[25-l] + ed;
            continue;
        }
        l = l - 97;
        r = ss + c[25-(l)] + ed;
    }
    document.getElementsByClassName("box2")[0].innerText = r;
}

// triggered when encipher arrow is clicked
let plain_to_cipher1 = document.getElementsByClassName("plain-btn")[0]  

// triggered when decipher arrow is clicked
let cipher_to_plain1 = document.getElementsByClassName("cipher-btn")[0] 

// adding event listener to encipher plain text into cipher text
plain_to_cipher1.addEventListener("click", plain_to_cipher)

// adding event listener to decipher cipher text into plain text
cipher_to_plain1.addEventListener("click",cipher_to_plain)              