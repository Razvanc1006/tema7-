const tipVehicul = prompt("Introduceti tipul vehiculului: ")
const capacitateCilindrica = prompt("Introduceti capacitatea cilindrica :");
let impozit= 0;

if(tipVehicul.toLowerCase() == "motocicleta") {
    if(capacitateCilindrica < 1600) {
        impozit = (capacitateCilindrica/200) * 8;
    }
    else {
        impozit = (capacitateCilindrica/200) * 9;
    }
}
else if (tipVehicul.toLowerCase() == "autoturism") {
    if(capacitateCilindrica >= 1601 && capacitateCilindrica <= 2000) {
        impozit = (capacitateCilindrica/200) * 20;
    }
    else if (capacitateCilindrica >= 2001 && capacitateCilindrica <= 2600)
    {
        impozit = (capacitateCilindrica/200) * 79;
    }
    else if (capacitateCilindrica >= 2601 && capacitateCilindrica <=3000)
    {
        impozit = (capacitateCilindrica/200) * 159;
    }
    else if (capacitateCilindrica>=3001) 
    {
        impozit = (capacitateCilindrica/200) * 320;
    }

}
else if (tipVehicul.toLowerCase == "autobuz") {
    impozit = (capacitateCilindrica/200) * 26;
}

console.log("Impozitul este: " + impozit + " lei");


const aflaMinim = [27,20,180,450,32,45,18];
let minim= aflaMinim[0];

for(let i=1;i<aflaMinim.length;i++){
    if(aflaMinim[i]<minim)
        minim=aflaMinim[i];
}

console.log("Minimul sirului este " + minim );

const media = [12,355,241,11,2,4];
let suma = 0;
let mediaAritmetica = 0;

for(let i=0;i<media.length;i++)
{
    suma = suma + media[i];
}

mediaAritmetica = suma / media.length;
console.log ("Media aritmetica a sirului este " + mediaAritmetica);


const tipuriDiferite = [45,67,"albastru","rosu",true,false,459,343,person = {
    name: "Andrei",
    age: 20,
    location: "Iasi",
    isMarried: true
  }
]

let sumaNumere = 0;
for (let i=0;i<tipuriDiferite.length;i++)
{
    if(typeof tipuriDiferite[i] === "number")
     {
         sumaNumere = sumaNumere + tipuriDiferite[i];
     }
}

console.log("Suma datelor de tip number din sir este " + sumaNumere);

let fibonacci = [];
fibonacci[0]= 0;
fibonacci[1]= 1;
let i=2;
while(i<20){
    fibonacci[i]=fibonacci[i-1] + fibonacci[i-2];
    i++;

}
console.log("Primele 20 de numere din sirul lui Fibonacci sunt :")
for(let j=0;j<fibonacci.length;j++)
{
    console.log(fibonacci[j]);
}



const books = [
    {author:"J.R.R Tolkien",title:"The Hobbit",citita: true},
    {author:"Warwick Deeping",title:"Sorrell si fiul",citita: false},
    {author:"Voltaire",title:"Candid sau optimismul",citita: false},
    {author:"Martha Hall Kelly",title:"Trandafirii pierduti",citita: true},
    {author:"Hector Malot",title:"Singur pe lume",citita: true},
    {author:"Nicoara Potcoava",title:"Mihail Sadoveanu",citita: false}


];

for (let j=0;j<books.length;j++)
{
    if (books[j].citita == true) {
        console.log(books[j].title + " by " + books[j].author + " citita");
    }
    else console.log(books[j].title + " by " + books[j].author + " necitita");
}