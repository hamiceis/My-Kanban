import "./styles/index.css";
import logo from "./assets/logo.png";

import { FaTabletAlt, FaUsers, FaRegSun} from "react-icons/fa";
import { BiFile } from "react-icons/bi";
import { Nav } from "./components/NavBar";
import { Card } from "./components/Card";
import { List } from "./components/List";
import { Header } from "./components/Header";

import { fetchData } from "./services/fetchData";
import { Search } from "./components/Search";

function App() {
  const data = fetchData();

  return (
    <div id="app">
      <div className="aside-menu">
        <img src={logo} alt="logo" />
        <Nav className="navbar">
          <li className="active">
            <FaTabletAlt size={20} color="white" />
            <p>Boards</p>
          </li>

          <li>
            <FaUsers size={20} color="white" />
            <p>Equipes</p>
          </li>

          <li>
            <BiFile size={20} color="white" />
            <p>Relátorios</p>
          </li>

          <li>
            <FaRegSun size={20} color="white" />
            <p>Ajustes</p>
          </li>
        </Nav>
      </div>
      <main>
        <Header />
        <Search />
        <div className="dashboard-main">
          <List>
            {data[0].tasks.map((info) => (
              <Card
                key={info?.id}
                title={info?.title}
                description={info?.description}
                tags={info?.categories}
              />
            ))}
          </List>

          <List>
            {data[1].tasks.map((info) => (
              <Card
                key={info?.id}
                title={info?.title}
                description={info?.description}
                tags={info?.categories}
              />
            ))}
          </List>

          <List>
            {data[2].tasks.map((info) => (
              <Card
                key={info?.id}
                title={info?.title}
                description={info?.description}
                tags={info?.categories}
              />
            ))}
          </List>
        </div>
      </main>
    </div>
  );
}

export default App;
