/* eslint-disable react/no-unescaped-entities */
import { createFileRoute, Link } from "@tanstack/react-router";
import "../../../styles/project.scss";
import BackIcon from "../../../components/BackIcon";

export const Route = createFileRoute("/works/_projects/EarthWeek")({
  component: () => (
    <>
      <p className="page-title">
        <Link to="/works">
          <BackIcon />
        </Link>
        <span>Earth Week</span>
      </p>
      <div className="pf-page project">
        <h1>Earth Week</h1>
        <div className="space-y-12">
          <p className="subtitle">LANDING PAGE, THE NORTH FACE</p>

          <div className="relative">
            <video
              src="/img/works/earth/portfolio-work-earth-big-video.mp4"
              playsInline
              muted
              loop
              autoPlay
              alt=""
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h3>Incentivare la Giornata della Terra</h3>
            </div>
            <div className="lg:w-1/2 skills">
              <p>Agenzia: Playground</p>
              <p>Anno: 2024</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              Per celebrare la Giornata della Terra, il cliente desiderava
              sensibilizzare il pubblico sul problema dei rifiuti a livello
              globale. In collaborazione con diverse associazioni ambientaliste
              di tutta Europa, ha organizzato numerose escursioni con
              l'obiettivo di raccogliere il maggior numero possibile di rifiuti
              e contribuire così alla protezione dell'ambiente.
              <br />
              <br />
              Il cliente ha fornito uno stile grafico di base che includeva
              sfondi con linee, colori e trattamento dei font. Inoltre, ci ha
              messo a disposizione video e foto per coinvolgere maggiormente gli
              utenti che visitano il sito.
              <br />
              <br />
              La pagina web è stata strutturata in diverse sezioni per offrire
              un'esperienza informativa e interattiva. Tra queste sezioni, vi
              sono:
              <br />
              <br />
              1. Motivazione degli Eventi: Una spiegazione dettagliata del
              motivo per cui questi eventi sono stati organizzati e della loro
              importanza per la sensibilizzazione ambientale.
              <br />
              <br />
              2. Ricerca delle Escursioni: Una tabella di ricerca che consente
              agli utenti di trovare escursioni vicino alla loro zona,
              facilitando la partecipazione.
              <br />
              <br />
              3. Descrizione dei Partner: Una presentazione delle associazioni
              ambientaliste europee che hanno aderito all'iniziativa, con
              descrizioni del loro contributo e delle loro missioni.
            </div>
            <div className="lg:w-1/2">
              Per rendere la pagina più dinamica e accattivante, sono state
              aggiunte animazioni attorno ai titoli, seguendo lo stesso stile
              grafico fornito dal cliente. Queste animazioni non solo attirano
              l'attenzione ma migliorano anche l'interazione complessiva con la
              pagina, mantenendo l'utente coinvolto e interessato.
              <br />
              <br />
              L'intera progettazione della pagina mira a creare una forte
              consapevolezza e a promuovere l'azione collettiva per affrontare
              il problema dei rifiuti, utilizzando un design visivamente
              coerente e accattivante.
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <img
                src="/img/works/earth/portfolio-work-earth-small1.png"
                alt=""
              />
            </div>
            <div className="lg:w-1/2">
              <img
                src="/img/works/earth/portfolio-work-earth-small2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  ),
});
