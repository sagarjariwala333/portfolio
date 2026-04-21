export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Professional Summary
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Software Engineer with 2+ years of experience specializing in the MERN stack 
                (MongoDB, Express.js, React, Node.js), along with hands-on expertise in AWS and Docker. 
                I have delivered solutions across multiple domains including HRTech, E-commerce, and PetCare platforms.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My strong focus on AI and automation has led to significant achievements, including building 
                an end-to-end AI-powered search pipeline that reduced operational costs by 95%, earning 
                recognition from both client and internal stakeholders.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I'm passionate about leveraging cutting-edge technologies to solve complex problems and 
                drive business value through innovative software solutions.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Education
              </h3>
              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  Bachelor of Engineering in Computer Engineering
                </h4>
                <p className="text-primary font-medium">
                  First Class with Distinction
                </p>
                <p className="text-gray-600 mt-2">
                  Faculty of Technology and Engineering<br />
                  Maharaja Sayajirao University of Baroda
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  2021-2024 • Vadodara, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}