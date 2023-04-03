import { useEffect, useState, useRef } from "react";

import "./styles.css";

import { useDrag, useDrop } from "react-dnd";
import { useBoard } from "../Context/boardContext";

export function Card({ title, description, tags, index, listIndex }) {
  const ref = useRef();
  const { move } = useBoard();

  const [isDraggingStyle, setIsDraggingStyle] = useState(false);

  const [{ isDragging: stateDrag }, dragRef] = useDrag(() => ({
    type: "task",
    item: { index, listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [_, dropRef] = useDrop({
    accept: 'task',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex //Index da Lista Arrastável
      const targetListIndex = listIndex  //Index da Lista alvo 

      const draggedIndex = item.index  //index do card que está sendo arrastado
      const targetIndex = index // index do Card, que está por baixo do arrastavel 

      if(draggedIndex === targetIndex && draggedListIndex === targetListIndex) {   //se index do arrastavel for igual ao mesmo não faça nada, e se index da Lista for igual ao Index da Lista alvo igual também não faça nada
        return 
      }

      const targetSize = ref.current.getBoundingClientRect(); // Tamanho do Card 
      const targetCenter = (targetSize.bottom - targetSize.top) / 2; // Ponto central vertical do Card

      const draggedOffSet = monitor.getClientOffset();  // posição atual (x, y) do item arrastado na tela. 
      const draggedTop = draggedOffSet.y - targetSize.top; // posição y da tela - topo do card para o topo da tela ou card supereior 
      
      if(draggedIndex < targetIndex && draggedTop < targetCenter) { // se arrastar item ele estiver já no topo não faça nada
        return 
      }

      if(draggedIndex > targetIndex && draggedTop > targetCenter) { // se o item já estiver no bottom não faça nada
        return 
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex)

      item.index = targetIndex;  //vai atualizar o card arrastavel que ele vai receber a posição do seu Alvo
      item.listIndex = targetListIndex //
    }
  })

  dragRef(dropRef(ref))

  useEffect(() => {
    setIsDraggingStyle(stateDrag ? "dragging" : "");
  }, [stateDrag]);



  return (
    <div className={`card ${isDraggingStyle}`} ref={ref}>
      <h3 style={{ opacity: stateDrag ? 0 : 1 }}>{title}</h3>
      <p style={{ opacity: stateDrag ? 0 : 1 }}>{description}</p>
      <div className="hash" style={{ opacity: stateDrag ? 0 : 1 }}>
        {tags.map((tag, i) => (
          <span key={tag + i}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
