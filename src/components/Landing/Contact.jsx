// npm install @formspree/react
import React, { useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm, ValidationError } from "@formspree/react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const bottomSectionRef = useRef(null);
  const [state, handleSubmit] = useForm("xeolblva");

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (bottomSectionRef.current) {
      gsap.fromTo(
        bottomSectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bottomSectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  if (state.succeeded) {
    return (
      <section className="bg-black text-white py-16 px-4 md:px-24 text-center">
        <div className="flex flex-col items-center justify-center min-h-[40vh] max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Message Sent! 🎉</h2>
          <p className="text-gray-400 text-lg">
            Thanks for reaching out! I'll get back to you as soon as possible.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black text-white py-16 px-4 md:px-24">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Ready to discuss opportunities, collaborate on projects, or just talk
          about Java development? I'd love to hear from you. Let's connect and
          explore how we can work together.
        </p>
      </div>

      {/* Main Contact Content Container */}
      <div
        ref={sectionRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
      >
        {/* Left Column - Contact Details */}
        <div className="space-y-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="text-gray-500" size={20} />
                <span>tryambakkpanchal2004@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="text-gray-500" size={20} />
                <span>+91 7498530937</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin className="text-gray-500" size={20} />
                <span>Available for Remote Work</span>
              </li>
            </ul>
          </div>

          {/* Connect With Me */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Connect With Me</h2>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/tryambak-panchal-998182299/"
                className="p-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/Tryambak2016"
                className="p-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://mail.google.com/"
                className="p-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Availability */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Availability</h2>
            <p className="text-gray-400">
              Currently seeking full-time opportunities in Java development.
              Open to remote work and relocation for the right opportunity.
            </p>
          </div>
        </div>

        {/* Right Column - Send Me a Message Form */}
        <div className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-6">Send Me a Message</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="text-red-500 text-xs mt-1 block"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-xs mt-1 block"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Subject *
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="What's this about?"
                className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
                className="text-red-500 text-xs mt-1 block"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project, opportunity, or just say hello!"
                rows="5"
                className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-xs mt-1 block"
              />
            </div>

            {/* Send Message Button with Loader */}
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full flex items-center justify-center space-x-2 py-3 px-6 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              {state.submitting ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* New Section */}
      <div
        ref={bottomSectionRef}
        className="mt-16 w-full max-w-4xl mx-auto p-8 rounded-lg text-center border border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-4">
          Let's Build Something Amazing Together
        </h2>
        <p className="text-gray-400 mb-6">
          Whether you're looking for a dedicated team member, need help with a
          Java project, or want to discuss the latest in software development,
          I'm always excited to connect with fellow developers and potential
          collaborators.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="https://mail.google.com/"
            className="flex items-center justify-center space-x-2 py-3 px-6 bg-gray-800 text-white font-semibold rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors"
          >
            <Mail size={20} />
            <span>Email Me Directly</span>
          </a>
          <a
            href="https://www.linkedin.com/in/tryambak-panchal-998182299/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 py-3 px-6 bg-gray-800 text-white font-semibold rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors"
          >
            <Linkedin size={20} />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;