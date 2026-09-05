import { Link } from "@tanstack/react-router";
import { Check, Plus } from "lucide-react";
import { useState } from "react";
import { EXAMPLES, FAQ, INCLUDED, SERVICES, SITE, STEPS } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/site/contact-form";
import { Hero } from "@/components/home/hero";
import { Pic } from "@/components/site/pic";
import { SectionLink } from "@/components/site/section-link";

export function HomePage({ defaultSubject = "" }: { defaultSubject?: string }) {
  return (
    <div className="home-refresh">
      <Hero />
      <Services />
      <Examples />
      <Process />
      <Faq />
      <Contact defaultSubject={defaultSubject} />
    </div>
  );
}

function Services() {
  const main = SERVICES.find((s) => s.featured);
  const rest = SERVICES.filter((s) => !s.featured);
  if (!main) return null;
  return (
    <section id="priser" className="home-pricing" aria-labelledby="pricing-title">
      <div className="home-container">
        <div className="home-section-head">
          <h2 id="pricing-title">
            Tydliga priser.
            <br />
            Inga överraskningar.
          </h2>
          <p>
            Hemsida från 9 900 kr och webbdrift 1 990 kr/år. Övrig hjälp köper du bara när du
            behöver den.
          </p>
        </div>
        <div className="home-pricing-grid">
          <article className="home-main-offer">
            <h3>{main.name}</h3>
            <p className="home-offer-price">
              <span>Från</span> {main.price}
            </p>
            <p className="home-meta">exkl. moms</p>
            <p>{main.description}</p>
            <h4>Det här ingår</h4>
            <ul className="home-included">
              {INCLUDED.map((item) => (
                <li key={item}>
                  <Check size={20} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="xl" variant="ink">
              <SectionLink section="contact" search={{ amne: main.subject }}>
                {main.cta}
              </SectionLink>
            </Button>
          </article>
          <div className="home-extra-services">
            {rest.map((s) => (
              <article key={s.id}>
                <h3>{s.name}</h3>
                {"price" in s ? (
                  <p className="home-service-price">
                    {s.price}
                    <span> / år</span>
                  </p>
                ) : (
                  <ul className="home-rates">
                    {s.rates.map((rate) => (
                      <li key={rate}>{rate}</li>
                    ))}
                  </ul>
                )}
                <p className="home-meta">exkl. moms</p>
                <p>{s.description}</p>
                {"note" in s && <p className="home-meta">{s.note}</p>}
                {"cta" in s && (
                  <SectionLink
                    section="contact"
                    search={{ amne: s.subject }}
                    className="home-text-link"
                  >
                    {s.cta}
                  </SectionLink>
                )}
              </article>
            ))}
            <aside className="home-ownership">
              <h3>Din hemsida är din.</h3>
              <p>
                Domän, bilder och innehåll är dina. Vi kan sköta driften, men du är inte inlåst.
                Vill du flytta hemsidan senare går det.
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function Examples() {
  const [selected, setSelected] = useState<string>(EXAMPLES[0].slug);
  const example = EXAMPLES.find((item) => item.slug === selected) ?? EXAMPLES[0];
  return (
    <section id="exempel" className="home-examples" aria-labelledby="examples-title">
      <div className="home-container">
        <div className="home-section-head">
          <h2 id="examples-title">
            Olika företag.
            <br />
            Olika hemsidor.
          </h2>
          <p>
            Utforska våra exempelsidor och se vad som passar din verksamhet. Det här är
            demonstrationer, inte kunduppdrag.
          </p>
        </div>
        <div className="home-example-grid">
          <div className="home-example-picker">
            <label htmlFor="home-example-select">Välj bransch</label>
            <select
              id="home-example-select"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              {EXAMPLES.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </select>
            <div className="home-example-buttons" role="group" aria-label="Välj bransch">
              {EXAMPLES.map((item) => (
                <button
                  key={item.slug}
                  type="button"
                  aria-pressed={selected === item.slug}
                  aria-controls="home-example-preview"
                  onClick={() => setSelected(item.slug)}
                >
                  <span>{item.name}</span>
                  <span aria-hidden="true">{selected === item.slug ? "−" : "+"}</span>
                </button>
              ))}
            </div>
            <p className="home-meta">
              Varje exempel har sin egen design, struktur och känsla. Öppna sidan för att prova den.
            </p>
          </div>
          <figure id="home-example-preview" className="home-example-preview">
            <a
              href={`/${example.slug}`}
              className="home-example-image"
              aria-label={`Öppna exempelsidan ${example.brand}`}
            >
              <Pic
                key={example.slug}
                src={example.image}
                alt={`Bild från exempelsidan ${example.brand} för ${example.name.toLowerCase()}`}
                width={960}
                height={640}
                className="home-example-photo"
              />
            </a>
            <figcaption>
              <div aria-live="polite" aria-atomic="true">
                <h3>{example.brand}</h3>
                <p>{example.blurb}</p>
              </div>
              <a href={`/${example.slug}`} className="home-text-link">
                Öppna exempelsidan
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="home-process" aria-labelledby="process-title">
      <div className="home-container home-process-grid">
        <div className="home-process-intro">
          <h2 id="process-title">
            Från första kontakt
            <br />
            till färdig hemsida.
          </h2>
          <p>
            Du behöver varken kunna koda eller ha allt material klart. Vi tar det steg för steg.
          </p>
          <p>Logotyp, foton och några rader om vad du gör räcker för att börja.</p>
          <Link to="/process" className="home-text-link">
            Se innehållsguiden
          </Link>
        </div>
        <ol className="home-steps">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <span className="home-step-number" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="home-faq" aria-labelledby="faq-title">
      <div className="home-container">
        <h2 id="faq-title">Bra att veta innan du börjar.</h2>
        <div className="home-faq-list">
          {FAQ.map((item) => (
            <details key={item.q}>
              <summary>
                <span>{item.q}</span>
                <Plus size={22} aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ defaultSubject }: { defaultSubject: string }) {
  return (
    <section id="contact" className="home-contact" aria-labelledby="contact-title">
      <div className="home-container home-contact-grid">
        <div className="home-contact-copy">
          <h2 id="contact-title">
            Vad kan vi
            <br />
            hjälpa dig med?
          </h2>
          <p>
            Oavsett om du funderar på en ny hemsida, vill göra en ändring eller bara har en fråga är
            du välkommen att höra av dig.
          </p>
          <p>
            Börja med ett mejl eller några rader i formuläret. Berätta vad du behöver, så hjälper vi
            dig vidare.
          </p>
          <a href={`mailto:${SITE.email}`} className="home-contact-email">
            {SITE.email}
          </a>
          <p className="home-meta">Bas i Stockholm. Vi bygger för hela Sverige.</p>
        </div>
        <div className="home-contact-form">
          <ContactForm defaultSubject={defaultSubject} />
        </div>
      </div>
    </section>
  );
}
