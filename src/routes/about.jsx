import { createFileRoute, Link } from "@tanstack/react-router";
import "../styles/about.scss";
import BackIcon from "../components/BackIcon";

export const Route = createFileRoute("/about")({
  component: () => <About />,
});

function About() {
  return (
    <>
      <h1 className="page-title">
        <Link to="/">
          <BackIcon />
        </Link>
        <span>About</span>
      </h1>
      <div className="pf-page about">
        <div className="pf-columns">
          <img className="pf-portrait" src="/img/fra.png" alt="" />

          <p className="pf-facts">
            <span>
              Senior Visual &<br />
              UI Designer
            </span>
          </p>
        </div>
        <div className="pf-columns">
          <p className="pf-name">FRANCESCA DA FORNO</p>
          <p className="pf-name">FRANCESCA DA FORNO</p>
        </div>
        <div className="pf-columns">
          <div className="pf-body sticky">
            <p>
              Ciao! Sono Francesca, una Visual & UI Designer con oltre 14 anni
              di esperienza.
              <br />
              <br />
              Realizzo landing page d'impatto, guido iniziative digitali e
              organizzo progetti di squadra. Mi assicuro che i clienti siano
              coinvolti in ogni fase della realizzazione delle loro idee e
              contenuti grafici.
              <br />
              <br />
              Eccello nella risoluzione dei problemi, nella traduzione delle
              idee dei clienti in grafiche ad hoc per loro, nella comunicazione
              efficace, nel lavoro di squadra e nella promozione della
              creatività.
              <br />
              <br />
              Amo praticare sport, viaggiare, leggere, disegnare e guardare film
              fantasy. Questi hobby mi forniscono nuove idee ed energia per il
              mio lavoro. Il mio percorso evidenzia la mia passione e dedizione
              per il design.
            </p>
          </div>
          <p className="pf-facts">
            <span className="pf-heading">SKILLS</span>
            <span>E-commerce</span>
            <span>Landing Pages</span>
            <span>Email Campaigns</span>
            <span>Wireframing</span>
            <span>Brand Identity</span>
            <span>Design Systems</span>
            <span className="pf-heading mt-12">TOOLS</span>
            <span>Figma</span>
            <span>Photoshop</span>
            <span>Illustrator</span>
            <span>Premiere</span>
            <span>XD</span>
            <span>InDesign</span>
            <span>AfterEffects</span>
          </p>
        </div>
        <div className="pf-images">
          <div className="col-grid">
            <div className="col-1">
              <img src="/img/about/portfolio-about-photo1.png" alt="" />
              <img src="/img/about/portfolio-about-photo5.png" alt="" />
            </div>
            <div className="col-2">
              <img src="/img/about/portfolio-about-photo2.png" alt="" />
              <img src="/img/about/portfolio-about-photo3.png" alt="" />
              <img src="/img/about/portfolio-about-photo6.png" alt="" />
            </div>
            <div className="col-1">
              <img src="/img/about/portfolio-about-photo4.png" alt="" />
              <img src="/img/about/portfolio-about-photo7.png" alt="" />
            </div>
          </div>
          <div className="col-3">
            <img src="/img/about/portfolio-about-photo8.png" alt="" />
            <img src="/img/about/portfolio-about-photo9.png" alt="" />
            <img src="/img/about/portfolio-about-photo10.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
