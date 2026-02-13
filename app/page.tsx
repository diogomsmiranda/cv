import { ThemeToggle } from "@/components/ThemeToggle";
import { PrintButton } from "@/components/PrintButton";
import { cvData } from "@/data/cv";

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero panel">
        <div>
          <p className="overline">Curriculum Vitae</p>
          <h1>
            {cvData.name}
            <span className="name-links">
              {cvData.githubUrl ? (
                <a
                  aria-label="GitHub profile"
                  className="icon-link"
                  href={cvData.githubUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-brands fa-github" aria-hidden="true" />
                </a>
              ) : null}
              {cvData.linkedinUrl ? (
                <a
                  aria-label="LinkedIn profile"
                  className="icon-link"
                  href={cvData.linkedinUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin" aria-hidden="true" />
                </a>
              ) : null}
            </span>
          </h1>
          <p className="role">{cvData.role}</p>
          <p className="summary">{cvData.summary}</p>
        </div>
        <div className="hero-controls">
          <ThemeToggle />
          <PrintButton />
        </div>
      </section>

      <section className="panel">
        <h2>Contact</h2>
        <div className="contact-grid">
          <a href={`mailto:${cvData.email}`}>{cvData.email}</a>
          <a href={`tel:${cvData.phone.replace(/\s+/g, "")}`}>{cvData.phone}</a>
          <span>{cvData.location}</span>
        </div>
      </section>

      <section className="panel">
        <h2>Skills</h2>
        <div className="competency-grid">
          {cvData.competencies.map((group) => (
            <article
              className={`competency-group${
                group.title.toLowerCase() === "soft skills"
                  ? " competency-group--wide"
                  : ""
              }`}
              key={group.title}
            >
              <h3>{group.title}</h3>
              <div className="chips">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2>Professional Experience</h2>
        <div className="timeline">
          {cvData.experiences.map((experience) => (
            <article
              className="timeline-item"
              key={`${experience.company}-${experience.period}`}
            >
              <div className="timeline-head">
                <h3>{experience.role}</h3>
                <span>{experience.period}</span>
              </div>
              <p className="company">{experience.company}</p>
              <ul>
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2>Education and Certifications</h2>
        <div className="education-list">
          {cvData.education.map((item) => (
            <article
              className="education-item"
              key={`${item.title}-${item.institution}`}
            >
              <h3>{item.title}</h3>
              <p>{item.institution}</p>
              {item.period ? <span>{item.period}</span> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2>Languages</h2>
        <div className="language-grid">
          {cvData.languages.map((language) => (
            <article className="language-card" key={language.name}>
              <h3>{language.name}</h3>
              <div className="language-meta">
                <p>{language.level}</p>
                {language.certificateUrl ? (
                  <a
                    className="language-link"
                    href={language.certificateUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    View certificate
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2>Extracurricular Activities</h2>
        <ul className="activity-list">
          {cvData.extracurricular.map((activity) => (
            <li key={activity}>{activity}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
