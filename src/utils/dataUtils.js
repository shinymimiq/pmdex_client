import apiGen from "../Api/apiGen";

function promiseGenFetchPokemon(offset = 1, limit) {
  const pmPromises = [];
  Array.from({ length: limit }, (_, i) => i + offset).map((i) =>
    pmPromises.push(apiGen.getPokemonByName(i))
  );
  return Promise.all(pmPromises);
}

const nationalPMDexCount = 898;

export const preparePMOverviewData = () => {
  promiseGenFetchPokemon(1, nationalPMDexCount).then((res) => {
    res = res.map((pm) => {
      return {
        id: pm.id,
        name: pm.species.name,
        type: pm.types.map((t) => t.type.name),
        imageUrl: pm.sprites.front_default,
      };
    });
    console.log(res);
    return res;
  });
};
