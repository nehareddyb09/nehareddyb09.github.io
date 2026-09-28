import { projects } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

export default function ProjectsSection() {
  return (
    <SplitSection title="Projects" id="projects">
      <div className="space-y-16 md:space-y-20">
        {projects.map((project, index) => (
          <div key={project.id}>
            {index > 0 && <hr className="border-t border-foreground/15 mb-16 md:mb-20" />}
            <div className="space-y-3">
              <p className="text-large leading-tight">{project.name}</p>
              <p className="text-body mt-4">{project.description}</p>
              <p className="text-small mt-4">
                {project.techStack.join(" • ")}
              </p>
              {(project.liveUrl || project.githubUrl) && (
                <div className="flex gap-6 mt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-small underline underline-offset-4"
                    >
                      Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-small underline underline-offset-4"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SplitSection>
  );
}
