import { React } from "react";
import { useState, useEffect } from "react";

import MovesListAllView from "../Components/MovelistView/MovesListAllView.component";
import WithSpinner from "../Components/WithSpinner.component";

import { P } from "../Api/apiGen";

const MovesListAllViewWithSpinner = WithSpinner(MovesListAllView);

export const MovesPage = () => {
  const [moves, setMoves] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Get Moves List will return an object{name:xx url:xx} lists
    P.getMovesList()
      .then((res) => {
        // We can put the request to object{url: xxx} into a promise array
        return Promise.all(
          res.results.reduce((accum, item) => {
            return [...accum, P.resource(item.url)];
          }, [])
        );
      })
      // resolve the promise array generated above
      .then((res) => {
        setMoves(res);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="moves-page">
      <MovesListAllViewWithSpinner moves={moves} isLoading={isLoading} />
    </div>
  );
};
