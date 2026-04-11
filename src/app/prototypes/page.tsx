"use client"

import { useState } from "react"
import Prototype1 from "./page-1"
import Prototype2 from "./page-2"
import Prototype3 from "./page-3"
import Prototype4 from "./page-4"
import Prototype5 from "./page-5"

const prototypes = [
  { id: 1, name: "Style 1", desc: "Clean & Modern" },
  { id: 2, name: "Style 2", desc: "Glassmorphism Premium" },
  { id: 3, name: "Style 3", desc: "Gradient Hero" },
  { id: 4, name: "Style 4", desc: "Cards Grid" },
  { id: 5, name: "Style 5", desc: "Centered Focus" },
]

export default function PrototypesPage() {
  const [active, setActive] = useState(1)

  return (
    <div className="min-h-screen bg-[#09090b]">
      {/* Selector */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/10 p-4">
        <div className="max-w-[430px] mx-auto">
          <p className="text-center text-white/60 text-sm mb-3">Select a prototype to preview:</p>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {prototypes.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                  active === p.id
                    ? "bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white"
                    : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Prototype Content */}
      <div className="pt-24">
        {active === 1 && <Prototype1 />}
        {active === 2 && <Prototype2 />}
        {active === 3 && <Prototype3 />}
        {active === 4 && <Prototype4 />}
        {active === 5 && <Prototype5 />}
      </div>
    </div>
  )
}
