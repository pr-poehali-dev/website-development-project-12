import { useState } from 'react';
import HomeScreen from '@/components/HomeScreen';
import EsimInfoScreen from '@/components/EsimInfoScreen';
import PlansScreen from '@/components/PlansScreen';
import OrderScreen from '@/components/OrderScreen';
import SupportScreen from '@/components/SupportScreen';
import BottomNavigation from '@/components/BottomNavigation';

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
          <HomeScreen onNavigate={setSelectedScreen} />
        )}

        {selectedScreen === 'esim' && (
          <EsimInfoScreen onNavigate={setSelectedScreen} />
        )}

        {selectedScreen === 'plans' && (
          <PlansScreen 
            onNavigate={setSelectedScreen}
            selectedData={selectedData}
            setSelectedData={setSelectedData}
            selectedMinutes={selectedMinutes}
            setSelectedMinutes={setSelectedMinutes}
            dataOptions={dataOptions}
            minutesOptions={minutesOptions}
          />
        )}

        {selectedScreen === 'order' && (
          <OrderScreen 
            onNavigate={setSelectedScreen}
            selectedData={selectedData}
            selectedMinutes={selectedMinutes}
          />
        )}

        {selectedScreen === 'support' && (
          <SupportScreen onNavigate={setSelectedScreen} />
        )}

        <BottomNavigation 
          selectedScreen={selectedScreen}
          onNavigate={setSelectedScreen}
        />
      </div>
    </div>
  );
}
