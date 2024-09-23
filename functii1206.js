//import {arr} from './Variabile1206.js'
//function gasestemin(arr){
//let min=arr[0];
//for(let i=1;i<arr.length;i++){
  //if(arr[i]<min)
    //min=arr[i];
//}
//return min;
//}
//console.log('\u001b[1;32n'+'Exercitiul 1.'+'\u001b[0n')
//console.log('Conditia este:Gasiti cel mai mic numar din array-ul declarat in variabile1206')
//console.log(`Variabila declarata este: ${arr}`)
//console.log('Rezultatul este -'+'\u001b[1;32m'+`'${gasestemin(arr)}'`+'\u001b[0m')

//EX2
//import {str} from './Variabile1206.js'
//function sortalfa(str){
  
    //return str.split('').sort().join('');
//}
//console.log(sortalfa("Something"));
//console.log('\u001b[1;32n'+'Exercitiul 2.'+'\u001b[0n')
//console.log('Conditia este:Sortati stringul declarat in variabile1206')
//console.log(`Stringul declarat este: ${str}`)
//console.log('Rezultatul este -'+'\u001b[1;32m'+`'${sortalfa("Something")}'`+'\u001b[0m')

//EX3
//import {nrdat} from './Variabile1206.js'
//function paritate(nrdat){
  
    //if (nrdat%2 ==0)
  //{
  
  //return "par";
  //}
//else
//{
//return "impar";
//}
//}
//console.log('\u001b[1;32n'+'Exercitiul 3.'+'\u001b[0n')
//console.log ('Conditia este: Verificati daca numarul declarat in fisierul1 este par sau impar')
//console.log(`Numarul declarat este: ${nrdat}`)
//console.log('Rezultatul este : '+'\u001b[1;32m'+`'${paritate(nrdat)}'`+'\u001b[0m')

//EX4
//import {symbol} from './Variabile1206.js'
//import {latura} from './Variabile1206.js'
//function desentri(symbol){

  //for (let i=0;i<=latura;i++){
    
  //console.log(symbol.repeat(i)); 
  //}
//}
//console.log('\u001b[1;32m'+'Exercitiul 4.'+'\u001b[0m')
//console.log('Conditia este:Deseneaza un triunghi in consola')
//console.log(`Variabila declarata este: ${symbol}`)
//console.log('Rezultatul este :'+'\u001b[1;32m'+`'${desentri(symbol)}'`+'\u001b[0m')

//EX5
//import {propozitie} from './Variabile1206.js';
//function countcuv(propozitie){
  //return propozitie.split(' ').length;
//}
//console.log('\u001b[1;32m'+'Exercitiul 5.'+'\u001b[0m')
//console.log('Conditia este:Calculati numarul de cuvinte din propozitia declarata in variabile1206')
//console.log(`Propozitia declarata este:${propozitie}`)
//console.log('Rezultatul este :'+'\u001b[1;32m'+`'${countcuv(propozitie)}'`+'\u001b[0m')

//EX6
import {propozitie} from './Variabile1206.js';
function numarare(propozitie){
  let count =0;
  let propozitieARR=propozitie.split (' ');
for (let i=0;i<propozitieARR.length;i++)
{
  if(i===propozitieARR.lastIndexOf(propozitieARR[i])){
    continue;
  }
  count++;
}
return count;
}
console.log('\u001b[1;32m'+'Exercitiul 6.'+'\u001b[0m')
console.log('Conditia este:De cate ori se repeta acelasi cuvant in propozitia declarata in variabile1206')
console.log(`Propozitia declarata este:${propozitie}`)
console.log('Rezultatul este :'+'\u001b[1;32m'+`'${numarare(propozitie)}'`+'\u001b[0m')