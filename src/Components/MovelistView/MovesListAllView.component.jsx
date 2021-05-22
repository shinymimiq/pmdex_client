import { React } from "react";

const MovesListAllView = ({ moves }) => {
  return (
    <div className="moves-list-all">
      {moves.map((move) => {
        return (
          <div key={move.id} className="move-line">
            {move.name} - {move.power} - {move.pp} - {move.accuracy}%
          </div>
        );
      })}
    </div>
  );
};

export default MovesListAllView;
