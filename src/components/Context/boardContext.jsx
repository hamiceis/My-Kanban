import { useState, createContext, useContext } from 'react'

import produce from "immer";

import { fetchData } from '../../services/fetchData'

export const BoardContext = createContext({});

const data = fetchData()

export function BoardProvider({ children }) {
  const [lists, setLists] = useState(data);

   function move(fromList, toList, from, to) {   
    setLists(produce(lists, draft => {  
      const dragged = draft[fromList].tasks[from];

      draft[fromList].tasks.splice(from, 1)    
      draft[toList].tasks.splice(to, 0, dragged)  
    }))
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      {children}
    </BoardContext.Provider>
  );
}

export const useBoard = () => useContext(BoardContext)
