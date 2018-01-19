const rs = require("readline-sync");
console.log("Witam w greneratorze haseł !!!");
const difficulty = rs.question("Jak trudne ma być hasło\nŁ-Łatwe\t\tŚ-Średnie\tT-Trudne\t").toUpperCase();
let easy = "walec,głośnik,anioł,miasto,zaufanie,cholik,przychód,splendor,bańka,bank,policjant,straż,sowa,mleko".split(",");
let midium = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,r,s,t,u,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,R,S,T,U,W,X,Y,Z".split(",");
let number = "1,2,3,4,5,6,7,8,9,0".split(",");
let hard = "!,@,#,$,%,^,&,*,`,~,?".split(",");
let password = [];
let hards;

let loss = (h) => {
    let los = Math.floor(Math.random() * h.length);
    return los;
}

// let los = Math.floor(Math.random() * easy.length);
// let los1 = Math.floor(Math.random() * easy.length);
// let losm = Math.floor(Math.random() * midium.length);
// let losn = Math.floor(Math.random() * number.length);


if (difficulty == "Ł") {
    console.log(easy[loss(easy)] + easy[loss(easy)] + number[loss(number)]);
    // console.log(easy[los1] + easy[los]);
}

if (difficulty == "Ś") {
    for (let i = 0; i < 8; i++) {
        let mid = midium[loss(midium)];
        password.push(mid);
    }
    num = number[loss(number)];
    password.splice(loss(password), 1, num);
    console.log(password.join(""));
}

if (difficulty == "T") {
    for (let i = 0; i < 8; i++) {
        hards = number + midium + hard;
        hards = hards.split(",");
        hards = hards[loss(hards)];
        password.push(hards);
    }
    console.log(password.join(""));
}