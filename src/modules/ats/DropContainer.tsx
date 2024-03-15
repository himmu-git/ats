import { ITEM_TYPE } from "../shared/Contants";
import { useDrop } from "react-dnd";

const DropContainer = ({ id, name = "name", children }: Props) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ITEM_TYPE.CARD,
    drop: () => ({ id: id }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  return (
    <div id={id} className="min-h-[80vh]" ref={drop}>
      {children}
    </div>
  );
};

export default DropContainer;
