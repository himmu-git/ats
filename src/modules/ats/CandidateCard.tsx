import { useDrag } from "react-dnd";
import { ITEM_TYPE } from "../shared/Contants";

type Props = {};

const CandidateCard = ({ candidateData, onDrop }: Props) => {
  const { cid, name, email, phno } = candidateData;
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: ITEM_TYPE.CARD,
    item: { cid },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        onDrop(item, dropResult);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0 : 1;
  return (
    <div className="card my-4" ref={dragRef} style={{ opacity }}>
      <p className="text-bold py-2">{name}</p>
      {email && <p className="text-bold py-2">Email : {email}</p>}
      {phno && <p className="text-bold py-2">Phone no : {phno}</p>}
    </div>
  );
};

export default CandidateCard;
