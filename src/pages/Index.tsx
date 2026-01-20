import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

export default function Index() {
  const [selectedScreen, setSelectedScreen] = useState<'home' | 'esim' | 'plans' | 'order' | 'support'>('home');
  const [selectedData, setSelectedData] = useState(5);
  const [selectedMinutes, setSelectedMinutes] = useState(30);

  const dataOptions = [5, 15, 30, 50];
  const minutesOptions = [30, 50, 100, 150];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative">
        {selectedScreen === 'home' && (
          <div className="relative h-screen flex flex-col">
            <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-secondary rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-sm"></div>
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-secondary">всегда на связи</h1>
                  <p className="text-xs text-slate-600">от посадки до вылета</p>
                </div>
              </div>
            </div>

            <div className="flex-1 relative overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/5508466f-22e3-4b46-bcaf-19c52098afd0/files/2bdba5df-bbb3-4a1c-9e92-f701a4c185be.jpg" 
                alt="Happy travelers" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 pb-8">
                <Badge className="bg-primary text-secondary mb-4 text-sm px-3 py-1">
                  дешевле роуминга на 50%
                </Badge>
                <h2 className="text-white text-3xl font-bold mb-2">1100 ₽ за 5 гб и 30 минут</h2>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-secondary">
                eSIM Travel от билайн — один номер для всех путешествий
              </h3>
              <p className="text-sm text-slate-600">
                без визитов в салон и сюрпризов в счёте
              </p>
              <div className="flex gap-3">
                <Button 
                  className="flex-1 bg-primary hover:bg-primary/90 text-secondary font-semibold h-12"
                  onClick={() => setSelectedScreen('esim')}
                >
                  Узнать больше
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-2 border-secondary text-secondary font-semibold h-12"
                  onClick={() => setSelectedScreen('plans')}
                >
                  Тарифы
                </Button>
              </div>
            </div>
          </div>
        )}

        {selectedScreen === 'esim' && (
          <div className="min-h-screen bg-white p-6 relative">
            <div className="flex items-center justify-between mb-6">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setSelectedScreen('home')}
              >
                <Icon name="ArrowLeft" size={24} />
              </Button>
              <h2 className="text-lg font-semibold">Информация</h2>
              <Button variant="ghost" size="icon" onClick={() => setSelectedScreen('home')}>
                <Icon name="X" size={24} />
              </Button>
            </div>

            <div className="flex justify-center mb-6">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-500 rounded-full blur-2xl opacity-40"></div>
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80" 
                  alt="eSIM illustration" 
                  className="relative w-full h-full object-contain"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center mb-2 text-secondary">
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
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center flex-shrink-0">
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
              onClick={() => setSelectedScreen('plans')}
            >
              Выбрать тариф
            </Button>
          </div>
        )}

        {selectedScreen === 'plans' && (
          <div className="min-h-screen bg-white p-6">
            <div className="flex items-center justify-between mb-6">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setSelectedScreen('esim')}
              >
                <Icon name="ArrowLeft" size={24} />
              </Button>
              <h2 className="text-lg font-semibold">Тарифы</h2>
              <div className="w-10"></div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-secondary">гигабайты и минуты</h3>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <span>входит 40 стран</span>
                  <Icon name="ChevronRight" size={16} />
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex gap-2 mb-2">
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
              onClick={() => setSelectedScreen('order')}
            >
              купить за 1 100 ₽/мес
            </Button>
          </div>
        )}

        {selectedScreen === 'order' && (
          <div className="min-h-screen bg-white p-6">
            <div className="flex items-center justify-between mb-6">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setSelectedScreen('plans')}
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
                setSelectedScreen('home');
              }}
            >
              Оплатить 1 100 ₽
            </Button>
          </div>
        )}

        {selectedScreen === 'support' && (
          <div className="min-h-screen bg-white p-6">
            <div className="flex items-center justify-between mb-6">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setSelectedScreen('home')}
              >
                <Icon name="ArrowLeft" size={24} />
              </Button>
              <h2 className="text-lg font-semibold">Поддержка</h2>
              <div className="w-10"></div>
            </div>

            <Tabs defaultValue="faq" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="faq">FAQ</TabsTrigger>
                <TabsTrigger value="chat">Чат</TabsTrigger>
              </TabsList>
              
              <TabsContent value="faq">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Что такое eSIM?</AccordionTrigger>
                    <AccordionContent>
                      eSIM — это встроенная SIM-карта в вашем телефоне. Не нужно менять физическую карту,
                      всё настраивается через приложение за несколько минут.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Как активировать eSIM?</AccordionTrigger>
                    <AccordionContent>
                      После оплаты вы получите QR-код на email. Отсканируйте его в настройках телефона
                      в разделе "Сотовая связь" → "Добавить тариф" → "Отсканировать QR-код".
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>В каких странах работает?</AccordionTrigger>
                    <AccordionContent>
                      eSIM Travel работает в 40+ странах Европы, Азии и Америки. Полный список
                      доступен в приложении после оформления.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Можно ли продлить тариф?</AccordionTrigger>
                    <AccordionContent>
                      Да, вы можете докупить гигабайты и минуты прямо в приложении по выгодной цене
                      в любой момент во время действия тарифа.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Поддерживает ли мой телефон eSIM?</AccordionTrigger>
                    <AccordionContent>
                      eSIM поддерживают iPhone XS и новее, большинство флагманских Android-смартфонов
                      от Samsung, Google, Xiaomi. Проверьте в настройках наличие раздела "eSIM" или "Добавить тариф".
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              <TabsContent value="chat">
                <Card className="h-[500px] flex flex-col border-slate-200">
                  <div className="p-4 border-b border-slate-200 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Icon name="Headphones" size={20} className="text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold">Поддержка билайн</p>
                      <p className="text-xs text-slate-600">Обычно отвечаем в течение 2 минут</p>
                    </div>
                  </div>
                  <div className="flex-1 p-4 overflow-y-auto space-y-3">
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0"></div>
                      <div className="bg-slate-100 rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                        <p className="text-sm">Здравствуйте! Чем могу помочь?</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-t border-slate-200">
                    <div className="flex gap-2">
                      <Input placeholder="Напишите сообщение..." className="flex-1" />
                      <Button size="icon" className="bg-primary hover:bg-primary/90 text-secondary flex-shrink-0">
                        <Icon name="Send" size={20} />
                      </Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 safe-area-inset-bottom">
          <div className="max-w-md mx-auto flex justify-around items-center py-2">
            <Button
              variant="ghost"
              className={`flex-col h-auto py-2 ${selectedScreen === 'home' ? 'text-primary' : 'text-slate-600'}`}
              onClick={() => setSelectedScreen('home')}
            >
              <Icon name="Home" size={24} />
              <span className="text-xs mt-1">Главная</span>
            </Button>
            <Button
              variant="ghost"
              className={`flex-col h-auto py-2 ${selectedScreen === 'esim' ? 'text-primary' : 'text-slate-600'}`}
              onClick={() => setSelectedScreen('esim')}
            >
              <Icon name="Smartphone" size={24} />
              <span className="text-xs mt-1">eSIM</span>
            </Button>
            <Button
              variant="ghost"
              className={`flex-col h-auto py-2 ${selectedScreen === 'plans' ? 'text-primary' : 'text-slate-600'}`}
              onClick={() => setSelectedScreen('plans')}
            >
              <Icon name="Package" size={24} />
              <span className="text-xs mt-1">Тарифы</span>
            </Button>
            <Button
              variant="ghost"
              className={`flex-col h-auto py-2 ${selectedScreen === 'order' ? 'text-primary' : 'text-slate-600'}`}
              onClick={() => setSelectedScreen('order')}
            >
              <Icon name="ShoppingCart" size={24} />
              <span className="text-xs mt-1">Оформить</span>
            </Button>
            <Button
              variant="ghost"
              className={`flex-col h-auto py-2 ${selectedScreen === 'support' ? 'text-primary' : 'text-slate-600'}`}
              onClick={() => setSelectedScreen('support')}
            >
              <Icon name="HelpCircle" size={24} />
              <span className="text-xs mt-1">Помощь</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}