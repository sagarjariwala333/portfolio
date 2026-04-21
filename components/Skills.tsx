export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["JavaScript", "TypeScript"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Tailwind", "Mongoose", "Node.js", "Next.js"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, RDS, Lambda)", "Docker", "CI/CD pipelines"]
    },
    {
      title: "AI/ML",
      skills: ["GPT/LLMs", "LangChain", "N8N", "Mastra"]
    },
    {
      title: "Tools & Practices",
      skills: ["Agile/Scrum", "Jira", "Postman", "Swagger", "GitHub Copilot"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "SQL"]
    }
  ]

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-center">
                      <span className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-sm font-medium text-center w-full">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Continuously learning and adapting to new technologies. My experience spans from traditional web development 
            to cutting-edge AI/ML implementations, with a strong focus on delivering scalable, efficient solutions.
          </p>
        </div>
      </div>
    </section>
  )
}