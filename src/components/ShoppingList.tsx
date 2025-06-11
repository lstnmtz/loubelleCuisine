
import useAppStore from '../store/useAppStore';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Download, ShoppingCart } from 'lucide-react';

const ShoppingList = () => {
  const { shoppingList, toggleShoppingItem } = useAppStore();

  const handleExportPDF = () => {
    // Placeholder for PDF export functionality
    console.log('Exporting to PDF...');
    alert('Fonctionnalité d\'export PDF à venir !');
  };

  const checkedItems = shoppingList.filter(item => item.checked).length;
  const totalItems = shoppingList.length;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Liste de Courses</h2>
          <p className="text-muted-foreground">
            {totalItems > 0 
              ? `${checkedItems}/${totalItems} articles cochés`
              : 'Aucun article pour le moment'
            }
          </p>
        </div>
        
        {totalItems > 0 && (
          <Button 
            onClick={handleExportPDF}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Download className="w-4 h-4 mr-2" />
            Exporter en PDF
          </Button>
        )}
      </div>

      {totalItems === 0 ? (
        <div className="text-center py-12">
          <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Liste de courses vide
          </h3>
          <p className="text-muted-foreground mb-4">
            Créez un planning hebdomadaire et générez votre liste de courses automatiquement
          </p>
          <Button 
            variant="outline"
            onClick={() => useAppStore.getState().setActiveTab('planificateur')}
          >
            Aller au planificateur
          </Button>
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Articles à acheter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {shoppingList.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <Checkbox
                    checked={item.checked}
                    onCheckedChange={() => toggleShoppingItem(index)}
                  />
                  <div className={`flex-1 ${item.checked ? 'line-through text-muted-foreground' : ''}`}>
                    <span className="font-medium">{item.nom}</span>
                    <span className="text-muted-foreground ml-2">
                      {item.quantite} {item.unite}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ShoppingList;
