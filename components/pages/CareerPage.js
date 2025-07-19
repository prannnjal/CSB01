"use client"

import { useState } from "react"
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Heart,
  Coffee,
  CheckCircle,
  Upload,
  User,
  Mail,
  Phone,
} from "lucide-react"

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState(null)
  const [applicationForm, setApplicationForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: null,
  })

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Digital Marketing Manager",
      department: "Marketing",
      location: "Delhi, India",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹8-12 LPA",
      description: "Lead digital marketing campaigns and drive ROI for our clients.",
      requirements: [
        "3+ years in digital marketing",
        "Experience with Google Ads, Facebook Ads",
        "Strong analytical skills",
        "Team leadership experience",
      ],
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹6-10 LPA",
      description: "Create stunning user experiences for web and mobile applications.",
      requirements: [
        "Proficiency in Figma, Adobe Creative Suite",
        "Strong portfolio of UI/UX work",
        "Understanding of user-centered design",
        "Experience with prototyping tools",
      ],
    },
    {
      id: 3,
      title: "Content Marketing Specialist",
      department: "Content",
      location: "Jaipur, India",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹4-7 LPA",
      description: "Develop engaging content strategies that drive brand awareness.",
      requirements: [
        "Excellent writing and editing skills",
        "SEO knowledge",
        "Social media expertise",
        "Creative thinking abilities",
      ],
    },
    {
      id: 4,
      title: "Full Stack Developer",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
      experience: "2-5 years",
      salary: "₹7-15 LPA",
      description: "Build scalable web applications using modern technologies.",
      requirements: [
        "React.js, Node.js experience",
        "Database management skills",
        "API development experience",
        "Version control (Git) proficiency",
      ],
    },
    {
      id: 5,
      title: "Business Development Executive",
      department: "Sales",
      location: "Delhi, India",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹3-6 LPA + Incentives",
      description: "Drive business growth through client acquisition and relationship management.",
      requirements: [
        "Strong communication skills",
        "Sales experience preferred",
        "Client relationship management",
        "Target-oriented mindset",
      ],
    },
    {
      id: 6,
      title: "SEO Specialist",
      department: "Marketing",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹5-9 LPA",
      description: "Optimize websites and content for search engine rankings.",
      requirements: [
        "SEO tools expertise (Ahrefs, SEMrush)",
        "Technical SEO knowledge",
        "Content optimization skills",
        "Analytics and reporting experience",
      ],
    },
  ]

  const benefits = [
    { icon: Heart, title: "Health Insurance", description: "Comprehensive medical coverage" },
    { icon: TrendingUp, title: "Career Growth", description: "Clear advancement opportunities" },
    { icon: Coffee, title: "Flexible Hours", description: "Work-life balance priority" },
    { icon: Users, title: "Team Events", description: "Regular team building activities" },
    { icon: DollarSign, title: "Performance Bonus", description: "Quarterly performance incentives" },
    { icon: Briefcase, title: "Learning Budget", description: "Annual skill development allowance" },
  ]

  const handleJobSelect = (job) => {
    setSelectedJob(job)
    setApplicationForm({ ...applicationForm, position: job.title })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setApplicationForm({ ...applicationForm, [name]: value })
  }

  const handleFileChange = (e) => {
    setApplicationForm({ ...applicationForm, resume: e.target.files[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Application submitted successfully! We'll get back to you soon.")
    setApplicationForm({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      resume: null,
    })
    setSelectedJob(null)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section (like About) */}
      <section className="relative min-h-screen bg-white/60 px-0 py-8" style={{ backdropFilter: "blur(2px)" }}>
        {/* Video & Overlay */}
        <div className="relative w-full h-screen md:aspect-video md:max-h-[100vh] mb-10 rounded-xl overflow-hidden shadow-lg bg-black">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-x-[-1]"
            src="/4K Planet Earth Spinning in Space _ Free HD Videos - No Copyright.mp4"
            autoPlay
            muted
            playsInline
            loop
          />
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/40">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6 text-center drop-shadow-lg">Join Our Team</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90 text-center drop-shadow">
              Build your career with India's leading digital marketing agency. We're looking for passionate individuals who want to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById("openings").scrollIntoView({ behavior: "smooth" })}
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Open Positions
              </button>
              <button
                onClick={() => document.getElementById("culture").scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Our Culture
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section id="culture" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Job List */}
            <div className="space-y-4">
              {jobOpenings.map((job) => (
                <div
                  key={job.id}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedJob?.id === job.id
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200 hover:border-purple-300"
                  }`}
                  onClick={() => handleJobSelect(job)}
                >
                  <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{job.description}</p>
                </div>
              ))}
            </div>

            {/* Job Details & Application */}
            <div className="bg-gray-50 p-6 rounded-xl">
              {selectedJob ? (
                <div>
                  <h3 className="text-2xl font-bold mb-4">{selectedJob.title}</h3>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-2">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Application Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h4 className="font-semibold text-lg">Apply Now</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <div className="relative">
                          <User className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={applicationForm.name}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <div className="relative">
                          <Mail className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={applicationForm.email}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Phone</label>
                        <div className="relative">
                          <Phone className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={applicationForm.phone}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Experience</label>
                        <select
                          name="experience"
                          value={applicationForm.experience}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          required
                        >
                          <option value="">Select Experience</option>
                          <option value="0-1">0-1 years</option>
                          <option value="1-3">1-3 years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="5+">5+ years</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Resume</label>
                      <div className="relative">
                        <Upload className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                        <input
                          type="file"
                          name="resume"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                    >
                      Submit Application
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <Briefcase className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Select a position to view details and apply</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Don't See Your Role?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hr@chalksnboard.in"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Email HR Team
            </a>
            <a
              href="tel:+917654484444"
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
