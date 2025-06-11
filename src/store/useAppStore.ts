
import { create } from 'zustand';
import { Recipe, WeeklyPlan, ShoppingListItem, NavigationTab } from '../types';

interface AppState {
  // Navigation
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  
  // Recettes
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  updateRecipe: (id: string, recipe: Partial<Recipe>) => void;
  deleteRecipe: (id: string) => void;
  
  // Planning
  currentPlan: WeeklyPlan | null;
  setCurrentPlan: (plan: WeeklyPlan) => void;
  
  // Liste de courses
  shoppingList: ShoppingListItem[];
  generateShoppingList: () => void;
  toggleShoppingItem: (index: number) => void;
}

const useAppStore = create<AppState>((set, get) => ({
  // Navigation
  activeTab: 'recettes',
  setActiveTab: (tab) => set({ activeTab: tab }),
  
  // Recettes
  recipes: [
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
      tempsCuisson: 20
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
      tempsCuisson: 15
    }
  ],
  
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, { ...recipe, id: Date.now().toString() }]
  })),
  
  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),
  
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  
  // Planning
  currentPlan: null,
  setCurrentPlan: (plan) => set({ currentPlan: plan }),
  
  // Liste de courses
  shoppingList: [],
  
  generateShoppingList: () => {
    const { currentPlan, recipes } = get();
    if (!currentPlan) return;
    
    const ingredientsMap = new Map<string, ShoppingListItem>();
    
    Object.values(currentPlan.jours).forEach(recipeIds => {
      recipeIds.forEach(recipeId => {
        const recipe = recipes.find(r => r.id === recipeId);
        if (recipe) {
          recipe.ingredients.forEach(ingredient => {
            const key = `${ingredient.nom}-${ingredient.unite}`;
            const existing = ingredientsMap.get(key);
            
            if (existing) {
              existing.quantite += ingredient.quantite;
            } else {
              ingredientsMap.set(key, {
                nom: ingredient.nom,
                quantite: ingredient.quantite,
                unite: ingredient.unite,
                checked: false
              });
            }
          });
        }
      });
    });
    
    set({ shoppingList: Array.from(ingredientsMap.values()) });
  },
  
  toggleShoppingItem: (index) => set((state) => ({
    shoppingList: state.shoppingList.map((item, i) => 
      i === index ? { ...item, checked: !item.checked } : item
    )
  }))
}));

export default useAppStore;
