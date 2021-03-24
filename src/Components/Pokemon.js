import { useState, useEffect } from "react";

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
    <div>
      {/* make sure pm is not null */}
      {pm && <img src={pm.sprites.front_default} alt={pm.species.name}></img>}
      {pm && (
        <h3>
          #{pm.id} - {pm.species.name}
        </h3>
      )}
    </div>
  );
};

export default Pokemon;
