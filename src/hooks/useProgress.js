import { useState, useEffect, useCallback } from 'react'
import { ALL_MODULES, TRACKS } from '../data/learningData'

const STORAGE_KEY = 'claude-tracker-v1'

const defaultState = {
  completedModules: [],
  checkedItems: {},     // { moduleId: [0, 2, 4] }  ← checklist indices
  currentWeek: 1,
  startDate: new Date().toISOString(),
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? { ...defaultState, ...JSON.parse(raw) } : defaultState
  } catch {
    return defaultState
  }
}

export function useProgress() {
  const [state, setState] = useState(load)

  // Persist on every change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // localStorage full or unavailable – silently ignore
    }
  }, [state])

  // ── Module completion ────────────────────────────────────────────────────
  const toggleModule = useCallback((moduleId) => {
    setState(prev => ({
      ...prev,
      completedModules: prev.completedModules.includes(moduleId)
        ? prev.completedModules.filter(id => id !== moduleId)
        : [...prev.completedModules, moduleId],
    }))
  }, [])

  const isModuleCompleted = useCallback(
    (moduleId) => state.completedModules.includes(moduleId),
    [state.completedModules]
  )

  // ── Checklist ────────────────────────────────────────────────────────────
  const toggleChecklistItem = useCallback((moduleId, index) => {
    setState(prev => {
      const current = prev.checkedItems[moduleId] ?? []
      const updated = current.includes(index)
        ? current.filter(i => i !== index)
        : [...current, index]
      return {
        ...prev,
        checkedItems: { ...prev.checkedItems, [moduleId]: updated },
      }
    })
  }, [])

  const getCheckedItems = useCallback(
    (moduleId) => state.checkedItems[moduleId] ?? [],
    [state.checkedItems]
  )

  // ── Week ─────────────────────────────────────────────────────────────────
  const setCurrentWeek = useCallback((week) => {
    setState(prev => ({ ...prev, currentWeek: Math.max(1, Math.min(14, week)) }))
  }, [])

  // ── Derived stats ─────────────────────────────────────────────────────────
  const totalModules = ALL_MODULES.length

  const completedCount = state.completedModules.length

  const progressPct = totalModules > 0
    ? Math.round((completedCount / totalModules) * 100)
    : 0

  const getTrackProgress = useCallback(
    (trackId) => {
      const track = TRACKS.find(t => t.id === trackId)
      if (!track) return { completed: 0, total: 0, pct: 0 }
      const modules = track.phases.flatMap(p => p.modules)
      const completed = modules.filter(m => state.completedModules.includes(m.id)).length
      return {
        completed,
        total: modules.length,
        pct: modules.length > 0 ? Math.round((completed / modules.length) * 100) : 0,
      }
    },
    [state.completedModules]
  )

  const userLevel = (() => {
    if (progressPct < 25) return { label: 'Inicio', emoji: '🌱', value: 0 }
    if (progressPct < 50) return { label: 'Aprendiz', emoji: '📖', value: 1 }
    if (progressPct < 75) return { label: 'Dev', emoji: '💻', value: 2 }
    return { label: 'Experto', emoji: '🚀', value: 3 }
  })()

  const certsEarned = ALL_MODULES.filter(
    m => m.hasCertificate && state.completedModules.includes(m.id)
  ).length

  const certsTotal = ALL_MODULES.filter(m => m.hasCertificate).length

  // Next incomplete module (in order)
  const nextModule = ALL_MODULES.find(m => !state.completedModules.includes(m.id)) ?? null

  return {
    // state
    completedModules: state.completedModules,
    currentWeek: state.currentWeek,
    // actions
    toggleModule,
    isModuleCompleted,
    toggleChecklistItem,
    getCheckedItems,
    setCurrentWeek,
    // derived
    totalModules,
    completedCount,
    progressPct,
    getTrackProgress,
    userLevel,
    certsEarned,
    certsTotal,
    nextModule,
  }
}
