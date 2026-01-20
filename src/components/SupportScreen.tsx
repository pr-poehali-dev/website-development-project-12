import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface SupportScreenProps {
  onNavigate: (screen: 'home' | 'esim' | 'plans' | 'order' | 'support') => void;
}

export default function SupportScreen({ onNavigate }: SupportScreenProps) {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="flex items-center justify-between mb-6">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => onNavigate('home')}
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
  );
}
