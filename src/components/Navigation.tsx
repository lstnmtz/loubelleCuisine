
import { NavigationTab } from '../types';
import useAppStore from '../store/useAppStore';
import { cn } from '../lib/utils';
import { ChefHat, Calendar, ShoppingCart } from 'lucide-react';

const Navigation = () => {
  const { activeTab, setActiveTab } = useAppStore();

  const tabs: { id: NavigationTab; label: string; icon: React.ComponentType<any> }[] = [
    { id: 'recettes', label: 'Recettes', icon: ChefHat },
    { id: 'planificateur', label: 'Planning', icon: Calendar },
    { id: 'liste-courses', label: 'Courses', icon: ShoppingCart },
  ];

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <ChefHat className="w-8 h-8 text-orange-500" />
            <h1 className="text-xl font-bold text-foreground">LouBelle Cuisine</h1>
          </div>
          
          <div className="flex space-x-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200",
                    activeTab === tab.id
                      ? "bg-orange-500 text-white shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
