import { Mail, Phone, Linkedin, Github } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container-max section-padding">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Sagar Jariwala
          </h1>
          <p className="text-xl md:text-2xl text-secondary mb-8 max-w-3xl mx-auto">
            Software Engineer specializing in MERN stack, AWS, and AI/ML solutions
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
            2+ years of experience delivering solutions across HRTech, E-commerce, and PetCare platforms. 
            Strong focus on AI and automation with proven track record of reducing operational costs by 95%.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a 
              href="tel:+919723353062" 
              className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
            >
              <Phone size={20} />
              +91-9723353062
            </a>
            <a 
              href="mailto:sagarjariwala333@gmail.com" 
              className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
            >
              <Mail size={20} />
              sagarjariwala333@gmail.com
            </a>
            <a 
              href="https://linkedin.com/in/sagar-jariwala-0892a5143/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}