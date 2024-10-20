/* eslint-disable react/no-unescaped-entities */
import { createFileRoute, Link } from "@tanstack/react-router";
import "../../../styles/project.scss";
import BackIcon from "../../../components/BackIcon";

export const Route = createFileRoute("/works/_projects/VeneziaDresden")({
  component: () => (
    <>
      <p className="page-title">
        <Link to="/works">
          <BackIcon />
        </Link>
        <span>Venezia Dresden</span>
      </p>
      <div className="pf-page project">
        <h1>Venezia Dresden</h1>
        <div className="space-y-12">
          <p className="subtitle">SITO WEB</p>

          <div className="relative">
            <video
              src="/img/works/venezia/portfolio-work-venezia-big.mp4"
              playsInline
              muted
              loop
              autoPlay
              alt=""
            />
            <a href="https://veneziadresden.de/" target="_blank">
              <img
                src="/img/works/venezia/portfolio-work-venezia-big-cta.svg"
                alt=""
                className="arrow"
              />
            </a>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h3>Restyling del Sito Web per Gelaterie</h3>
            </div>
            <div className="lg:w-1/2 skills">
              <p>UX/UI Sito Web</p>
              <p>Anno: 2023</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              Il cliente desiderava un restyling del sito web per riflettere
              l'aggiornamento dei nuovi menu cartacei delle gelaterie. Partendo
              da una base esistente, il progetto ha mirato a riprendere il mood
              e l’estetica dei nuovi menu, utilizzando icone, colori e
              fotografie personalizzate per dare una nuova vita al sito e
              raccontare meglio la storia delle gelaterie, che sono state aperta
              una dopo l'altra dal 1912.
              <br />
              <br />
              Il sito web è stato progettato come una pagina unica, con
              un'interfaccia intuitiva che utilizza un tabs-slider orizzontale
              per selezionare tra le quattro strutture.
            </div>
            <div className="lg:w-1/2">
              Ogni sezione dedicata a una gelateria include:
              <br />
              <br />
              • Descrizione Breve: Una panoramica informativa su ogni gelateria,
              con dettagli che mettono in luce la sua storia e le sue
              particolarità.
              <br />
              <br />
              • Informazioni Generali: Dettagli pratici come gli orari di
              apertura e altre informazioni utili per i visitatori.
              <br />
              <br />
              • Prenotazione Tavolo: Un’opzione per prenotare un tavolo
              direttamente online, facilitando l’esperienza dei clienti.
              <br />
              <br />
              Le nuove icone e i colori sono stati scelti per armonizzarsi con
              il design dei menu cartacei, mentre le foto scattate appositamente
              per il sito aiutano a creare un'atmosfera fresca e invitante.
              <br />
              <br />
              L’obiettivo era di offrire una navigazione fluida e un'esperienza
              visivamente piacevole, migliorando la presentazione delle
              gelaterie e il loro racconto storico in modo accattivante e
              moderno.
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <video
                src="/img/works/venezia/portfolio-work-venezia-small2-video.mp4"
                playsInline
                muted
                loop
                autoPlay
                alt=""
              />
            </div>
            <div className="lg:w-1/2">
              <img
                src="/img/works/venezia/portfolio-work-venezia-small2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  ),
});
