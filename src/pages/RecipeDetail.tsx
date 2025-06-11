import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { Clock, Users } from "lucide-react";
import useAppStore from "../store/useAppStore";

const RecipeDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const recipes = useAppStore((state) => state.recipes);

  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="p-8 text-center">
        <p>Recette introuvable.</p>
        <button className="mt-4 btn" onClick={() => navigate(-1)}>
          Retour
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="mb-6">
        <div className="aspect-video relative overflow-hidden rounded-t-lg">
          <img
            src={recipe.image}
            alt={recipe.titre}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-white/90 text-black dark:bg-background dark:text-foreground">
              {recipe.categorie}
            </Badge>
          </div>
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">{recipe.titre}</h1>
          <div className="flex items-center gap-4 text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{recipe.personnes} pers.</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>
                {recipe.tempsPreparation + recipe.tempsCuisson} min
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {recipe.tags && recipe.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Ajout des infos nutritionnelles */}
          <div className="mb-4 text-sm text-muted-foreground">
            <span className="font-semibold">Calories&nbsp;:</span> {recipe.caloriesParPersonne} kcal / pers.<br />
            <span className="font-semibold">Protéines&nbsp;:</span> {recipe.macrosParPersonne.proteines} g&nbsp;&nbsp;
            <span className="font-semibold">Glucides&nbsp;:</span> {recipe.macrosParPersonne.glucides} g&nbsp;&nbsp;
            <span className="font-semibold">Lipides&nbsp;:</span> {recipe.macrosParPersonne.lipides} g
          </div>
          
          <h2 className="font-semibold mt-6 mb-2">Ingrédients</h2>
          <ul className="list-disc list-inside mb-4">
            {recipe.ingredients.map((ing) => (
              <li key={ing.nom}>
                {ing.nom} : {ing.quantite} {ing.unite}
              </li>
            ))}
          </ul>
          <h2 className="font-semibold mt-6 mb-2">Préparation</h2>
          <p className="whitespace-pre-line">{recipe.instructions}</p>
        </div>
      </Card>
      <button className="btn" onClick={() => navigate(-1)}>
        Retour
      </button>
    </div>
  );
};

export default RecipeDetail;