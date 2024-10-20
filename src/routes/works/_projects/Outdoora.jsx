/* eslint-disable react/no-unescaped-entities */
import { createFileRoute, Link } from "@tanstack/react-router";
import "../../../styles/project.scss";
import BackIcon from "../../../components/BackIcon";

export const Route = createFileRoute("/works/_projects/Outdoora")({
  component: () => (
    <>
      <p className="page-title">
        <Link to="/works">
          <BackIcon />
        </Link>
        <span>Outdoora</span>
      </p>
      <div className="pf-page project">
        <h1>Outdoora</h1>
        <div className="space-y-12">
          <p className="subtitle">HOMEPAGE</p>

          <div className="relative">
            <img
              src="/img/works/outdoora/portfolio-work-outdoora-big.png"
              alt=""
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h3>Sviluppo della Homepage</h3>
            </div>
            <div className="lg:w-1/2 skills">
              <p>UX/UI Homepage</p>
              <p>Anno: 2023/2024</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              Outdoora è un'agenzia pubblicitaria specializzata nella vendita di
              spazi per murales e nella creazione di progetti artistici
              coinvolgendo street artist da tutta Italia ed Europa. Per la
              realizzazione della homepage, abbiamo utilizzato le fotografie dei
              loro progetti per illustrare in modo efficace la loro proposta.
              <br />
              <br />
              La homepage è stata progettata per comunicare chiaramente la
              filosofia di Outdoora, evidenziando il legame tra la comunicazione
              di un brand e l'arte di strada. Abbiamo posto l'accento sull'idea
              che la street art non solo promuove i brand, ma contribuisce anche
              a far crescere la notorietà degli artisti, utilizzando le loro
              firme e opere d'arte come elementi distintivi.
            </div>
            <div className="lg:w-1/2">
              La pagina inizia con una presentazione chiara della missione di
              Outdoora e del valore aggiunto che offre combinando arte e
              pubblicità. Abbiamo incluso sezioni che mostrano i murales
              realizzati, il processo creativo e le collaborazioni con artisti,
              il tutto con un design visivamente accattivante e coerente con
              l'immagine del brand.
              <br />
              <br />
              L'obiettivo era di rendere la homepage un punto di incontro tra
              l'arte di strada e la comunicazione pubblicitaria, facendo
              emergere il valore unico di Outdoora nel connettere le aziende con
              artisti e creando spazi pubblicitari che ispirano e coinvolgono.
            </div>
          </div>

          <video
            src="/img/works/outdoora/portfolio-work-outdoora-small-video.mp4"
            playsInline
            muted
            loop
            autoPlay
            alt=""
          />
        </div>
      </div>
    </>
  ),
});
