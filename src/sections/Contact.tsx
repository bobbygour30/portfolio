"use client";
import ArrowIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactSection = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState<boolean>(false);

  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_v4re1q6", // Replace with your EmailJS Service ID
        "template_vb088mp", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "bobby30gour@gmail.com",
        },
        "RODmHo2Yux7-d9yJs" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSending(false);
          setFormData({ name: "", email: "", message: "" });
          handleClose();
          toast.success("Message sent successfully!", {
            style: {
              background: "#10B981",
              color: "#fff",
              fontWeight: "600",
            },
          });
        },
        (error: unknown) => {
          setIsSending(false);
          toast.error("Failed to send message. Please try again.", {
            style: {
              background: "#EF4444",
              color: "#fff",
              fontWeight: "600",
            },
          });
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-purple-500 to-sky-400 rounded-3xl text-center md:text-left py-8 px-10 text-gray-900 relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let's connect and
                discuss how I can help you achieve your goal.
              </p>
            </div>
            <div>
              <button
                onClick={handleOpen}
                className="text-white bg-gray-900 inline-flex items-center w-max justify-center gap-2 border border-gray-950 px-6 rounded-xl h-12 hover:bg-gray-800 transition-colors"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h3 className="text-2xl font-serif text-gray-900 mb-6">
                Get in Touch
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1 block w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Your Message"
                  ></motion.textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSending}
                  className={`w-full bg-gradient-to-r from-purple-500 to-sky-400 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all ${
                    isSending ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <Toaster position="top-right" />
    </div>
  );
};
