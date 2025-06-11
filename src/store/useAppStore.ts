import { create } from 'zustand';
import { Recipe, WeeklyPlan, ShoppingListItem, NavigationTab } from '../types';
import recipesData from '../data/recipes'; // <-- Import des recettes

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
  recipes: recipesData, // <-- Utilisation du fichier externe
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
