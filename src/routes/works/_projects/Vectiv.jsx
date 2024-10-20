/* eslint-disable react/no-unescaped-entities */
import { createFileRoute, Link } from "@tanstack/react-router";
import "../../../styles/project.scss";
import BackIcon from "../../../components/BackIcon";

export const Route = createFileRoute("/works/_projects/Vectiv")({
  component: () => (
    <>
      <p className="page-title">
        <Link to="/works">
          <BackIcon />
        </Link>
        <span>Vectiv</span>
      </p>
      <div className="pf-page project">
        <h1>Vectiv</h1>
        <div className="space-y-12">
          <p className="subtitle">LANDING PAGE, THE NORTH FACE</p>

          <div className="relative">
            <video
              src="/img/works/vectiv/portfolio-work-vectiv-big-video.mp4"
              playsInline
              muted
              loop
              autoPlay
              alt=""
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h3>Lancio della Nuova Collezione Vectiv</h3>
            </div>
            <div className="lg:w-1/2 skills">
              <p>Agenzia: Playground</p>
              <p>Anno: 2024</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              Per il lancio della nuova collezione Vectiv, il cliente ci ha
              fornito una vasta gamma di materiali, inclusi video e foto, per
              descrivere al meglio le caratteristiche delle scarpe Vectiv.
              <br />
              <br />
              La pagina web è stata suddivisa in diverse sezioni, ognuna delle
              quali mette in risalto aspetti specifici delle scarpe:
              <br />
              <br />
              1. Caratteristiche della Suola: Una sezione dedicata alle
              tecnologie e ai materiali innovativi utilizzati per la suola,
              evidenziando i vantaggi in termini di performance e comfort.
              <br />
              <br />
              2. Benefici: Una panoramica sui principali benefici delle scarpe
              Vectiv, come la stabilità, il supporto e la resistenza, illustrati
              con immagini e descrizioni dettagliate.
              <br />
              <br />
              3. Tipologie di Prodotto: Una descrizione delle diverse varianti
              disponibili nella collezione, sia per la corsa che per
              l'escursionismo, con informazioni su come ogni modello è
              progettato per soddisfare esigenze specifiche.
            </div>
            <div className="lg:w-1/2">
              Nella parte finale della pagina, abbiamo dettagliato ogni singola
              parte delle scarpe, utilizzando hotspot interattivi che forniscono
              informazioni specifiche come il peso, l'altezza della suola e
              altre caratteristiche tecniche. Questi hotspot permettono agli
              utenti di esplorare in profondità il prodotto, comprendendo
              appieno le sue peculiarità.
              <br />
              <br />
              L'obiettivo nella creazione di questa pagina era di far capire
              all'utente l'unicità e l'importanza del prodotto. Per raggiungere
              questo scopo, abbiamo mantenuto una grafica pulita e lineare,
              utilizzando un colore primario dominante e sfumature di background
              che conferiscono un aspetto moderno e accattivante.
              <br />
              <br />
              Questa strategia di design non solo attira l'attenzione degli
              utenti, ma facilita anche la navigazione e l'interazione con i
              contenuti, assicurando che tutte le informazioni rilevanti siano
              facilmente accessibili e comprensibili.
            </div>
          </div>

          <video
            src="/img/works/vectiv/portfolio-work-vectiv-small-video.mp4"
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
