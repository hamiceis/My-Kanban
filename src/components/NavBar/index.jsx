import './styles.css'

export function Nav({ children }) {
  return (
    <div className="nav">
      <ul>
        {children}
      </ul>
    </div>
  );
}
