import { Injectable } from '@angular/core';
import { Collection } from '../model/Collection';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  collections: Collection[] = [
    // Collections pour Leonardo da Vinci
    new Collection(
      "Mona Lisa",
      new Date(1503, 0, 1),
      "Leonardo da Vinci",
      "Portrait de Lisa Gherardini, épouse de Francesco del Giocondo, réalisé par Léonard de Vinci."
    ),
    new Collection(
      "La Cène",
      new Date(1495, 0, 1),
      "Leonardo da Vinci",
      "Peinture murale représentant le dernier repas de Jésus avec ses disciples, réalisée pour le réfectoire du couvent de Santa Maria delle Grazie à Milan."
    ),
    new Collection(
      "La Dame à l'hermine",
      new Date(1489, 0, 1),
      "Leonardo da Vinci",
      "Portrait de Cecilia Gallerani avec une hermine, peint par Léonard de Vinci."
    ),
    new Collection(
      "Autoportrait de Léonard de Vinci",
      new Date(1512, 0, 1),
      "Leonardo da Vinci",
      "Autoportrait réalisé par Léonard de Vinci à la fin de sa carrière."
    ),
  
    // Collections pour Vincent van Gogh
    new Collection(
      "La Nuit étoilée",
      new Date(1889, 0, 1),
      "Vincent van Gogh",
      "Peinture célèbre représentant le ciel nocturne étoilé au-dessus d'un village, par Vincent van Gogh."
    ),
    new Collection(
      "Les Tournesols",
      new Date(1888, 0, 1),
      "Vincent van Gogh",
      "Série de peintures de tournesols réalisées par Vincent van Gogh."
    ),
    new Collection(
      "Champ de blé aux corbeaux",
      new Date(1890, 0, 1),
      "Vincent van Gogh",
      "Tableau représentant un champ de blé avec des corbeaux, réalisé par Vincent van Gogh."
    ),
    new Collection(
      "Autoportrait à l'oreille bandée",
      new Date(1889, 0, 1),
      "Vincent van Gogh",
      "Autoportrait de Vincent van Gogh avec l'oreille bandée, peint après un incident."
    ),
  
    // Collections pour Pablo Picasso
    new Collection(
      "Les Demoiselles d'Avignon",
      new Date(1907, 0, 1),
      "Pablo Picasso",
      "Peinture révolutionnaire marquant le début du cubisme, réalisée par Pablo Picasso."
    ),
    new Collection(
      "Guernica",
      new Date(1937, 0, 1),
      "Pablo Picasso",
      "Œuvre anti-guerre représentant le bombardement de Guernica pendant la guerre civile espagnole, par Pablo Picasso."
    ),
    new Collection(
      "La période bleue",
      new Date(1901, 0, 1),
      "Pablo Picasso",
      "Période artistique de Picasso caractérisée par l'utilisation dominante de tons bleus et verts."
    ),
    new Collection(
      "La période rose",
      new Date(1904, 0, 1),
      "Pablo Picasso",
      "Période artistique de Picasso caractérisée par des tons roses et rouges lumineux."
    ),
  
    // Collections pour Claude Monet
    new Collection(
      "Impression, soleil levant",
      new Date(1872, 0, 1),
      "Claude Monet",
      "Tableau impressionniste représentant un lever de soleil sur le port du Havre, par Claude Monet."
    ),
    new Collection(
      "Les Nymphéas",
      new Date(1914, 0, 1),
      "Claude Monet",
      "Série de peintures de Monet représentant son jardin de nymphéas à Giverny."
    ),
    new Collection(
      "La cathédrale de Rouen",
      new Date(1894, 0, 1),
      "Claude Monet",
      "Série de peintures de la cathédrale de Rouen sous différents éclairages, par Claude Monet."
    ),
    new Collection(
      "Femme à l'ombrelle",
      new Date(1886, 0, 1),
      "Claude Monet",
      "Portrait de Camille Monet avec un parasol, réalisé en extérieur par Claude Monet."
    ),
  
    // Collections pour Georgia O'Keeffe
    new Collection(
      "Jimson Weed/White Flower No. 1",
      new Date(1932, 0, 1),
      "Georgia O'Keeffe",
      "Peinture botanique représentant une grande fleur blanche, par Georgia O'Keeffe."
    ),
    new Collection(
      "Oriental Poppies",
      new Date(1928, 0, 1),
      "Georgia O'Keeffe",
      "Peinture de coquelicots orientaux aux couleurs vives, par Georgia O'Keeffe."
    ),
    new Collection(
      "Black Iris III",
      new Date(1926, 0, 1),
      "Georgia O'Keeffe",
      "Peinture rapprochée d'une fleur iris noire, par Georgia O'Keeffe."
    ),
    new Collection(
      "Red Canna",
      new Date(1924, 0, 1),
      "Georgia O'Keeffe",
      "Peinture de fleurs de canna rouges, avec un fond abstrait, par Georgia O'Keeffe."
    ),
  
    // Collections pour Michel-Ange
    new Collection(
      "David",
      new Date(1504, 0, 1),
      "Michel-Ange",
      "Statue de David, sculpture en marbre représentant le héros biblique, par Michel-Ange."
    ),
    new Collection(
      "La Création d'Adam",
      new Date(1511, 0, 1),
      "Michel-Ange",
      "Fresque représentant la création d'Adam dans la chapelle Sixtine, par Michel-Ange."
    ),
    new Collection(
      "La Pietà",
      new Date(1499, 0, 1),
      "Michel-Ange",
      "Sculpture en marbre représentant la Vierge Marie tenant le corps du Christ mort, par Michel-Ange."
    ),
    new Collection(
      "Le Jugement dernier",
      new Date(1541, 0, 1),
      "Michel-Ange",
      "Fresque monumentale représentant le Jugement dernier, peinte sur le mur de l'autel de la chapelle Sixtine, par Michel-Ange."
    ),
  
    // Collections pour Frida Kahlo
    new Collection(
      "Les Deux Fridas",
      new Date(1939, 0, 1),
      "Frida Kahlo",
      "Double portrait représentant deux Fridas, réalisé par Frida Kahlo."
    ),
    new Collection(
      "Autoportrait dédié à Dr. Eloesser",
      new Date(1940, 0, 1),
      "Frida Kahlo",
      "Autoportrait de Frida Kahlo dédié à son chirurgien, réalisé après une opération."
    ),
    new Collection(
      "Autoportrait aux colliers d'épines et colibri",
      new Date(1940, 0, 1),
      "Frida Kahlo",
      "Autoportrait de Frida Kahlo avec des colliers d'épines et un colibri, symbolisant sa douleur et sa liberté."
    ),
    new Collection(
      "Autoportrait à la robe de velours",
      new Date(1926, 0, 1),
      "Frida Kahlo",
      "Autoportrait de Frida Kahlo portant une robe de velours, exprimant sa féminité et sa force."
    ),
  
    // Collections pour Salvador Dalí
   // Collections pour Salvador Dalí
new Collection(
  "La Persistance de la mémoire",
  new Date(1931, 0, 1),
  "Salvador Dalí",
  "Peinture surréaliste emblématique avec des montres molles, symbolisant la relativité du temps."
),
new Collection(
  "Le Grand Masturbateur",
  new Date(1929, 0, 1),
  "Salvador Dalí",
  "Autoportrait surréaliste avec des éléments oniriques et symboliques caractéristiques de Dalí."
),
new Collection(
  "Rêve causé par le vol d'une abeille",
  new Date(1944, 0, 1),
  "Salvador Dalí",
  "Tableau représentant un rêve influencé par le vol d'une abeille, avec des éléments surréalistes."
),
new Collection(
  "La Tentation de Saint-Antoine",
  new Date(1946, 0, 1),
  "Salvador Dalí",
  "Peinture explorant le thème de la tentation de Saint-Antoine, avec des motifs et des figures fantastiques."
),

// Collections pour Rembrandt
new Collection(
  "La Ronde de nuit",
  new Date(1642, 0, 1),
  "Rembrandt",
  "Portrait de groupe impressionnant des milices civiques d'Amsterdam, peint par Rembrandt."
),
new Collection(
  "Autoportrait à l'âge de 34 ans",
  new Date(1640, 0, 1),
  "Rembrandt",
  "Autoportrait de Rembrandt à l'âge de 34 ans, montrant son habileté à capturer la lumière et l'expression humaine."
),
new Collection(
  "Le Syndic des drapiers",
  new Date(1662, 0, 1),
  "Rembrandt",
  "Portrait officiel des syndics de la guilde des drapiers d'Amsterdam, réalisé par Rembrandt."
),
new Collection(
  "Leçon d'anatomie du Docteur Tulp",
  new Date(1632, 0, 1),
  "Rembrandt",
  "Scène captivante d'une leçon d'anatomie dirigée par le Dr Tulp, avec un éclairage dramatique, par Rembrandt."
),

// Collections pour Andy Warhol
new Collection(
  "Campbell's Soup Cans",
  new Date(1962, 0, 1),
  "Andy Warhol",
  "Série d'œuvres iconiques représentant des boîtes de soupe Campbell, explorant la culture de consommation de masse, par Andy Warhol."
),
new Collection(
  "Marilyn Diptych",
  new Date(1962, 0, 1),
  "Andy Warhol",
  "Diptyque célèbre de Marilyn Monroe, combinant répétition et couleurs vives, par Andy Warhol."
),
new Collection(
  "Triple Elvis",
  new Date(1963, 0, 1),
  "Andy Warhol",
  "Œuvre représentant Elvis Presley en triple exemplaire, superposant plusieurs images pour créer une composition dynamique, par Andy Warhol."
),
new Collection(
  "Liz",
  new Date(1963, 0, 1),
  "Andy Warhol",
  "Portrait de l'actrice Elizabeth Taylor, révélant la fascination de Warhol pour la célébrité et l'icône pop."
)
];
  
  constructor() { }

  // mila apina id
  getCollection(): Observable<Collection[]> {
    return of(this.collections);
  }
  getTopCollection(): Observable<Collection[]> {
    return of(this.collections);
  }
  getCollectionNonPublie(): Observable<Collection[]> {
    return of(this.collections);
  }
  getOneCollection(nom: string): Observable<Collection | undefined> {
    const collection = this.collections.find(col => col.nom === nom);
    return of(collection);
  }
  getArtisteCollection(nomArtiste: string): Observable<Collection[]> {
    const collectionsByArtist = this.collections.filter(col => col.nomArtiste === nomArtiste);
    return of(collectionsByArtist);
  }
}
