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
    accept: "task",
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffSet = monitor.getClientOffset();
      const draggedTop = draggedOffSet.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  dragRef(dropRef(ref));

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
