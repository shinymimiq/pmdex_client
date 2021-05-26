import { React } from "react";

const ItemsListView = ({ items }) => {
  return (
    <div className="items-view">
      {items.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

export default ItemsListView;
