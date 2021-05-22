import { React } from "react";
import { useState, useEffect } from "react";

import apiGen from "../Api/apiGen";
import MovesListAllView from "../Components/MovelistView/MovesListAllView.component";
import WithSpinner from "../Components/WithSpinner.component";

const MovesListAllViewWithSpinner = WithSpinner(MovesListAllView);
const MOVE_COUNT = 826;

const promiseGenFetchMoves = (offset = 1, limit = MOVE_COUNT) => {
  const mvPromise = [];
  Array.from({ length: limit }, (_, i) => i + offset).map((i) =>
    mvPromise.push(apiGen.getMoveByName(i))
  );
  return Promise.all(mvPromise);
};

export const MovesPage = () => {
  const [moves, setMoves] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function run() {
      let res = [];
      try {
        res = await promiseGenFetchMoves();
      } catch (e) {
        console.log(e);
      }
      setMoves(res);
      setLoading(false);
    }
    run();
  }, []);

  return (
    <div className="moves-page">
      <MovesListAllViewWithSpinner moves={moves} isLoading={isLoading} />
    </div>
  );
};
