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
    <div className='pm-thumbnail'>
      {/* make sure pm is not null */}
      {pm && <img src={pm.sprites.front_default} alt={pm.species.name}></img>}
      {pm && (
        <p>
          #{pm.id} - {pm.species.name}
        </p>
      )}
    </div>
  );
};

export default Pokemon;
