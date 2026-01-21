import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HomeScreenProps {
  onNavigate: (screen: 'home' | 'esim' | 'plans' | 'order' | 'support') => void;
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="relative h-screen flex flex-col">
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <img 
            src="https://cdn.poehali.dev/projects/5508466f-22e3-4b46-bcaf-19c52098afd0/bucket/4052e0ae-fc19-4113-98f3-d09dc5b762e6.jpg"
            alt="Beeline logo"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl object-cover"
          />
          <div>
            <h1 className="text-base sm:text-xl font-bold text-secondary">всегда на связи</h1>
            <p className="text-xs text-slate-600">от посадки до вылета</p>
          </div>
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden">
        <img 
          src="https://cdn.poehali.dev/projects/5508466f-22e3-4b46-bcaf-19c52098afd0/files/075216ee-0ac4-4ba8-ae23-48f8baad986e.jpg" 
          alt="Happy travelers" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6 pb-6 sm:pb-8">
          <Badge className="bg-primary text-secondary mb-4 text-sm px-3 py-1">
            дешевле роуминга на 50%
          </Badge>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">1100 ₽ за 5 гб и 30 минут</h2>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 pb-24">
        <h3 className="sm:text-lg font-semibold text-secondary text-lg">Travel eSIM от билайн — один номер для всех путешествий</h3>
        <p className="text-sm text-slate-600">
          без визитов в салон и сюрпризов в счёте
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            className="flex-1 bg-primary hover:bg-primary/90 text-secondary font-semibold h-12"
            onClick={() => onNavigate('esim')}
          >
            Узнать больше
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 border-2 border-secondary text-secondary font-semibold h-12"
            onClick={() => onNavigate('plans')}
          >
            Тарифы
          </Button>
        </div>
      </div>
    </div>
  );
}