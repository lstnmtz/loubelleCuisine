import useAppStore from '../store/useAppStore';
import RecipeCard from './RecipeCard';
import { Button } from './ui/button';
import { Plus, Search, ChefHat, Shuffle } from 'lucide-react';
import { Input } from './ui/input';
import { useState } from 'react';

const RecipesList = () => {
  const { recipes } = useAppStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [randomRecipe, setRandomRecipe] = useState(null);

  // Liste unique des catégories
  const categories = Array.from(new Set(recipes.map(r => r.categorie)));

  const filteredRecipes = recipes.filter(recipe =>
    recipe.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
    recipe.categorie.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fonction pour trouver une recette aléatoire selon la catégorie
  const handleRandomRecipe = () => {
    const pool = selectedCategory
      ? recipes.filter(r => r.categorie === selectedCategory)
      : recipes;
    if (pool.length === 0) return setRandomRecipe(null);
    const random = pool[Math.floor(Math.random() * pool.length)];
    setRandomRecipe(random);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Mes Recettes</h2>
          <p className="text-muted-foreground">{recipes.length} recette{recipes.length > 1 ? 's' : ''} disponible{recipes.length > 1 ? 's' : ''}</p>
        </div>
        <div className="flex gap-2 items-center">
          <select
            className="border rounded px-2 py-1 text-sm bg-background text-foreground border-border dark:bg-[#18181b] dark:text-[#fafafa] dark:border-border"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            <option value="">Toutes catégories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <Button
            className="bg-orange-500 hover:bg-orange-600"
            onClick={handleRandomRecipe}
          >
            <Shuffle className="w-4 h-4 mr-2" />
            Recette aléatoire
          </Button>
        </div>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Rechercher une recette, un tag, une catégorie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {randomRecipe && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Recette aléatoire :</h3>
          <RecipeCard recipe={randomRecipe} />
        </div>
      )}

      {filteredRecipes.length === 0 ? (
        <div className="text-center py-12">
          <ChefHat className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {searchTerm ? 'Aucune recette trouvée' : 'Aucune recette pour le moment'}
          </h3>
          <p className="text-muted-foreground mb-4">
            {searchTerm 
              ? 'Essayez de modifier votre recherche'
              : 'Commencez par ajouter votre première recette'
            }
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipesList;
