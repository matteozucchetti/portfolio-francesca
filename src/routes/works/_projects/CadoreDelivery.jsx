/* eslint-disable react/no-unescaped-entities */
import { createFileRoute, Link } from "@tanstack/react-router";
import "../../../styles/project.scss";
import BackIcon from "../../../components/BackIcon";

export const Route = createFileRoute("/works/_projects/CadoreDelivery")({
  component: () => (
    <>
      <p className="page-title">
        <Link to="/works">
          <BackIcon />
        </Link>
        <span>Cadore Delivery</span>
      </p>
      <div className="pf-page project">
        <h1>Cadore Delivery</h1>
        <div className="space-y-12">
          <p className="subtitle">WEB-APP</p>

          <div className="relative">
            <video
              src="/img/works/cadore/portfolio-work-cadore-big-video.mp4"
              playsInline
              muted
              loop
              autoPlay
              alt=""
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h3>Iniziativa durante il Periodo del Covid</h3>
            </div>
            <div className="lg:w-1/2 skills">
              <p>UX/UI Web-app</p>
              <p>Anno: 2020</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              Durante il lockdown, per sostenere i commercianti locali e offrire
              un servizio utile alla comunità, io e il mio compagno (uno
              sviluppatore frontend) abbiamo ideato e realizzato una web app.
              Questa app serviva da ponte tra i venditori e i consumatori,
              fornendo un elenco di negozi che offrivano un servizio di consegna
              a domicilio.
              <br />
              <br />
              La web app permetteva agli utenti di filtrare i negozi per paese e
              tipo di attività, come "supermercato", facilitando così la ricerca
              e il contatto diretto con i negozianti in pochi passaggi. Questo
              strumento ha reso più semplice per i consumatori trovare e
              ordinare prodotti dai commercianti locali durante il periodo
              difficile del COVID-19.
            </div>
            <div className="lg:w-1/2">
              In aggiunta alla web app, abbiamo creato e gestito la pagina
              Instagram di Cadore Delivery. Abbiamo progettato il logo,
              l'immagine coordinata e tutte le grafiche per i post e le storie,
              al fine di promuovere l'iniziativa e farla conoscere a un pubblico
              più ampio. Questi sforzi di marketing visivo hanno aiutato a
              diffondere la notizia del nostro servizio e a sostenere i
              negozianti della zona.
              <br />
              <br />
              L'obiettivo del progetto era non solo fornire un utile strumento
              di collegamento durante il lockdown, ma anche creare una presenza
              online efficace per raggiungere e coinvolgere il maggior numero
              possibile di persone.
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <img
                src="/img/works/cadore/portfolio-work-cadore-small1.png"
                alt=""
              />
            </div>
            <div className="lg:w-1/2">
              <video
                src="/img/works/cadore/portfolio-work-cadore-small2-video.mp4"
                playsInline
                muted
                loop
                autoPlay
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  ),
});
