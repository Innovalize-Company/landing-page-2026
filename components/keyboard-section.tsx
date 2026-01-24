"use client"

import { useEffect, useState } from "react"

const keyboardRows = [
  ["esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"],
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "del"],
  ["tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
  ["caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "return"],
  ["shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "shift"],
  ["fn", "ctrl", "opt", "cmd", "", "cmd", "opt"],
]

const content = {
  en: {
    title: "Automate boring manual tasks with AI.",
    subtitle: "Save time and resources.",
  },
  es: {
    title: "Automatiza tareas manuales aburridas con IA.",
    subtitle: "Ahorra tiempo y recursos.",
  },
}

interface KeyboardSectionProps {
  lang: "en" | "es"
}

export function KeyboardSection({ lang }: KeyboardSectionProps) {
  const [activeKeys, setActiveKeys] = useState<string[]>([])
  const t = content[lang]

  useEffect(() => {
    const interval = setInterval(() => {
      const row = Math.floor(Math.random() * keyboardRows.length)
      const col = Math.floor(Math.random() * keyboardRows[row].length)
      const key = keyboardRows[row][col]
      if (key) {
        setActiveKeys(prev => [...prev.slice(-5), key])
      }
    }, 200)

    return () => clearInterval(interval)
  }, [])

  const getKeyWidth = (key: string) => {
    if (key === "") return "flex-1"
    if (["tab", "caps", "shift", "return", "del"].includes(key)) return "w-16 md:w-20"
    if (key === "cmd") return "w-14 md:w-16"
    return "w-8 md:w-10"
  }

  return (
    <section className="py-24 bg-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.title}</h2>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
        </div>

        {/* Keyboard */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-4 md:p-6 shadow-2xl">
            <div className="space-y-2">
              {keyboardRows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-1 justify-center">
                  {row.map((key, keyIndex) => {
                    const isActive = activeKeys.includes(key)
                    return (
                      <div
                        key={`${rowIndex}-${keyIndex}`}
                        className={`
                          ${getKeyWidth(key)}
                          h-8 md:h-10 
                          rounded-md 
                          flex items-center justify-center 
                          text-[10px] md:text-xs 
                          font-medium
                          transition-all duration-150
                          ${key === "" ? "bg-transparent" : isActive 
                            ? "bg-primary text-primary-foreground scale-95" 
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                          }
                        `}
                      >
                        {key}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
