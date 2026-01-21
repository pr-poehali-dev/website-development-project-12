import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface EsimInfoScreenProps {
  onNavigate: (screen: 'home' | 'esim' | 'plans' | 'order' | 'support') => void;
}

export default function EsimInfoScreen({ onNavigate }: EsimInfoScreenProps) {
  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 relative pb-24">
      <div className="flex items-center justify-between mb-6">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => onNavigate('home')}
        >
          <Icon name="ArrowLeft" size={24} />
        </Button>
        <h2 className="text-lg font-semibold">Информация</h2>
        <Button variant="ghost" size="icon" onClick={() => onNavigate('home')}>
          <Icon name="X" size={24} />
        </Button>
      </div>

      <div className="flex justify-center mb-6">
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 bg-white rounded-2xl">
          <img 
            src="https://cdn.poehali.dev/projects/5508466f-22e3-4b46-bcaf-19c52098afd0/bucket/4933b267-f912-442c-9746-7bbc39b2527b.png" 
            alt="eSIM illustration" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-center mb-2 text-secondary">
        eSIM Travel от билайн
      </h2>
      <p className="text-center text-slate-600 mb-8">
        дешевле, быстрее, безопаснее<br />и всё в одном месте
      </p>

      <div className="space-y-4 mb-8">
        {[
          {
            icon: 'Zap',
            title: 'Будь на связи',
            desc: 'оформи eSIM заранее — интернет включится сразу по прилёту'
          },
          {
            icon: 'Database',
            title: 'дешевле роуминга на 50%',
            desc: 'интернет и звонки по фиксированной цене, без скрытых списаний'
          },
          {
            icon: 'CreditCard',
            title: 'просто и безопасно',
            desc: 'оплата картой РФ или СБП'
          },
          {
            icon: 'Smartphone',
            title: 'все в одном месте',
            desc: 'минуты и ГБ можно докупить по выгодной цене в приложении'
          }
        ].map((item, i) => (
          <div key={i} className="flex gap-3 sm:gap-4 items-start">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-slate-100 flex items-center justify-center flex-shrink-0">
              <Icon name={item.icon} size={24} className="text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold text-secondary mb-1">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Button 
        className="w-full bg-primary hover:bg-primary/90 text-secondary font-semibold h-12"
        onClick={() => onNavigate('plans')}
      >
        Выбрать тариф
      </Button>
    </div>
  );
}