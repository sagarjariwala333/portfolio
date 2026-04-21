import { Calendar, MapPin } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      company: "ScaleTeam Technologies Pvt Ltd",
      position: "Software Engineer",
      location: "Surat, India",
      period: "March 2025 – Present",
      achievements: [
        "Applied AI/LLM pipelines across projects, including agent-based orchestration, memory systems, and workflow automation",
        "Designed and deployed applications using Docker, AWS, and CI/CD pipelines",
        "Mentored junior developers, conducted code reviews, and participated in technical interviews and candidate screening"
      ]
    },
    {
      company: "Aubergine Solutions Pvt Ltd",
      position: "Software Engineer",
      location: "Ahmedabad, India",
      period: "December 2023 – March 2025",
      achievements: [
        "Led development of an internal biometric attendance system, achieving 95%+ compliance accuracy and saving Rs.6 lakh/year compared to third-party tools like Keka",
        "Collaborated with HR and cross-functional teams for requirements, planning, and demonstrations",
        "Participated in requirement analysis, client discussions and demonstrations to align with business needs",
        "Worked in an Agile(Scrum), participating in sprint planning, stand-ups, and task tracking using Jira",
        "Contributed to our team's learning culture by leading show-and-tell sessions for 50+ members, fostering engaging knowledge sharing and skill growth"
      ]
    }
  ]

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-gray-600">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">
                        {achievement}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}