export class Collection {
  nom: string;
  date_de_creation: Date;
  nomArtiste: string;
  description : string

  constructor(nom: string, date_de_creation: Date, nomArtiste: string, description : string) {
    this.nom = nom;
    this.date_de_creation = date_de_creation;
    this.nomArtiste = nomArtiste;
    this.description = description;
  }
}
