import { Calendar, TrendingUp, Users, DollarSign } from 'lucide-react'

export default function Projects() {
  const project = {
    title: "Virre AI: Professional Network",
    period: "Jan 2026 – Present",
    highlights: [
      {
        icon: <Users className="w-5 h-5" />,
        title: "End-to-End Module Leadership",
        description: "Led complete ownership of a module within a multi-agent AI system - planned the module, identified risks and designed solutions, delegated tasks across team, and facilitated brainstorming sessions to align the team on approach and drive timely delivery."
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        title: "95% Cost Reduction",
        description: "Led end-to-end development AI search pipeline to enable affordable external professional search (core product feature), cutting costs 95% (∼ $21 to ∼ $1/100 queries) and earning client/management recognition."
      },
      {
        icon: <TrendingUp className="w-5 h-5" />,
        title: "AI Pipeline Development",
        description: "Built an AI pipeline for professional research using search, web crawling, LinkedIn scraping, and LLM-based summarization/evaluation/filtering, achieving > 95% precision with reduced latency via parallel processing."
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        title: "Stripe Billing Integration",
        description: "Implemented Stripe billing for 3-tier plans with monthly/yearly upgrades and downgrades using invoice-based billing, ensuring accurate charges and eliminating incorrect immediate transactions."
      }
    ]
  }

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Project
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={16} />
                  {project.period}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-primary">
                      {highlight.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      {highlight.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              This project showcases my expertise in AI/ML, full-stack development, and business impact delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                AI/ML Pipeline
              </span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Multi-Agent Systems
              </span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Cost Optimization
              </span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Stripe Integration
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}