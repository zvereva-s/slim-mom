import s from "./title.module.scss";

function Title({ text, className }) {
  return <h1 className={`${s} ${s.title} ${className}`}>{text}</h1>;
}

export default Title;
