import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Roadmap from './components/Roadmap'
import ModuleDetail from './components/ModuleDetail'
import WeeklyCalendar from './components/WeeklyCalendar'
import Certificates from './components/Certificates'
import BottomNav from './components/BottomNav'
import { useProgress } from './hooks/useProgress'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [selectedModule, setSelectedModule] = useState(null)
  const progressHook = useProgress()

  const handleModuleSelect = (module) => {
    setSelectedModule(module)
  }

  const handleBack = () => {
    setSelectedModule(null)
  }

  if (selectedModule) {
    return (
      <div style={{ height: '100dvh', display: 'flex', flexDirection: 'column', background: '#0d0d1a', overflow: 'hidden' }}>
        <ModuleDetail
          module={selectedModule}
          onBack={handleBack}
          {...progressHook}
        />
      </div>
    )
  }

  return (
    <div style={{ height: '100dvh', display: 'flex', flexDirection: 'column', background: '#0d0d1a', overflow: 'hidden' }}>
      <main className="flex-1 overflow-y-auto safe-bottom">
        {activeTab === 'home' && (
          <Dashboard onModuleSelect={handleModuleSelect} {...progressHook} />
        )}
        {activeTab === 'roadmap' && (
          <Roadmap onModuleSelect={handleModuleSelect} {...progressHook} />
        )}
        {activeTab === 'weeks' && (
          <WeeklyCalendar onModuleSelect={handleModuleSelect} {...progressHook} />
        )}
        {activeTab === 'certs' && (
          <Certificates {...progressHook} />
        )}
      </main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
