import { useState } from 'react'
import { Building2, Map, Globe, Network, Leaf, Layers, LineChart } from 'lucide-react'

const DATA = [
  {
    title: 'Urban Planning',
    icon: Building2,
    description: 'Master planning with integrated land use, transport, housing, and economy for sustainable growth.',
    tools: ['Master planning', 'Land use', 'Transport', 'Housing', 'Economy'],
  },
  {
    title: 'GIS Solutions',
    icon: Map,
    description: 'Data-driven spatial analysis, scenario modeling, and GIS-based master plan mapping.',
    tools: ['GIS', 'Spatial analytics', 'Scenario modeling', 'Cartography'],
  },
  {
    title: 'Regional Planning',
    icon: Globe,
    description: 'Strategies for land-use, transport systems, and environmentally sensitive zone planning.',
    tools: ['Regional models', 'Systems planning', 'ESZ analysis'],
  },
  {
    title: 'Transportation Planning',
    icon: Network,
    description: 'Sustainable mobility design for city and regional networks.',
    tools: ['Transit planning', 'Active mobility', 'Network optimization'],
  },
  {
    title: 'Environmental Planning',
    icon: Leaf,
    description: 'Conservation strategies, ecological balance, and pollution mitigation.',
    tools: ['EIA', 'Mitigation', 'Green infrastructure'],
  },
  {
    title: 'Infrastructure Planning',
    icon: Layers,
    description: 'Integrated utilities, transportation, and public service systems.',
    tools: ['Utilities', 'Public services', 'Resilience'],
  },
  {
    title: 'Feasibility Studies',
    icon: LineChart,
    description: 'Viability assessment, cost-benefit analysis, and project impact projection.',
    tools: ['CBA', 'Demand forecasting', 'Impact analysis'],
  },
]

export default function ServiceAccordion() {
  const [open, setOpen] = useState(0)

  return (
    <div className="space-y-3">
      {DATA.map(({ title, icon: Icon, description, tools }, idx) => (
        <div key={title} className="rounded-2xl border border-white/10 bg-neutral-900/60">
          <button
            onClick={() => setOpen(open === idx ? -1 : idx)}
            className="w-full flex items-center justify-between p-5"
          >
            <div className="flex items-center gap-3 text-left">
              <Icon className="h-6 w-6 text-emerald-400" />
              <div>
                <p className="text-white font-semibold">{title}</p>
                <p className="text-emerald-100/80 text-sm">{description}</p>
              </div>
            </div>
            <span className={`text-emerald-300 transition-transform ${open === idx ? 'rotate-45' : ''}`}>+</span>
          </button>
          {open === idx && (
            <div className="px-5 pb-5">
              <p className="text-sm text-emerald-100/90">Tools & Tech:</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs bg-emerald-500/10 text-emerald-200 border border-emerald-500/20">{t}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
