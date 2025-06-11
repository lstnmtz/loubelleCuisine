
import useAppStore from '../store/useAppStore';
import RecipeCard from './RecipeCard';
import { Button } from './ui/button';
import { Plus, Search, ChefHat } from 'lucide-react';
import { Input } from './ui/input';
import { useState } from 'react';

const RecipesList = () => {
  const { recipes } = useAppStore();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipes.filter(recipe =>
    recipe.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
    recipe.categorie.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Mes Recettes</h2>
          <p className="text-muted-foreground">{recipes.length} recette{recipes.length > 1 ? 's' : ''} disponible{recipes.length > 1 ? 's' : ''}</p>
        </div>
        
        <Button className="bg-orange-500 hover:bg-orange-600">
          <Plus className="w-4 h-4 mr-2" />
          Ajouter une recette
        </Button>
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
          {!searchTerm && (
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter une recette
            </Button>
          )}
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
