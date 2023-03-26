import "./styles.css";
import profile from "../../assets/profil.png";
import { FaPen } from 'react-icons/fa'

export function Header() {
  return (
    <header>
      <div className="title">
        <h1>Meu Kanban</h1>
        <FaPen size={20} color="black" cursor="pointer" />
      </div>
      <img src={profile} alt="profile" />
    </header>
  );
}
