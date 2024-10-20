/* eslint-disable react/no-unescaped-entities */
import { createFileRoute, Link } from "@tanstack/react-router";
import "../../../styles/project.scss";
import BackIcon from "../../../components/BackIcon";

export const Route = createFileRoute("/works/_projects/Zenzero")({
  component: () => (
    <>
      <p className="page-title">
        <Link to="/works">
          <BackIcon />
        </Link>
        <span>Zenzero</span>
      </p>
      <div className="pf-page project">
        <h1>Zenzero Segrate</h1>
        <div className="space-y-12">
          <p className="subtitle">SITO WEB</p>

          <div className="relative">
            <img
              src="/img/works/zenzero/portfolio-work-zenzero-big.png"
              alt=""
            />
            <a href="https://zenzerosegrate.it/" target="_blank">
              <img
                src="/img/works/zenzero/portfolio-work-zenzero-big-cta.svg"
                alt=""
                className="arrow"
              />
            </a>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h3>Creazione dell'Immagine Coordinata e del Sito Web</h3>
            </div>
            <div className="lg:w-1/2 skills">
              <p>Agenzia: Playground</p>
              <p>Anno: 2018</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              Il cliente desiderava aprire un negozio suddiviso in due aree
              distinte: una dedicata al reparto ortofrutta e l'altra adibita a
              bar, dove venivano utilizzati principalmente prodotti di origine
              vegetale.
              <br />
              <br />
              Per soddisfare queste esigenze, abbiamo realizzato un progetto
              completo che includeva sia l'immagine coordinata sia il sito web.
              Il logo, progettato per essere moderno e rappresentativo della
              filosofia del negozio, è stato utilizzato su vari supporti,
              garantendo una forte identità visiva.
              <br />
              <br />
              Il sito web, sviluppato per facilitare l'acquisto online dei
              prodotti di entrambi i reparti, offre un'esperienza utente
              intuitiva e coinvolgente. Le sezioni del sito sono state
              strutturate in modo da rispecchiare le due aree del negozio,
              permettendo agli utenti di esplorare facilmente sia l'offerta
              ortofrutticola che il menu del bar.
            </div>
            <div className="lg:w-1/2">
              Per rafforzare l'immagine coordinata, sono stati creati diversi
              gadget promozionali, come magliette personalizzate con il logo del
              negozio e una texture distintiva. Questa texture è stata
              utilizzata non solo sul sito web, ma anche all'interno del negozio
              e come grafica per i furgoni delle consegne a domicilio,
              garantendo una coerenza visiva in tutte le forme di comunicazione
              del brand.
              <br />
              <br />
              L'obiettivo del progetto era di creare un'identità forte e
              riconoscibile, capace di attirare e fidelizzare i clienti, sia
              fisicamente che online. Grazie a una strategia di design
              integrata, il negozio può ora presentarsi al pubblico con una
              veste professionale e accattivante, distinguendosi nel mercato e
              comunicando efficacemente i propri valori.
            </div>
          </div>

          <img
            src="/img/works/zenzero/portfolio-work-zenzero-small.png"
            alt=""
          />
        </div>
      </div>
    </>
  ),
});
