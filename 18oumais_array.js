let idade = ["9", "12", "20", "89", "64"];
let idademaior = [];

for(let i = 0; i < idade.length; i++){
  if (idade[i] >= 18){
    idademaior.push(idade[i]);
  }
}

console.log(idademaior);
