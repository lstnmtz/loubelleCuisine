
import { useState } from 'react';
import useAppStore from '../store/useAppStore';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Calendar, Plus } from 'lucide-react';

const WeeklyPlanner = () => {
  const { currentPlan, recipes, generateShoppingList } = useAppStore();
  
  const daysOfWeek = [
    'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'
  ];

  const handleGenerateShoppingList = () => {
    generateShoppingList();
    // Optionally switch to shopping list tab
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Planificateur de Repas</h2>
          <p className="text-muted-foreground">Organisez vos repas de la semaine</p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Nouveau planning
          </Button>
          <Button 
            className="bg-green-600 hover:bg-green-700"
            onClick={handleGenerateShoppingList}
            disabled={!currentPlan}
          >
            Générer la liste de courses
          </Button>
        </div>
      </div>

      {!currentPlan ? (
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Aucun planning actif
          </h3>
          <p className="text-muted-foreground mb-4">
            Créez votre premier planning hebdomadaire pour organiser vos repas
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Plus className="w-4 h-4 mr-2" />
            Créer un planning
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {daysOfWeek.map((day) => (
            <Card key={day} className="min-h-[200px]">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-medium text-center">
                  {day}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {currentPlan.jours[day]?.map((recipeId) => {
                  const recipe = recipes.find(r => r.id === recipeId);
                  return recipe ? (
                    <div
                      key={recipeId}
                      className="p-2 bg-orange-50 rounded border text-sm"
                    >
                      {recipe.titre}
                    </div>
                  ) : null;
                }) || (
                  <div className="text-center py-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full h-auto p-4 border-2 border-dashed border-muted-foreground/30 hover:border-orange-500 hover:bg-orange-50"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Ajouter un repas
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeeklyPlanner;
