import { BiFilter } from "react-icons/bi"
import { FaSistrix } from "react-icons/fa"
import "./styles.css"

export function Search(){
  return (
    <div className="wrapper-search">
          <button>
            <BiFilter size={24} color="white" />
            Filtrar
          </button>
          <div className="input">
            <FaSistrix size={24} />
            <input
              type="text"
              name="info"
              id="info"
              placeholder="Busque por cards, assuntos ou responsáveis..."
            />
          </div>
        </div>
  )
}