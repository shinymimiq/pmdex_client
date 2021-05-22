import { React } from "react";
import { useState, useEffect } from "react";

import apiGen from "../Api/apiGen";
import WithSpinner from "../Components/WithSpinner.component";

import ItemsListView from "../Components/ItemsView/ItemsListView.component";

const ItemsListViewWithSpinner = WithSpinner(ItemsListView);
const MOVE_COUNT = 826;

// TODO: Need to redesign how to fecth items
// As the items id is not continous, i.e, there is no id 672
const promiseGenFetchItems = (offset = 1, limit = MOVE_COUNT) => {
  const itPromise = [];
  Array.from({ length: limit }, (_, i) => i + offset).map((i) =>
    itPromise.push(apiGen.getItemByName(i))
  );
  return Promise.all(itPromise);
};

export const ItemsPage = () => {
  const [items, setItems] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function run() {
      let res = [];
      try {
        res = await promiseGenFetchItems();
      } catch (e) {
        console.log(e);
      }
      setItems(res);
      setLoading(false);
    }
    run();
  }, []);

  return (
    <div className="items-page">
      Hello this is Items Page
      <ItemsListViewWithSpinner items={items} isLoading={isLoading} />
    </div>
  );
};
