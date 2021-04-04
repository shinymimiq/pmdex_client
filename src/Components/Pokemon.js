import { useState } from "react";
import "../Resources/iconfont.css";
import PMInfoCard from "./PMInfoCard";

const Pokemon = (props) => {
  const [state, setState] = useState({ full: false });

  let showPMInfoCard = () => {
    console.log("Hello");
    setState((prevState) => ({
      full: !prevState.full,
    }));
  };

  return (
    <div class="">
      <div onClick={showPMInfoCard}>
        {/* make sure pm is not null */}
        {props.pm && (
          <div className="pm_info">
            <img
              src={props.pm.sprites.front_default}
              alt={props.pm.species.name}
            ></img>
            <p>
              <em class="iconfont">&#xe625;</em>
              {props.pm.id}
            </p>
            <p>{props.pm.name}</p>
          </div>
        )}
        {state.full === true && props.pm && (
          <div className="overlay">
            <PMInfoCard pm={props.pm} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Pokemon;
