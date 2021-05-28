import { React } from "react";

const MovesListAllView = ({ moves }) => {
  return (
    <div className="moves-list-all">
      {moves.map((move) => {
        return (
          <div key={move.id} className="move-line flex">
            <div className="move-name">
              {move.names.find((n) => n.language.name === "zh-Hans").name}
            </div>
            <div className="move-power">{move.power}</div>
            <div className="move-pp">{move.pp}</div>
            <div className="move-accuracy">{move.accuracy}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MovesListAllView;
