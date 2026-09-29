import { personalInfo } from "@/data/portfolio-data";

/**
 * HeaderSection Component
 * Split name layout with centered image
 */
export default function HeaderSection() {
  const currentYear = new Date().getFullYear();
  
  return (
    <section className="flex items-center justify-center px-8 md:px-16 lg:px-24 pt-24 pb-20 md:pt-28 md:pb-24">
      <div className="w-full max-w-7xl text-center">
        <p className="text-tiny tracking-widest mb-12 md:mb-16">{personalInfo.title}</p>
        <h1 className="text-display lg:text-[9rem] leading-none font-light lg:font-normal">
          {personalInfo.name}
        </h1>
        <p className="text-small mt-16 md:mt-20">{currentYear}</p>
      </div>
    </section>
  );
}
