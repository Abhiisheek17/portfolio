import { Mail, Linkedin, Dribbble, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="px-6 py-20 bg-background">
      <div className="max-w-6xl mx-auto">

        <div className="bg-[#0a0a0a] rounded-2xl border border-white/10 p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8">

          {/* Left */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              Let&apos;s <br />
              <span className="text-primary">Connect</span>
            </h2>

            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
              I&apos;m always open to conversations around design and building meaningful work.
              Connect via LinkedIn, Dribbble, or email.
            </p>
          </div>

          {/* Right — horizontal on mobile, vertical on desktop */}
          <div className="flex flex-row md:flex-col gap-6 text-white/70 text-2xl items-center justify-center md:justify-end md:pr-32">

            <a
              href="mailto:Abhisheksrivastava172001@gmail.com"
              className="hover:text-primary transition hover:scale-110"
              title="Email"
            >
              <Mail />
            </a>

            <a
              href="https://wa.me/919236900747"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition hover:scale-110"
              title="WhatsApp"
            >
              <MessageCircle />
            </a>

            <a
              href="https://www.linkedin.com/in/abhishek-srivastava-845417263/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin />
            </a>

            <a
              href="https://dribbble.com/NoOnE1701"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition hover:scale-110"
              title="Dribbble"
            >
              <Dribbble />
            </a>

          </div>

        </div>

        {/* Bottom line */}
        <div className="mt-12 text-center text-sm text-foreground/50">
          © 2026 Abhishek Srivastava
        </div>

      </div>
    </footer>
  );
}