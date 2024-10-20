import { createFileRoute } from "@tanstack/react-router";
import "../styles/index.scss";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import HomepageTile from "../components/HomepageTile";

export const Route = createFileRoute("/")({
  component: () => <Index />,
});

function Index() {
  const background = useRef(null);

  const { contextSafe } = useGSAP({ scope: background });

  const onMouseOver = contextSafe((e, text) => {
    const targetElement = e.target;
    const title = text ? text : targetElement.querySelector("h2")?.textContent;

    gsap.to(background.current, {
      autoAlpha: 0,
      duration: 0.15,
      onComplete: () => {
        if (background.current) {
          background.current.textContent = title || "";
        }
        gsap.to(background.current, {
          autoAlpha: 1,
          duration: 0.15,
        });
      },
    });
  });

  return (
    <div className="h-dvh">
      <div className="pf-grid">
        <div className="pf-background hidden lg:block" ref={background}></div>
        <HomepageTile
          to="/works"
          className="pf-tile works"
          title="Progetti"
          onMouseOver={(e) => onMouseOver(e, "Progetti")}
        />

        <HomepageTile
          to="/about"
          className="pf-tile about"
          title="About"
          onMouseOver={(e) => onMouseOver(e, "About")}
        />

        <HomepageTile
          to="/contact"
          className="pf-tile contacts"
          title="Contatti"
          onMouseOver={(e) => onMouseOver(e, "Contatti")}
        />
      </div>
    </div>
  );
}
