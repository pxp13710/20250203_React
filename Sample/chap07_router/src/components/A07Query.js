// npm i query-string
import React from "react";
import { product } from './data/product'

function QueryComp() {
  return (
    <div>
      <h3>Query</h3>
      <br />

      <div>
        pathname: <br />
        search: <br />
        hash:
      </div>
      <br />

      <div>
        Name: <br />
        Age: <br />
        Address:
      </div>
      <br />

      <div>
        ID: <br />
        NAME: <br />
        CATEGORY:
      </div>
    </div>
  );
};
export default QueryComp;
