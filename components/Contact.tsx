import { Mail, Phone, Linkedin, MapPin } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91-9723353062",
      href: "tel:+919723353062"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "sagarjariwala333@gmail.com",
      href: "mailto:sagarjariwala333@gmail.com"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/sagar-jariwala-0892a5143/",
      href: "https://linkedin.com/in/sagar-jariwala-0892a5143/"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "India",
      href: null
    }
  ]

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Whether you're a recruiter, founder, or tech lead, I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {info.label}
                    </h3>
                    {info.href ? (
                      <a 
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-secondary hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-secondary">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Ready to collaborate?
              </h3>
              <p className="text-gray-600 mb-6">
                I'm currently open to new opportunities and would love to discuss how I can contribute to your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:sagarjariwala333@gmail.com"
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Send Email
                </a>
                <a 
                  href="https://linkedin.com/in/sagar-jariwala-0892a5143/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}