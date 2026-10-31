
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const sections = [
      ...navLinks.map((link) => link.id),
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navLinkClass = (id) =>
    `relative py-2 text-sm transition-colors duration-300 ${
      activeSection === id
        ? "text-accent"
        : "text-muted hover:text-foreground"
    }`;

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Brand */}
        <Link
          href="/"
          onClick={(e) => {
            closeMenu();

            if (window.location.pathname === "/") {
              e.preventDefault();
              window.history.replaceState(null, "", "/");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              setActiveSection("");
            }
          }}
          className="font-display text-2xl font-semibold tracking-wide"
        >
          N<span className="text-accent">K</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={navLinkClass(link.id)}
            >
              {link.label}

              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 h-px w-full bg-accent" />
              )}
            </a>
          ))}
        </div>

        {/* Desktop Contact */}
        <div className="hidden md:block">
          <Button
            href="#contact"
            variant={activeSection === "contact" ? "primary" : "secondary"}
            size="sm"
          >
            Let&apos;s Talk
            <ArrowUpRight size={15} />
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="rounded-lg p-2 text-foreground transition-colors hover:text-accent md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border/50 bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={closeMenu}
                className={navLinkClass(link.id)}
              >
                {link.label}

                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 h-px w-12 bg-accent" />
                )}
              </a>
            ))}

            <Button
              href="#contact"
              variant={activeSection === "contact" ? "primary" : "secondary"}
              className="w-full"
              onClick={closeMenu}
            >
              Let&apos;s Talk
              <ArrowUpRight size={15} />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
