
export interface Ingredient {
  nom: string;
  quantite: number;
  unite: string;
}

export interface Recipe {
  id?: string;
  titre: string;
  image: string;
  personnes: number;
  ingredients: Ingredient[];
  instructions: string;
  categorie: string;
  tags: string[];
  tempsPreparation: number;
  tempsCuisson: number;
  createdAt?: Date;
}

export interface PlanningDay {
  [key: string]: string[]; // recipeIds
}

export interface WeeklyPlan {
  id?: string;
  nom: string;
  jours: PlanningDay;
  createdAt?: Date;
}

export interface ShoppingListItem {
  nom: string;
  quantite: number;
  unite: string;
  checked?: boolean;
}

export type NavigationTab = 'recettes' | 'planificateur' | 'liste-courses';
