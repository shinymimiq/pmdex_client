import { useState, useEffect } from "react";
import "../Resources/iconfont.css"

const Pokemon = ({ pmName, P }) => {
  const [pm, setPM] = useState(null);

  useEffect(() => {
    let res;
    (async () => {
      try {
        res = await P.getPokemonByName(pmName);
      } catch (e) {
        console.log(e);
      }
      setPM(res);
    })();
  }, [P, pmName]);

  return (
    <div className='pm-thumbnail'>
      {/* make sure pm is not null */}
      {pm && <img src={pm.sprites.front_default} alt={pm.species.name}></img>}
      {pm && (
        <div>
        <p>
        <em class="iconfont">&#xe625;</em>{pm.id}
        </p>
        <p>
          {pm.species.name}
        </p>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
