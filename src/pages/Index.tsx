import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function Index() {
  const [selectedData, setSelectedData] = useState(5);
  const [selectedMinutes, setSelectedMinutes] = useState(30);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const dataOptions = [5, 15, 30, 50];
  const minutesOptions = [30, 50, 100, 150];

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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="w-full md:max-w-md mx-auto bg-white min-h-screen md:shadow-2xl">
        
        {/* Hero Section */}
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

          <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
            <h3 className="sm:text-lg font-semibold text-secondary text-lg">Travel eSIM от билайн — один номер для всех путешествий</h3>
            <p className="text-sm text-slate-600">
              без визитов в салон и сюрпризов в счёте
            </p>
          </div>
        </div>

        {/* eSIM Info Section */}
        <div className="bg-slate-100 p-4 sm:p-6">
          <div className="flex justify-center mb-6">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56">
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
          <p className="text-center text-slate-600 mb-8 text-sm">
            дешевле, быстрее, безопаснее<br />и всё в одном месте
          </p>

          <div className="space-y-3 mb-8">
            {[
              {
                icon: 'Cpu',
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
              <div key={i} className="flex gap-3 items-start bg-white rounded-2xl p-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={20} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Plans Section */}
        <div className="bg-white p-4 sm:p-6">
          <h2 className="text-xl font-bold mb-6 text-center text-secondary">Тарифы</h2>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm sm:text-base font-semibold text-secondary">гигабайты и минуты</h3>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                <span>40 самых популярных стран</span>
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


          </div>

          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-secondary font-semibold h-14 text-base mb-8"
            onClick={() => setIsDialogOpen(true)}
          >
            оставить заявку
          </Button>
        </div>

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
    </div>
  );
}