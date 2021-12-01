var monTexte = "Voiçi mon texte";
alert(monTexte);

function fairedestruc() {
  console.log("mon truc");
  console.log("cool");
}
fairedestruc();

//fonction flechee
const faireTache = (tache) => {
  console.log("je fais: " + tache);
};
faireTache(9);

//return
const calc = (x, y) => {
  return x + y;
};
calc(9, 4);
