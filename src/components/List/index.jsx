import "./styles.css"


export function List({title,  children }) {
  return (
    <div className="wrapper-card" >
      <h2>{title}</h2>
      {children}
    </div>
  );
}
