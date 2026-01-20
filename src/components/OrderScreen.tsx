import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface OrderScreenProps {
  onNavigate: (screen: 'home' | 'esim' | 'plans' | 'order' | 'support') => void;
  selectedData: number;
  selectedMinutes: number;
}

export default function OrderScreen({ onNavigate, selectedData, selectedMinutes }: OrderScreenProps) {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="flex items-center justify-between mb-6">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => onNavigate('plans')}
        >
          <Icon name="ArrowLeft" size={24} />
        </Button>
        <h2 className="text-lg font-semibold">Оформление</h2>
        <div className="w-10"></div>
      </div>

      <Card className="p-4 mb-6 bg-slate-50 border-slate-200">
        <h3 className="font-semibold mb-3">Ваш тариф</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-600">Интернет</span>
            <span className="font-semibold">{selectedData} ГБ</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Минуты</span>
            <span className="font-semibold">{selectedMinutes} мин</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Срок действия</span>
            <span className="font-semibold">30 дней</span>
          </div>
          <div className="border-t border-slate-300 pt-2 mt-3 flex justify-between text-base">
            <span className="font-semibold">Итого</span>
            <span className="font-bold text-lg">1 100 ₽</span>
          </div>
        </div>
      </Card>

      <div className="space-y-4 mb-6">
        <div>
          <Label htmlFor="name" className="text-sm font-semibold text-secondary">Имя</Label>
          <Input id="name" placeholder="Иван" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="email" className="text-sm font-semibold text-secondary">Email</Label>
          <Input id="email" type="email" placeholder="ivan@example.com" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="phone" className="text-sm font-semibold text-secondary">Телефон</Label>
          <Input id="phone" type="tel" placeholder="+7 (900) 123-45-67" className="mt-1" />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-secondary">Способ оплаты</h3>
        <Tabs defaultValue="card" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="card">Карта</TabsTrigger>
            <TabsTrigger value="sbp">СБП</TabsTrigger>
          </TabsList>
          <TabsContent value="card" className="space-y-3 mt-4">
            <Input placeholder="Номер карты" />
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="ММ/ГГ" />
              <Input placeholder="CVV" />
            </div>
          </TabsContent>
          <TabsContent value="sbp" className="mt-4">
            <p className="text-sm text-slate-600 text-center py-8">
              После нажатия кнопки откроется окно оплаты через СБП
            </p>
          </TabsContent>
        </Tabs>
      </div>

      <Button 
        className="w-full bg-primary hover:bg-primary/90 text-secondary font-semibold h-14 text-base"
        onClick={() => {
          alert('Спасибо за заказ! eSIM будет отправлена на указанный email');
          onNavigate('home');
        }}
      >
        Оплатить 1 100 ₽
      </Button>
    </div>
  );
}
