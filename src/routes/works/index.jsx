import { createFileRoute, Link } from "@tanstack/react-router";
import "../../styles/works.scss";
import BackIcon from "../../components/BackIcon";

export const Route = createFileRoute("/works/")({
  component: () => (
    <>
      <h1 className="page-title">
        <Link to="/">
          <BackIcon />
        </Link>
        <span>Progetti</span>
      </h1>
      <div className="pf-page works">
        <Link
          className="pf-tile"
          to="/works/zenzero"
          style={{ "--bg": "#A4D55C" }}
        >
          <div>
            <h2>Zenzero</h2>
            <span>SITO WEB</span>
          </div>
        </Link>
        <Link
          className="pf-tile"
          to="/works/earthweek"
          style={{ "--bg": "#15EF77" }}
        >
          <div>
            <h2>Earth Week</h2>
            <span>
              LANDING PAGE
              <br />
              THE NORTH FACE
            </span>
          </div>
        </Link>
        <Link
          className="pf-tile"
          to="/works/vectiv"
          style={{ "--bg": "#CEC9BD" }}
        >
          <div>
            <h2>Vectiv</h2>
            <span>
              LANDING PAGE
              <br />
              THE NORTH FACE
            </span>
          </div>
        </Link>
        <Link
          className="pf-tile"
          to="/works/runforthearctic"
          style={{ "--bg": "#E3D948" }}
        >
          <div>
            <h2>Run For The Arctic</h2>
            <span>
              LANDING PAGE
              <br />
              THE NORTH FACE
            </span>
          </div>
        </Link>
        <Link
          className="pf-tile"
          to="/works/veneziadresden"
          style={{ "--bg": "#3B7C88" }}
        >
          <div>
            <h2>Venezia Dresden</h2>
            <span>SITO WEB</span>
          </div>
        </Link>
        <Link
          className="pf-tile"
          to="/works/cadoredelivery"
          style={{ "--bg": "#E9415B" }}
        >
          <div>
            <h2>Cadore Delivery</h2>
            <span>WEB-APP</span>
          </div>
        </Link>
        <Link
          className="pf-tile"
          to="/works/outdoora"
          style={{ "--bg": "#E698BB" }}
        >
          <div>
            <h2>Outdoora</h2>
            <span>HOMEPAGE</span>
          </div>
        </Link>
        <Link
          className="pf-tile"
          to="/works/staz"
          style={{ "--bg": "#E82323" }}
        >
          <div>
            <h2>Staz</h2>
            <span>WEB-GAME</span>
          </div>
        </Link>
      </div>
    </>
  ),
});
