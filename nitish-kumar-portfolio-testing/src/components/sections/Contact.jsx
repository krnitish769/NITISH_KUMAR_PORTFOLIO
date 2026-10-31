
"use client";

import { useState } from "react";
import { motion } from "motion/react";

import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

// Contact information
const contactLinks = [
  {
    label: "Phone",
    value: "+91-6295544504",
    href: "tel:+916295544504",
    icon: Phone,
  },
  {
    label: "Email",
    value: "krnitis769@gmail.com",
    href: "mailto:krnitis769@gmail.com",
    icon: Mail,
  },
];

// Social profiles
const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/Krnitish769",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    name: "Twitter / X",
    href: "https://x.com/krnitish769/",
    icon: FaXTwitter,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/krnitish769/",
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    href: "https://github.com/krnitish769",
    icon: FaGithub,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello! I'm ${formData.name}.

Email: ${formData.email || "Not provided"}

Message:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/916295544504?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border px-6 py-28 lg:px-10 lg:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-accent">
            05 — Get In Touch
          </p>

          <h2 className="max-w-5xl font-display text-5xl leading-tight sm:text-6xl lg:text-8xl">
            Have an idea?
            <span className="block italic text-accent">
              Let&apos;s build something.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-8 text-muted">
            I&apos;m open to software development opportunities,
            collaborations and interesting projects.
            If you have something in mind, let&apos;s connect.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="mt-20 grid gap-4 md:grid-cols-2">
          {contactLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-border bg-surface/50 p-7 transition-colors duration-300 hover:border-accent/50 hover:bg-surface"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    className="text-accent"
                  />

                  <ArrowUpRight
                    size={17}
                    className="text-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                  />
                </div>

                <p className="mt-10 text-xs uppercase tracking-wider text-muted">
                  {item.label}
                </p>

                <p className="mt-3 break-all text-sm font-medium text-foreground">
                  {item.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* Direct WhatsApp Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 rounded-2xl border border-border bg-surface/50 p-7 sm:p-10"
        >
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.25em] text-accent">
              Send a message
            </p>

            <h3 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
              Let&apos;s talk about it.
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted">
              Have a project, opportunity or question?
              Leave me a message and connect with me directly on WhatsApp.
            </p>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  className="mb-2 block text-xs text-muted"
                  htmlFor="contact-name"
                >
                  Your name *
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-xs text-muted"
                  htmlFor="contact-email"
                >
                  Your email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                />
              </div>
            </div>

            <div>
              <label
                className="mb-2 block text-xs text-muted"
                htmlFor="contact-message"
              >
                Your message *
              </label>

              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me what you have in mind..."
                className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
              />
            </div>

            {/* Centered WhatsApp Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-1 hover:bg-foreground"
              >
                Send via WhatsApp
                <ArrowUpRight size={17} />
              </button>
            </div>

            <p className="text-center text-xs text-muted">
              You&apos;ll be redirected to WhatsApp to confirm and send your message.
            </p>
          </form>
        </motion.div>

        {/* Location */}
        <div className="mt-12 flex items-center justify-center gap-3 text-center text-xs text-muted">
          <MapPin size={15} className="shrink-0 text-accent" />
          <span>West Bengal, India · Open to opportunities</span>
        </div>

        {/* Social Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 border-t border-border pt-8"
        >
          <p className="text-center text-xs uppercase tracking-[0.25em] text-muted">
            Find me around the web
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface/50 text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-surface hover:text-accent"
                >
                  <Icon size={19} />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-28 flex flex-col items-center justify-between gap-5 border-t border-border pt-8 text-center sm:flex-row sm:text-left">

          <p className="font-display text-xl text-foreground">
            Made by Nitish | Made with{" "}
            <span className="inline-flex items-center text-accent">
              <Heart
                size={17}
                fill="currentColor"
                className="mx-1"
              />
            </span>
          </p>

          <p className="text-xs text-muted">
            © 2025 Nitish Kumar. All rights reserved.
          </p>

          {/* Back to Top Button */}
          <a
            href="#home"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/40 px-6 py-3 text-xs font-medium text-accent transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-background"
          >
            Back to top
            <ArrowUpRight size={15} />
          </a>

        </div>

      </div>
    </section>
  );
}
