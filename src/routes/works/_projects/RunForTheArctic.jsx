/* eslint-disable react/no-unescaped-entities */
import { createFileRoute, Link } from "@tanstack/react-router";
import "../../../styles/project.scss";
import BackIcon from "../../../components/BackIcon";

export const Route = createFileRoute("/works/_projects/RunForTheArctic")({
  component: () => (
    <>
      <p className="page-title">
        <Link to="/works">
          <BackIcon />
        </Link>
        <span>Run for the Arctic</span>
      </p>
      <div className="pf-page project">
        <h1>Run for the Arctic</h1>
        <div className="space-y-12">
          <p className="subtitle">LANDING PAGE, THE NORTH FACE</p>

          <div className="relative">
            <img src="/img/works/run4/portfolio-work-run4-big.png" alt="" />
            <video
              src="/img/works/run4/portfolio-work-run4-big-video.mp4"
              playsInline
              muted
              loop
              autoPlay
              alt=""
              className="absolute w-1/2 top-1/2 left-[20px] -translate-y-1/2 rounded-[5px] lg:rounded-[20px]"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h3>Il Primo Progetto Invernale di Pau Capell</h3>
            </div>
            <div className="lg:w-1/2 skills">
              <p>Agenzia: Playground</p>
              <p>Anno: 2020</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              Il cliente ha richiesto una pagina per raccontare l'impresa
              dell'atleta Pau Capell, che ha corso 250 km nell'Artico. Questa
              sfida rappresenta non solo un traguardo personale per l'atleta, ma
              anche un modo per sensibilizzare gli utenti sul cambiamento
              climatico e sullo scioglimento dei ghiacciai.
              <br />
              <br />
              Per illustrare al meglio questa impresa, sono state create mappe
              interattive per ogni singola giornata, accompagnate da
              infografiche dettagliate. Queste infografiche mostrano i
              chilometri percorsi, la durata della corsa, la velocità del passo
              e le calorie bruciate in un ambiente caratterizzato da temperature
              estremamente basse
            </div>
            <div className="lg:w-1/2">
              Il colore giallo utilizzato in tutta la pagina è stato scelto in
              armonia con la collezione da running di quell'anno, creando un
              collegamento visivo tra l'impresa e i prodotti del cliente.
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <img
                src="/img/works/run4/portfolio-work-run4-small1.png"
                alt=""
              />
            </div>
            <div className="lg:w-1/2">
              <video
                src="/img/works/run4/portfolio-work-run4-small2-video.mp4"
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
