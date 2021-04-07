import { useState, useEffect } from "react";
import "../Resources/iconfont.css";
import PMInfoCard from "./PMInfoCard";

import {useParams} from "react-router-dom";

import apiGen from "../Api/apiGen";

import { Link } from "react-router-dom";

const Pokemon = (props) => {
  const {pm_id} = useParams();
  // const [state, setState] = useState({ full: true });
  const [pm, setPM] = useState();

  // let showPMInfoCard = () => {
  //   console.log("Hello");
  //   setState((prevState) => ({
  //     full: !prevState.full,
  //   }));
  // };

  useEffect(() => {
    async function getPokemon() {
      try {
        let res = await apiGen.getPokemonByName(pm_id);
        console.log(res);
        setPM(res);
      } catch(e) {
        console.error(e);
      }
    }
    getPokemon();
  }, [pm_id]);

  return (
    <div class="">
      {/* <div onClick={showPMInfoCard}> */}
      <div>
        {/* make sure pm is not null */}
        {pm && (
          <Link to="/pokemon" >
            <div className="overlay">
              <PMInfoCard pm={pm} />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pokemon;
