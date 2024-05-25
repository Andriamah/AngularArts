export class Artiste {
  nom!: string;
  nomDeScene?: string;
  dateNaissance?: Date;
  dateMort?: Date;
  nationalite?: string;
  biographie?: string;
  nbOeuvres?: number;

  constructor(nom: string, nomDeScene?: string, dateNaissance?: Date, dateMort?: Date, nationalite?: string, biographie?: string, nbOeuvres?: number) {
    this.nom = nom;
    this.nomDeScene = nomDeScene;
    this.dateNaissance = dateNaissance;
    this.dateMort = dateMort;
    this.nationalite = nationalite;
    this.biographie = biographie;
    this.nbOeuvres = nbOeuvres;
  }
}

