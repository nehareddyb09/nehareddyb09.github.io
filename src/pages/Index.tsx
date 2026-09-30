import {
  personalInfo,
  experience,
  projects,
  education,
  socialLinks,
} from "@/data/portfolio-data";

const skills = personalInfo.skills.split(", ").filter(Boolean);

const socialUrl = (platform: string) =>
  socialLinks.find((s) => s.platform === platform)?.url ?? "#";

const emailLink = socialLinks.find((s) => s.platform === "Email")?.url ?? `mailto:${personalInfo.email}`;

function ExperienceTile({
  company,
  role,
  period,
  description,
  stat,
  statLabel,
}: {
  company: string;
  role: string;
  period: string;
  description: string;
  stat: string;
  statLabel: string;
}) {
  return (
    <article className="col-span-1 md:col-span-3 bg-card/10 border border-primary/10 rounded-3xl p-8 transition-colors hover:border-primary/40">
      <div className="flex justify-between items-start mb-6 gap-4">
        <div>
          <h3 className="font-display text-lg font-semibold text-white">{company}</h3>
          <p className="text-sm text-primary mt-0.5">{role}</p>
          <p className="text-xs font-mono text-muted-foreground mt-1">{period}</p>
        </div>
        <div className="text-right shrink-0">
          <div className="text-2xl font-display font-semibold text-white">{stat}</div>
          <div className="text-[10px] uppercase tracking-tight text-muted-foreground mt-0.5">
            {statLabel}
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </article>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans p-4 md:p-12 lg:p-20">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-min">

        {/* Header block */}
        <header className="col-span-1 md:col-span-4 lg:col-span-4 bg-card/20 border border-primary/30 rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 text-xs font-mono text-primary/40">
            EST // 2024
          </div>
          <div>
            <p className="font-display tracking-[0.2em] uppercase text-xs text-primary mb-2">
              {personalInfo.title}
            </p>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-none">
              {personalInfo.name}
              <span className="text-primary">.</span>
            </h1>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs uppercase tracking-widest text-primary">
              {personalInfo.location.city}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
        </header>

        {/* About block */}
        <section className="col-span-1 md:col-span-2 lg:col-span-2 bg-card/10 border border-primary/10 rounded-3xl p-8 flex flex-col justify-center">
          <h2 className="font-display text-white text-xl leading-snug mb-4">
            Engineering data pipelines with 4+ years of precision.
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {personalInfo.bio.split("\n\n")[0]}
          </p>
        </section>

        {/* Experience tiles */}
        <ExperienceTile
          company={experience[0].company}
          role={experience[0].role}
          period="2024 — Present"
          description={experience[0].description}
          stat="ADF"
          statLabel="Ingestion at scale"
        />
        <ExperienceTile
          company={experience[1].company}
          role={experience[1].role}
          period="2022 — 2023"
          description={experience[1].description}
          stat="−25%"
          statLabel="Reconciliation issues"
        />

        {/* Skills block */}
        <section className="col-span-1 md:col-span-2 lg:col-span-2 bg-primary rounded-3xl p-8 text-background">
          <h2 className="font-display font-bold mb-4 uppercase tracking-wider text-sm">
            Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-background text-foreground rounded text-[10px] font-mono"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects grid */}
        <section className="col-span-1 md:col-span-4 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-card/10 border border-primary/10 rounded-3xl p-6 flex flex-col justify-between transition-colors hover:border-primary/40"
            >
              <div>
                <h3 className="font-display text-white mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-mono text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 text-xs font-mono text-primary">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:underline">
                    Live ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:underline">
                    GitHub ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </section>

        {/* Education tile */}
        <section className="col-span-1 md:col-span-3 bg-card/10 border border-primary/10 rounded-3xl p-8">
          <h2 className="font-display text-primary uppercase tracking-widest text-xs mb-6">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline gap-4">
                  <h3 className="font-display text-white font-semibold">{edu.institution}</h3>
                  <span className="text-xs font-mono text-muted-foreground shrink-0">
                    {edu.startYear} — {edu.endYear}
                  </span>
                </div>
                <p className="text-sm text-foreground mt-1">
                  {edu.degree} · {edu.field}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{edu.location}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact tile */}
        <section className="col-span-1 md:col-span-3 bg-card/10 border border-primary/10 rounded-3xl p-8 flex flex-col justify-between gap-6">
          <div>
            <h2 className="font-display text-primary uppercase tracking-widest text-xs mb-6">
              Connect
            </h2>
            <div className="grid grid-cols-1 gap-3 text-sm">
              <a href={socialUrl("LinkedIn")} target="_blank" rel="noreferrer" className="text-foreground hover:text-white transition-colors">
                LinkedIn <span className="text-muted-foreground">/ {socialLinks.find((s) => s.platform === "LinkedIn")?.username}</span>
              </a>
              <a href={socialUrl("GitHub")} target="_blank" rel="noreferrer" className="text-foreground hover:text-white transition-colors">
                GitHub <span className="text-muted-foreground">/ {socialLinks.find((s) => s.platform === "GitHub")?.username}</span>
              </a>
              <a href={emailLink} className="text-foreground hover:text-white transition-colors">
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone.replace(/[^+\d]/g, "")}`} className="text-foreground hover:text-white transition-colors">
                {personalInfo.phone}
              </a>
              <span className="text-foreground">{personalInfo.website}</span>
            </div>
          </div>
          <a
            href={personalInfo.resumeUrl}
            download
            className="self-start px-6 py-2 bg-primary/10 border border-primary text-primary rounded-full text-xs font-bold uppercase tracking-widest transition-colors hover:bg-primary hover:text-background"
          >
            Resume.pdf ↓
          </a>
        </section>

      </div>

      <footer className="mx-auto max-w-6xl mt-6 text-center text-xs font-mono text-muted-foreground">
        © {new Date().getFullYear()} {personalInfo.name} — built with data in mind
      </footer>
    </div>
  );
}
