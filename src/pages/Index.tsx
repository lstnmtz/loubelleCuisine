
import Navigation from '../components/Navigation';
import RecipesList from '../components/RecipesList';
import WeeklyPlanner from '../components/WeeklyPlanner';
import ShoppingList from '../components/ShoppingList';
import useAppStore from '../store/useAppStore';

const Index = () => {
  const { activeTab } = useAppStore();

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'recettes':
        return <RecipesList />;
      case 'planificateur':
        return <WeeklyPlanner />;
      case 'liste-courses':
        return <ShoppingList />;
      default:
        return <RecipesList />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pb-8">
        {renderActiveTab()}
      </main>
    </div>
  );
};

export default Index;
