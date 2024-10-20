/* eslint-disable react/no-unescaped-entities */
import { createFileRoute, Link } from "@tanstack/react-router";
import "../../../styles/project.scss";
import BackIcon from "../../../components/BackIcon";

export const Route = createFileRoute("/works/_projects/Staz")({
  component: () => (
    <>
      <p className="page-title">
        <Link to="/works">
          <BackIcon />
        </Link>
        <span>STAZ (Don't lie)</span>
      </p>
      <div className="pf-page project">
        <h1>STAZ (Don't lie)</h1>
        <div className="space-y-12">
          <p className="subtitle">WEB-GAME</p>

          <div className="relative">
            <video
              src="/img/works/staz/portfolio-work-staz-video.mp4"
              playsInline
              muted
              loop
              autoPlay
              alt=""
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h3>Sviluppo di un Gioco Online</h3>
            </div>
            <div className="lg:w-1/2 skills">
              <p>Realizzazione Web-Game</p>
              <p>Anno: 2023/2024</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              STAZ è un gioco di Fantasy NBA che consente agli utenti di
              sfidarsi in leghe private. Gli utenti possono creare le proprie
              squadre, scambiare giocatori e organizzarli nelle formazioni per
              ogni partita.
              <br />
              <br />
              Per questo progetto, ho realizzato la veste grafica per tutte le
              sezioni del gioco, seguendo lo stile visivo del logo fornito dal
              cliente.
              <br />
              <br />
              L’obiettivo principale è stato quello di creare un’interfaccia
              utente intuitiva e facile da comprendere, nonostante la
              complessità delle informazioni e dei dati necessari per giocare.
              Questo approccio assicura che gli utenti possano navigare e
              utilizzare il gioco senza difficoltà, migliorando l'esperienza
              complessiva.
            </div>
            <div className="lg:w-1/2">
              Il gioco fantasy replica fedelmente la lega NBA reale, quindi il
              sito include diverse pagine essenziali, come:
              <br />
              <br />
              <b>• Line-up</b>: Dove gli utenti possono organizzare la
              formazione della loro squadra per ogni partita.
              <br />
              <b>• Draft</b>: Per selezionare e scambiare giocatori.
              <br />
              <b>• Statistiche</b>: Per monitorare le performance dei giocatori
              e delle squadre.
              <br />
              <b>• Playoff</b>: Per visualizzare le fasi finali della
              competizione.
            </div>
          </div>

          <img src="/img/works/staz/portfolio-work-staz-big.png" alt="" />
        </div>
      </div>
    </>
  ),
});
