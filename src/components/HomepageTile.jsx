/* eslint-disable react/prop-types */
import { Link } from "@tanstack/react-router";

export default function HomepageTile({ title, to, className, onMouseOver }) {
  return (
    <Link to={to} className={className} onMouseOver={onMouseOver}>
      <h2>{title}</h2>
    </Link>
  );
}
