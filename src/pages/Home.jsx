import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Share2,
  Play,
  Heart,
  MapPin,
  ArrowRight,
  Search,
  MousePointer2,
  Mail,
  BarChart3,
  FileText,
  MoveDown,
  ArrowLeft,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function LandingPage() {
  const navigation = [
    { name: "About us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Use Cases", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Blog", href: "#" },
  ];

  const services = [
    {
      title: "Search engine optimization",
      icon: Search,
      bgColor: "bg-white",
    },
    {
      title: "Pay-per-click advertising",
      icon: MousePointer2,
      bgColor: "bg-[#C4F934]",
    },
    {
      title: "Social Media Marketing",
      icon: Heart,
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Email Marketing",
      icon: Mail,
      bgColor: "bg-white",
    },
    {
      title: "Content Creation",
      icon: FileText,
      bgColor: "bg-[#C4F934]",
    },
    {
      title: "Analytics and Tracking",
      icon: BarChart3,
      bgColor: "bg-black",
      textColor: "text-white",
    },
  ];

  const processes = [
    {
      number: "01",
      title: "Consultation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "02",
      title: "Research and Strategy Development",
      content:
        "We conduct thorough market research and develop a comprehensive strategy tailored to your business objectives and target audience.",
    },
    {
      number: "03",
      title: "Implementation",
      content:
        "Our team executes the strategy with precision, implementing all planned marketing initiatives and campaigns.",
    },
    {
      number: "04",
      title: "Monitoring and Optimization",
      content:
        "We continuously monitor campaign performance and make data-driven optimizations to improve results.",
    },
    {
      number: "05",
      title: "Reporting and Communication",
      content:
        "Regular reporting and open communication keep you informed about progress and results.",
    },
    {
      number: "06",
      title: "Continual Improvement",
      content:
        "We consistently refine and improve our strategies based on performance data and your feedback.",
    },
  ];

  const team = [
    {
      name: "John Smith",
      role: "CEO and Founder",
      image: "/placeholder.svg?height=100&width=100",
      description:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      name: "Jane Doe",
      role: "Director of Operations",
      image: "/placeholder.svg?height=100&width=100",
      description:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    },
    {
      name: "Michael Brown",
      role: "Senior SEO Specialist",
      image: "/placeholder.svg?height=100&width=100",
      description:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    },
    {
      name: "Emily Johnson",
      role: "PPC Manager",
      image: "/placeholder.svg?height=100&width=100",
      description:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    },
    {
      name: "Brian Williams",
      role: "Social Media Specialist",
      image: "/placeholder.svg?height=100&width=100",
      description:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
    {
      name: "Sarah Kim",
      role: "Content Creator",
      image: "/placeholder.svg?height=100&width=100",
      description:
        "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    },
  ];

  const testimonials = [
    {
      quote:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. I highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director at XYZ Corp",
    },
    {
      quote:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
      author: "Sarah Johnson",
      position: "CEO at ABC Company",
    },
    {
      quote:
        "The team at Positivus has been instrumental in helping us achieve our digital marketing goals. Their expertise and dedication are unmatched.",
      author: "Michael Brown",
      position: "Director of Digital at 123 Industries",
    },
    {
      quote:
        "Working with Positivus has transformed our online presence. Their strategic approach and attention to detail have delivered exceptional results.",
      author: "Emily Wilson",
      position: "Marketing Manager at Tech Solutions",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="px-6 py-8">
        <div className="flex items-center justify-between max-w-[1400px] mx-auto">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-black" />
            <span className="text-xl font-bold">Positivus</span>
          </div>
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-5 py-2 text-sm font-medium text-gray-900 hover:text-gray-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <button className="px-6 py-2 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-100">
            Request a quote
          </button>
        </div>
      </header>

      <main>
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Hero Section */}
          <section className="py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2 space-y-8">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Navigating the digital landscape for success
                </h1>
                <p className="text-lg text-gray-600 max-w-lg">
                  Our digital marketing agency helps businesses grow and succeed
                  online through a range of services including SEO, PPC, social
                  media marketing, and content creation.
                </p>
                <button className="px-8 py-4 bg-black text-white rounded-md text-lg font-medium hover:bg-gray-800">
                  Book a consultation
                </button>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="relative w-full h-[500px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[400px] h-[400px] relative">
                      <div className="w-full h-full border-4 border-black rounded-md animate-[spin_20s_linear_infinite]" />
                      <div className="w-full h-full border-4 border-black rounded-md absolute top-0 left-0 rotate-45" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rotate-45">
                        <div className="w-48 h-48 bg-[#C4F934] rounded-tl-full" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-12 right-12">
                    <Heart className="w-12 h-12 text-black" />
                  </div>
                  <div className="absolute bottom-12 left-12">
                    <Share2 className="w-12 h-12 text-black" />
                  </div>
                  <div className="absolute bottom-24 right-24">
                    <Play className="w-12 h-12 text-black" />
                  </div>
                  <div className="absolute top-24 left-24">
                    <MapPin className="w-12 h-12 text-black" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Logos Section */}
          <section className="py-16">
            <div className="flex flex-wrap justify-between items-center gap-8">
              {[
                "Amazon",
                "Dribbble",
                "HubSpot",
                "Motion",
                "Netflix",
                "Zoom",
              ].map((logo) => (
                <img
                  key={logo}
                  src={`/placeholder.svg?height=30&width=100&text=${logo}`}
                  alt={logo}
                  className="h-8"
                />
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section className="py-24">
            <div className="space-y-16">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-[#C4F934] rounded-md">
                  <h2 className="text-2xl font-bold">Services</h2>
                </div>
                <p className="text-lg max-w-2xl">
                  At our digital marketing agency, we offer a range of services
                  to help businesses grow and succeed online. These services
                  include:
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`${service.bgColor} ${
                      service.textColor || "text-black"
                    } p-8 rounded-3xl space-y-12`}
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <service.icon className="w-12 h-12" />
                    </div>
                    <Link
                      to="#"
                      className="inline-flex items-center gap-2 text-lg font-medium hover:opacity-80"
                    >
                      Learn more <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Studies Section */}
          <section className="py-24">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-[#C4F934] rounded-md">
                  <h2 className="text-2xl font-bold">Case Studies</h2>
                </div>
                <p className="text-lg">
                  Explore Real-Life Examples of Our Proven Digital Marketing
                  Success through Our Case Studies
                </p>
              </div>

              <div className="bg-black text-white rounded-3xl p-12">
                <div className="grid md:grid-cols-3 gap-8 divide-x divide-gray-800">
                  <div className="space-y-4 pr-8">
                    <p className="text-lg">
                      For a local restaurant, we implemented a targeted PPC
                      campaign that resulted in a 50% increase in website
                      traffic and a 65% increase in sales.
                    </p>
                    <Link
                      to="#"
                      className="inline-flex items-center gap-2 text-[#C4F934] hover:opacity-80"
                    >
                      Learn more <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>

                  <div className="space-y-4 px-8">
                    <p className="text-lg">
                      For a B2B software company, we developed an SEO strategy
                      that resulted in a first page ranking for key keywords and
                      a 200% increase in organic traffic.
                    </p>
                    <Link
                      to="#"
                      className="inline-flex items-center gap-2 text-[#C4F934] hover:opacity-80"
                    >
                      Learn more <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>

                  <div className="space-y-4 pl-8">
                    <p className="text-lg">
                      For a national retail chain, we created a social media
                      marketing campaign that increased followers by 25% and
                      generated a 20% increase in online sales.
                    </p>
                    <Link
                      to="#"
                      className="inline-flex items-center gap-2 text-[#C4F934] hover:opacity-80"
                    >
                      Learn more <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Working Process Section */}
          <section className="py-24">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-[#C4F934] rounded-md">
                  <h2 className="text-2xl font-bold">Our Working Process</h2>
                </div>
                <p className="text-lg">
                  Step-by-Step Guide to Achieving Your Business Goals
                </p>
              </div>

              <div className="space-y-4">
                {processes.map((process, index) => (
                  <div
                    key={process.number}
                    className={`rounded-3xl overflow-hidden ${
                      index === 0 ? "bg-[#C4F934]" : "bg-gray-100"
                    }`}
                  >
                    <button
                      className="w-full px-8 py-6 flex items-center justify-between"
                      onClick={() => {
                        // Toggle accordion item
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold">
                          {process.number}
                        </span>
                        <span className="text-xl font-bold">
                          {process.title}
                        </span>
                      </div>
                      <div className="rounded-md border-2 border-black p-2">
                        <MoveDown className="h-4 w-4" />
                      </div>
                    </button>
                    <div className="px-8 pb-6 pt-0">
                      <p className="text-lg ml-12">{process.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-24">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-[#C4F934] rounded-md">
                  <h2 className="text-2xl font-bold">Team</h2>
                </div>
                <p className="text-lg">
                  Meet the skilled and experienced team behind our successful
                  digital marketing strategies
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {team.map((member, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-3xl border border-gray-200"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <div className="w-16 h-16 bg-[#C4F934] rounded-md absolute -top-1 -left-1 -z-10" />
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-16 h-16 rounded-md object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold">{member.name}</h3>
                            <p className="text-sm text-gray-600">
                              {member.role}
                            </p>
                          </div>
                        </div>
                        <Link
                          to="#"
                          className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </Link>
                      </div>
                      <p className="text-sm text-gray-600">
                        {member.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <button className="px-8 py-2 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-100">
                  See all team
                </button>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-24">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-[#C4F934] rounded-md">
                  <h2 className="text-2xl font-bold">Testimonials</h2>
                </div>
                <p className="text-lg">
                  Hear from Our Satisfied Clients: Read Our Testimonials to
                  Learn More about Our Digital Marketing Services
                </p>
              </div>

              <div className="relative">
                <div className="bg-black text-white rounded-3xl p-8 md:p-12">
                  <div className="space-y-12">
                    <div className="min-h-[200px]">
                      <div className="transition-opacity duration-300">
                        <p className="text-lg md:text-xl leading-relaxed">
                          {testimonials[currentSlide].quote}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <p className="font-bold">
                          {testimonials[currentSlide].author}
                        </p>
                        <p className="text-gray-400">
                          {testimonials[currentSlide].position}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={previousSlide}
                            className="p-2 hover:bg-gray-800 rounded-md transition-colors"
                            aria-label="Previous testimonial"
                          >
                            <ArrowLeft className="w-6 h-6" />
                          </button>
                          <button
                            onClick={nextSlide}
                            className="p-2 hover:bg-gray-800 rounded-md transition-colors"
                            aria-label="Next testimonial"
                          >
                            <ArrowRight className="w-6 h-6" />
                          </button>
                        </div>

                        <div className="flex items-center gap-2">
                          {testimonials.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => goToSlide(index)}
                              className={`w-2 h-2 rounded-md transition-colors ${
                                currentSlide === index
                                  ? "bg-[#C4F934]"
                                  : "bg-gray-600"
                              }`}
                              aria-label={`Go to testimonial ${index + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-24">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-[#C4F934] rounded-md">
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                </div>
                <p className="text-lg">
                  Connect with Us: Let's Discuss Your Digital Marketing Needs
                </p>
              </div>

              <div className="bg-gray-100 rounded-3xl p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex gap-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="contact-type"
                          value="say-hi"
                          defaultChecked
                          className="form-radio"
                        />
                        <span>Say Hi</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="contact-type"
                          value="get-quote"
                          className="form-radio"
                        />
                        <span>Get a Quote</span>
                      </label>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email*
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Message*
                        </label>
                        <textarea
                          id="message"
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 min-h-[150px]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>

                  <div className="relative hidden lg:block">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-48 h-48">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-black transform rotate-45" />
                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#C4F934] transform rotate-45" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-full border-2 border-gray-300 rounded-md animate-[spin_20s_linear_infinite]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 py-12">
          <div className="grid gap-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 bg-white" />
                <span className="text-xl font-bold">Positivus</span>
              </div>
              <nav className="flex flex-wrap gap-8">
                <Link to="/about-us" className="hover:text-gray-300">
                  About us
                </Link>
                <Link to="/services" className="hover:text-gray-300">
                  Services
                </Link>
                <Link to="/use-cases" className="hover:text-gray-300">
                  Use Cases
                </Link>
                <Link to="/pricing" className="hover:text-gray-300">
                  Pricing
                </Link>
                <Link to="/blog" className="hover:text-gray-300">
                  Blog
                </Link>
              </nav>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-[#C4F934] rounded-md">
                  <span className="text-black font-bold">Contact us:</span>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>Email: info@positivus.com</p>
                  <p>Phone: 555-567-8901</p>
                  <p>Address: 1234 Main St</p>
                  <p>Moonstone City, Stardust State 12345</p>
                </div>
              </div>

              <div className="space-y-4">
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="flex-grow px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#C4F934] text-black rounded-md hover:bg-[#b3e92f] transition-colors"
                  >
                    Subscribe to news
                  </button>
                </form>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
              <p className="text-sm text-gray-400">
                © 2023 Positivus. All Rights Reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link to="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link to="#" className="text-gray-400 hover:text-white">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link to="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
              <Link
                to="/privacy-policy"
                className="text-sm text-gray-400 hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
