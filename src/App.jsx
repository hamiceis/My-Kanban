import "./styles/index.css";

import logo from "./assets/logo.png";

import { FaTabletAlt, FaUsers, FaRegSun } from "react-icons/fa";
import { BiFile } from "react-icons/bi";

import { Nav } from "./components/NavBar";
import { Card } from "./components/Card";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Button } from "./components/Button";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {  useBoard } from "./components/Context/boardContext";

export function App() {
  const { lists } = useBoard();

  return (
    <DndProvider backend={HTML5Backend}>
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
          <Button />
          <Header />
          <Search />

          <div className="dashboard-main">
            {lists.map((listItem, listIndex) => (
              <List key={listItem.title} title={listItem.title}>
                {listItem.tasks.map((info, index) => (
                  <Card
                    key={info?.id}
                    title={info?.title}
                    description={info?.description}
                    tags={info?.categories}
                    index={index}
                    listIndex={listIndex}
                  />
                ))}
              </List>
            ))}
          </div>
        </main>
      </div>
    </DndProvider>
  );
}
