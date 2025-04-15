import ArrowIcon from "@/assets/icons/arrow-up-right.svg";

interface FooterLink {
  title: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  { title: "LinkedIn", href: "https://www.linkedin.com/in/bobbygourcode/" },
  { title: "Resume", href: "https://drive.google.com/file/d/1Dx6z8GN1o6M7IdT_P8RaU2GVLB84DRjh/view?usp=drive_link" },
  {
    title: "Instagram",
    href: "https://www.instagram.com/bobby_gour30?igsh=cXlzNX",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip">
      <div className="absolute h-[200px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-purple-500/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10" />
      <div className="container ">
        <div className="border-t border-white/10 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">© 2025. All rights reserved.</div>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : "_self"}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-flex items-center gap-1.5 text-white hover:text-purple-400 transition-colors font-semibold"
              >
                <span>{link.title}</span>
                <ArrowIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
