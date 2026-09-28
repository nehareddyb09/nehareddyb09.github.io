import { personalInfo, socialLinks } from "@/data/portfolio-data";

/**
 * ContactSection Component
 * Split layout with vertical divider
 */
export default function ContactSection() {
  const linkedIn = socialLinks.find((l) => l.platform === "LinkedIn");
  const github = socialLinks.find((l) => l.platform === "GitHub");

  return (
    <section id="contact" className="flex items-center px-8 md:px-16 lg:px-24 py-20 md:py-24">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-32 items-center">
        <div className="flex items-center justify-center lg:justify-end lg:pr-16 lg:border-r border-foreground/15">
          <h2 className="text-section">Contact</h2>
        </div>

        <div className="flex items-center lg:pl-16">
          <div className="space-y-6">
            <p className="text-large">{personalInfo.name}</p>

            <a
              href={`tel:${personalInfo.phone.replace(/[^+\d]/g, "")}`}
              className="text-body underline block"
            >
              {personalInfo.phone}
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="text-body underline block"
            >
              {personalInfo.email}
            </a>

            {personalInfo.website && (
              <a
                href={`https://${personalInfo.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body underline block"
              >
                {personalInfo.website}
              </a>
            )}

            <div className="flex gap-6 pt-2">
              {linkedIn && (
                <a
                  href={linkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body underline underline-offset-4"
                >
                  LinkedIn
                </a>
              )}
              {github && (
                <a
                  href={github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body underline underline-offset-4"
                >
                  GitHub
                </a>
              )}
            </div>

            <a
              href={personalInfo.resumeUrl}
              download
              className="text-body underline underline-offset-4 inline-block pt-2"
            >
              Download Resume ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
