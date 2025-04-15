import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "FitStyle",
    year: "2024",
    title: "E-commerce - MERN Stack",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://fitstyle-frontend.vercel.app/",
    image: darkSaasLandingPage,
  },
  {
    company: "GM Tech",
    year: "2025",
    title: "Cyber Security Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://gm-tech-ten.vercel.app/",
    image: lightSaasLandingPage,
  },
  {
    company: "HYBY CONNECT",
    year: "2024",
    title: "Online Services ",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://testing-five-ecru.vercel.app/",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences"
        />

        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((projects, projectIndex) => (
            <Card
              key={projects.title}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-purple-500 to-sky-400  inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text ">
                    <span>{projects.company}</span>
                    <span>&bull;</span>
                    <span>{projects.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {projects.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col mt-4 gap-4 md:mt-5">
                    {projects.results.map((result) => (
                      <li
                        className="flex text-sm md:text-base text-white/50 gap-2 "
                        key={result.title}
                      >
                        <CheckCircleIcon className="size-5 md:size-6 text-purple-300" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={projects.link} target="_blank" rel="noreferrer">
                    <button className="bg-white mt-8 inline-flex items-center justify-center text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold">
                      <span> Visit live Site</span>
                      <ArrowUpRightIcon className="size-4 ml-2" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-lg"
                    src={projects.image}
                    alt={projects.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
