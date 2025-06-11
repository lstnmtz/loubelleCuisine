import { Recipe } from "../types";

const recipes: Recipe[] = [
  {
    id: '1',
    titre: 'Crêpes Bretonnes',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500',
    personnes: 4,
    ingredients: [
      { nom: 'Farine', quantite: 200, unite: 'g' },
      { nom: 'Lait', quantite: 300, unite: 'ml' },
      { nom: 'Oeufs', quantite: 2, unite: 'pièces' },
      { nom: 'Beurre fondu', quantite: 30, unite: 'g' }
    ],
    instructions: 'Mélanger la farine et les œufs. Ajouter progressivement le lait puis le beurre fondu. Laisser reposer 1h. Cuire dans une poêle chaude.',
    categorie: 'Petit-déjeuner',
    tags: ['rapide', 'traditionnel'],
    tempsPreparation: 15,
    tempsCuisson: 20,
    caloriesParPersonne: 220,
    macrosParPersonne: { proteines: 7, glucides: 28, lipides: 9 }
  },
  {
    id: '2',
    titre: 'Salade de Quinoa',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
    personnes: 2,
    ingredients: [
      { nom: 'Quinoa', quantite: 150, unite: 'g' },
      { nom: 'Concombre', quantite: 1, unite: 'pièce' },
      { nom: 'Tomates cerises', quantite: 200, unite: 'g' },
      { nom: 'Avocat', quantite: 1, unite: 'pièce' }
    ],
    instructions: 'Cuire le quinoa selon les instructions. Couper les légumes en dés. Mélanger le tout avec une vinaigrette à l\'huile d\'olive.',
    categorie: 'Déjeuner',
    tags: ['végétarien', 'healthy'],
    tempsPreparation: 15,
    tempsCuisson: 15,
    caloriesParPersonne: 340,
    macrosParPersonne: { proteines: 9, glucides: 38, lipides: 15 }
  },
  {
    id: '3',
    titre: 'Poulet au Curry',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500',
    personnes: 4,
    ingredients: [
      { nom: 'Blancs de poulet', quantite: 500, unite: 'g' },
      { nom: 'Lait de coco', quantite: 400, unite: 'ml' },
      { nom: 'Curry en poudre', quantite: 2, unite: 'c. à soupe' },
      { nom: 'Oignon', quantite: 1, unite: 'pièce' }
    ],
    instructions: 'Faire revenir l\'oignon émincé, ajouter le poulet en morceaux, puis le curry. Verser le lait de coco et laisser mijoter 20 min.',
    categorie: 'Plat',
    tags: ['exotique', 'rapide'],
    tempsPreparation: 10,
    tempsCuisson: 25,
    caloriesParPersonne: 410,
    macrosParPersonne: { proteines: 32, glucides: 7, lipides: 28 }
  },
  {
    id: '4',
    titre: 'Tarte aux Pommes',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=500',
    personnes: 6,
    ingredients: [
      { nom: 'Pâte brisée', quantite: 1, unite: 'pièce' },
      { nom: 'Pommes', quantite: 4, unite: 'pièces' },
      { nom: 'Sucre', quantite: 50, unite: 'g' },
      { nom: 'Beurre', quantite: 30, unite: 'g' }
    ],
    instructions: 'Étaler la pâte, disposer les pommes tranchées, saupoudrer de sucre et parsemer de beurre. Cuire 35 min à 180°C.',
    categorie: 'Dessert',
    tags: ['classique', 'fruité'],
    tempsPreparation: 15,
    tempsCuisson: 35,
    caloriesParPersonne: 290,
    macrosParPersonne: { proteines: 3, glucides: 41, lipides: 12 }
  },
  {
    id: '5',
    titre: 'Soupe de Légumes',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=500',
    personnes: 4,
    ingredients: [
      { nom: 'Carottes', quantite: 3, unite: 'pièces' },
      { nom: 'Pommes de terre', quantite: 2, unite: 'pièces' },
      { nom: 'Poireau', quantite: 1, unite: 'pièce' },
      { nom: 'Bouillon de légumes', quantite: 1, unite: 'l' }
    ],
    instructions: 'Éplucher et couper les légumes. Les cuire dans le bouillon 30 min puis mixer.',
    categorie: 'Entrée',
    tags: ['léger', 'végétarien'],
    tempsPreparation: 15,
    tempsCuisson: 30,
    caloriesParPersonne: 80,
    macrosParPersonne: { proteines: 2, glucides: 16, lipides: 0 }
  },
  {
    id: '6',
    titre: 'Pâtes Carbonara',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0723c6e?w=500',
    personnes: 2,
    ingredients: [
      { nom: 'Spaghetti', quantite: 200, unite: 'g' },
      { nom: 'Lardons', quantite: 100, unite: 'g' },
      { nom: 'Crème fraîche', quantite: 100, unite: 'ml' },
      { nom: 'Parmesan', quantite: 30, unite: 'g' }
    ],
    instructions: 'Cuire les pâtes. Faire revenir les lardons, ajouter la crème. Mélanger avec les pâtes et le parmesan.',
    categorie: 'Plat',
    tags: ['italien', 'rapide'],
    tempsPreparation: 10,
    tempsCuisson: 15,
    caloriesParPersonne: 540,
    macrosParPersonne: { proteines: 20, glucides: 60, lipides: 23 }
  },
  {
    id: '7',
    titre: 'Brownie au Chocolat',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=500',
    personnes: 8,
    ingredients: [
      { nom: 'Chocolat noir', quantite: 200, unite: 'g' },
      { nom: 'Beurre', quantite: 150, unite: 'g' },
      { nom: 'Sucre', quantite: 150, unite: 'g' },
      { nom: 'Oeufs', quantite: 3, unite: 'pièces' },
      { nom: 'Farine', quantite: 80, unite: 'g' }
    ],
    instructions: 'Faire fondre le chocolat et le beurre. Ajouter le sucre, les œufs puis la farine. Cuire 20 min à 180°C.',
    categorie: 'Dessert',
    tags: ['gourmand', 'chocolat'],
    tempsPreparation: 15,
    tempsCuisson: 20,
    caloriesParPersonne: 370,
    macrosParPersonne: { proteines: 5, glucides: 38, lipides: 21 }
  },
  {
    id: '8',
    titre: 'Pâtes à la Carbonara (avec crème)',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500',
    personnes: 4,
    ingredients: [
      { nom: 'Pâtes', quantite: 400, unite: 'g' },
      { nom: 'Lardons fumés', quantite: 200, unite: 'g' },
      { nom: 'Jaunes d\'œufs', quantite: 3, unite: 'pièces' },
      { nom: 'Crème fraîche épaisse entière', quantite: 200, unite: 'ml' },
      { nom: 'Parmesan râpé', quantite: 50, unite: 'g' },
      { nom: 'Gousse d’ail', quantite: 1, unite: 'pièce' },
      { nom: 'Poivre noir moulu', quantite: 1, unite: 'c. à café' },
      { nom: 'Sel', quantite: 1, unite: 'c. à soupe' },
      { nom: 'Huile d’olive', quantite: 1, unite: 'c. à soupe' }
    ],
    instructions: `1. Préparer les ingrédients : Séparez les jaunes d’œufs dans un bol. Râpez le parmesan. Mélangez les jaunes, la crème et le parmesan dans un bol. Poivrez généreusement.
2. Cuire les pâtes : Faites bouillir une grande casserole d’eau salée. Ajoutez les pâtes et faites-les cuire al dente. Gardez une louche d’eau de cuisson avant d’égoutter.
3. Cuire les lardons : Dans une poêle, faites chauffer un filet d’huile d’olive. Faites revenir les lardons à feu moyen jusqu’à ce qu’ils soient dorés. (Optionnel : ajoutez une gousse d’ail écrasée pour parfumer, puis retirez-la.)
4. Assembler la sauce : Égouttez les pâtes, remettez-les dans la casserole hors du feu. Ajoutez les lardons et mélangez. Versez le mélange œufs-crème-parmesan sur les pâtes chaudes. Remuez rapidement pour que la sauce nappe les pâtes sans que les œufs ne coagulent. Ajoutez un peu d’eau de cuisson si la sauce semble trop épaisse.`,
    categorie: 'Plat',
    tags: ['italien', 'crémeux', 'familial'],
    tempsPreparation: 10,
    tempsCuisson: 15,
    caloriesParPersonne: 650,
    macrosParPersonne: { proteines: 23, glucides: 65, lipides: 32 }
  }
];

export default recipes;