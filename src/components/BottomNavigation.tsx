import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface BottomNavigationProps {
  selectedScreen: 'home' | 'esim' | 'plans' | 'order' | 'support';
  onNavigate: (screen: 'home' | 'esim' | 'plans' | 'order' | 'support') => void;
}

export default function BottomNavigation({ selectedScreen, onNavigate }: BottomNavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 safe-area-inset-bottom z-50">
      <div className="w-full md:max-w-md mx-auto flex justify-around items-center py-2">
        <Button
          variant="ghost"
          className={`flex-col h-auto py-2 ${selectedScreen === 'home' ? 'text-primary' : 'text-slate-600'}`}
          onClick={() => onNavigate('home')}
        >
          <Icon name="Home" className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-[10px] sm:text-xs mt-0.5 sm:mt-1">Главная</span>
        </Button>
        <Button
          variant="ghost"
          className={`flex-col h-auto py-2 ${selectedScreen === 'esim' ? 'text-primary' : 'text-slate-600'}`}
          onClick={() => onNavigate('esim')}
        >
          <Icon name="Smartphone" className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-[10px] sm:text-xs mt-0.5 sm:mt-1">eSIM</span>
        </Button>
        <Button
          variant="ghost"
          className={`flex-col h-auto py-2 ${selectedScreen === 'plans' ? 'text-primary' : 'text-slate-600'}`}
          onClick={() => onNavigate('plans')}
        >
          <Icon name="Package" className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-[10px] sm:text-xs mt-0.5 sm:mt-1">Тарифы</span>
        </Button>
        <Button
          variant="ghost"
          className={`flex-col h-auto py-2 ${selectedScreen === 'order' ? 'text-primary' : 'text-slate-600'}`}
          onClick={() => onNavigate('order')}
        >
          <Icon name="ShoppingCart" className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-[10px] sm:text-xs mt-0.5 sm:mt-1">Оформить</span>
        </Button>
        <Button
          variant="ghost"
          className={`flex-col h-auto py-2 ${selectedScreen === 'support' ? 'text-primary' : 'text-slate-600'}`}
          onClick={() => onNavigate('support')}
        >
          <Icon name="HelpCircle" className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-[10px] sm:text-xs mt-0.5 sm:mt-1">Помощь</span>
        </Button>
      </div>
    </div>
  );
}