import "./styles.css";

export function Card({ title, description, tags }) {
  return (
    <>
      <div className="card">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="hash">
          {tags.map((tag,i) => (<span key={tag + i}>{tag}</span>))}
        </div>
      </div>
    </>
  );
}
