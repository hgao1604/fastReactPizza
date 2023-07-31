import { Link } from "react-router-dom";

export default function Button({
  children,
  disabled,
  onClick,
  to,
  type = "primary",
}) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase text-stone-800  transition-colors duration-150 ease-in-out hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-2 py-1 md:px-3 md:py-2 text-xs",
    round: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block text-sm rounded-full bg-transparent border-2 border-stone-300 font-semibold uppercase text-stone-400  transition-colors duration-150 ease-in-out hover:bg-stone-300 hover: text-stone-800 focus: text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 px-3.5 py-2.5 md:px-5.5 md:py-3.5",
  };
  const className = styles[type];

  if (to)
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <Link className={className} onClick={onClick}>
        {children}
      </Link>
    );

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
