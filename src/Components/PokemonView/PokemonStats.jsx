export const PokemonBaseStats = ({ pm }) => {
  // extract stats locally
  const stats = {};
  let sum = 0;
  pm.stats.map((stat) => {
    stats[stat.stat.name] = stat.base_stat;
    sum += stat.base_stat;
    return stats;
  });

  const stat_line_styles = " m-1 flex justify-between ";
  const stat_bar_styles = " border w-5/6 rounded justify-self-end ";
  const stat_bar_inner_styles = "  bg-blue-300 h-full rounded";

  return (
    <div className="pokemon-base-stats-container flex-col border">
      <div className={stat_line_styles}>
        <div className="text">
          <span>HP:</span>
          <span>{stats.hp}</span>
        </div>
        <div className={stat_bar_styles}>
          <div
            className={stat_bar_inner_styles}
            style={{ width: `${(stats["hp"] * 100) / 150}%` }}
          ></div>
        </div>
      </div>
      <div className={stat_line_styles}>
        <div className="text">
          <span>ATK:</span>
          <span>{stats.attack}</span>
        </div>
        <div className={stat_bar_styles}>
          <div
            className={stat_bar_inner_styles}
            style={{ width: `${(stats["attack"] * 100) / 150}%` }}
          ></div>
        </div>
      </div>
      <div className={stat_line_styles}>
        <div className="text">
          <span>DEF:</span>
          <span>{stats.defense}</span>
        </div>
        <div className={stat_bar_styles}>
          <div
            className={stat_bar_inner_styles}
            style={{ width: `${(stats["defense"] * 100) / 150}%` }}
          ></div>
        </div>
      </div>
      <div className={stat_line_styles}>
        <div className="text">
          <span>SpA:</span>
          <span>{stats["special-attack"]}</span>
        </div>
        <div className={stat_bar_styles}>
          <div
            className={stat_bar_inner_styles}
            style={{ width: `${(stats["special-attack"] * 100) / 150}%` }}
          ></div>
        </div>
      </div>
      <div className={stat_line_styles}>
        <div className="text">
        <span>SpD:</span>
        <span>{stats["special-defense"]}</span>
      </div>
        <div className={stat_bar_styles}>
          <div
            className={stat_bar_inner_styles}
            style={{ width: `${(stats["special-defense"] * 100) / 150}%` }}
          ></div>
        </div>
      </div>
      <div className={stat_line_styles}>
        <div className="text">
        <span>SPE:</span>
        <span>{stats.speed}</span>
        </div>
        <div className={stat_bar_styles}>
          <div
            className={stat_bar_inner_styles}
            style={{ width: `${(stats["speed"] * 100) / 150}%` }}
          ></div>
        </div>
      </div>
      <div>
        <span>TOTAL:</span>
        <span>{sum}</span>
      </div>
    </div>
  );
};
