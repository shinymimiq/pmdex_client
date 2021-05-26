import { React } from "react";
import { useState, useEffect } from "react";

import WithSpinner from "../Components/WithSpinner.component";
import ItemsListView from "../Components/ItemsView/ItemsListView.component";

import { P } from "../Api/apiGen";

const ItemsListViewWithSpinner = WithSpinner(ItemsListView);

export const ItemsPage = () => {
  // TODO: use Redux to presist the state
  const [items, setItems] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Get Items List will return an object{name:xx url:xx} lists
    P.getItemsList()
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
        setItems(res);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="items-page">
      Hello this is Items Page
      <ItemsListViewWithSpinner items={items} isLoading={isLoading} />
    </div>
  );
};
