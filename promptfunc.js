const prompt=require("prompt-sync")();
const X=prompt("Enter X: ");
const Y=prompt("Enter Y: ");
 
console.log(X,Y);
 
function adunare(X,Y){
    let s=parseInt(X)+parseInt(Y)
    return s;
    
}
 
function scadere(X,Y){
    console.log("Diferente numerelor este: ",X-Y)
}
function inmultire(X,Y){
    let inm=X*Y;
    return inm;
}
 
function impartire(X,Y){
    console.log("Catul numerelor este: ",X/Y)
}
 
//adunare (X,Y);
//console.log("Rezultatul adunarii este: "+ adunare(X,Y));
console.log("Rezultatul adunarii este: "+ adunare(X,Y)+ "\nInmultirea numerelor este: "+ inmultire(X,Y))
console.log("Compusul este "+(adunare(X,Y)+inmultire(X,Y)));
scadere (X,Y);
inmultire (X,Y);
impartire (X,Y);



