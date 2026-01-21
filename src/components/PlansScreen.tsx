import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface PlansScreenProps {
  onNavigate: (screen: 'home' | 'esim' | 'plans' | 'order' | 'support') => void;
  selectedData: number;
  setSelectedData: (value: number) => void;
  selectedMinutes: number;
  setSelectedMinutes: (value: number) => void;
  dataOptions: number[];
  minutesOptions: number[];
}

export default function PlansScreen({ 
  onNavigate, 
  selectedData, 
  setSelectedData, 
  selectedMinutes, 
  setSelectedMinutes,
  dataOptions,
  minutesOptions
}: PlansScreenProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!phone) {
      toast({
        title: 'Ошибка',
        description: 'Введите номер телефона',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://functions.poehali.dev/d4d2e659-3f2d-4289-a703-5b094c473d9a', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone,
          data_gb: selectedData,
          minutes: selectedMinutes
        })
      });

      if (response.ok) {
        toast({
          title: 'Успешно!',
          description: 'Ваша заявка принята. Мы свяжемся с вами в ближайшее время.'
        });
        setIsDialogOpen(false);
        setPhone('');
      } else {
        throw new Error('Ошибка отправки');
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось отправить заявку. Попробуйте еще раз.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 pb-24">
      <div className="flex items-center justify-between mb-6">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => onNavigate('esim')}
        >
          <Icon name="ArrowLeft" size={24} />
        </Button>
        <h2 className="text-lg font-semibold">Тарифы</h2>
        <div className="w-10"></div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm sm:text-base font-semibold text-secondary">гигабайты и минуты</h3>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
            <span className="hidden sm:inline">входит 40 стран</span>
            <span className="sm:hidden">40 стран</span>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <div className="flex gap-1.5 sm:gap-2 mb-2">
              <Button
                variant="outline"
                className="flex-shrink-0 bg-secondary text-white border-0"
              >
                гб
              </Button>
              {dataOptions.map(gb => (
                <Button
                  key={gb}
                  variant={selectedData === gb ? "default" : "outline"}
                  className={selectedData === gb 
                    ? "flex-1 bg-primary text-secondary border-0 hover:bg-primary/90" 
                    : "flex-1 bg-white border-slate-200 text-slate-600"
                  }
                  onClick={() => setSelectedData(gb)}
                >
                  {gb}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-shrink-0 bg-secondary text-white border-0"
              >
                мин
              </Button>
              {minutesOptions.map(min => (
                <Button
                  key={min}
                  variant={selectedMinutes === min ? "default" : "outline"}
                  className={selectedMinutes === min 
                    ? "flex-1 bg-primary text-secondary border-0 hover:bg-primary/90" 
                    : "flex-1 bg-white border-slate-200 text-slate-600"
                  }
                  onClick={() => setSelectedMinutes(min)}
                >
                  {min}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Card className="p-4 bg-slate-50 border-slate-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-secondary" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-sm mb-1">установка eSIM за 3 минуты</h4>
              <p className="text-xs text-slate-600">без смены SIM и покупки travel-карт</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-secondary">ВКЛЮЧЕНО</h3>
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-4 text-center border-slate-200">
            <Icon name="Wifi" size={32} className="mx-auto mb-2 text-secondary" />
            <p className="text-sm font-medium mb-1">звонки по Wi-Fi</p>
            <p className="text-xs text-slate-600">бесплатно</p>
          </Card>
          <Card className="p-4 text-center border-slate-200">
            <Icon name="Video" size={32} className="mx-auto mb-2 text-secondary" />
            <p className="text-sm font-medium mb-1">без абонплаты</p>
          </Card>
        </div>

        <Card className="p-4 mt-3 border-slate-200">
          <div className="flex items-start gap-3 mb-3">
            <Icon name="Plane" size={24} className="text-secondary flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium mb-1">безлимит на билайн</p>
              <p className="text-xs text-slate-600">и 1 ГБ внутри РФ</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="AlertTriangle" size={20} className="text-red-500" />
              <div className="relative w-16 h-16">
                <Icon name="Shield" size={48} className="text-blue-400" />
              </div>
            </div>
            <Badge variant="destructive" className="text-xs">-30%</Badge>
          </div>
          <p className="text-sm mt-2">Страхование в поездке при оформлении eSIM</p>
        </Card>
      </div>

      <Button 
        className="w-full bg-primary hover:bg-primary/90 text-secondary font-semibold h-14 text-base"
        onClick={() => setIsDialogOpen(true)}
      >
        оставить заявку
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Оставить заявку</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-slate-50 p-3 rounded-lg">
              <p className="text-sm text-slate-600 mb-1">Выбранный тариф:</p>
              <p className="font-semibold text-secondary">{selectedData} ГБ и {selectedMinutes} минут</p>
            </div>
            <div>
              <Input
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-12"
              />
            </div>
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-secondary font-semibold h-12"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Отправка...' : 'Оставить заявку'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}