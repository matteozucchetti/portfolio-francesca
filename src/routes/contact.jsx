import { createFileRoute, Link } from "@tanstack/react-router";
import DownloadIcon from "../components/DownloadIcon";
import "../styles/contact.scss";
import BackIcon from "../components/BackIcon";

export const Route = createFileRoute("/contact")({
  component: () => <Contact />,
});

function Contact() {
  return (
    <>
      <h1 className="page-title">
        <Link to="/">
          <BackIcon />
        </Link>
        <span>Contatti</span>
      </h1>
      <div className="pf-page contact">
        <div className="pf-columns">
          <img className="pf-portrait" src="/img/fra.png" alt="" />

          <p className="pf-facts">
            <span>
              Mettiamoci
              <br />
              in contatto!
            </span>
          </p>
        </div>
        <div className="pf-columns">
          <p className="pf-name">FRANCESCA DA FORNO</p>
          <p className="pf-name">FRANCESCA DA FORNO</p>
        </div>
        <div className="pf-columns">
          <p className="pf-social">
            <a href="https://www.instagram.com/fior_diligi/" target="_blank">
              Instagram
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/francesca-da-forno-55312a119/"
              target="_blank"
            >
              LinkedIn
            </a>
            <br />
            <br />
            <a href="/profilo-francesca-cv-it.pdf" target="_blank">
              Curriculum
              <br />
              Vitae
              <DownloadIcon />
            </a>
          </p>
          <div>
            <p className="pf-email">
              <a href="mailto:art@francescadaforno.it">
                art@francescadaforno.it
              </a>
            </p>
            <p className="pf-phone">+39 340 100 2881</p>
          </div>
        </div>
      </div>
    </>
  );
}
