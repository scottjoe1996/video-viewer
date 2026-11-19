import React from "react";
import { useParams } from "react-router";

import CatalogueApi from "../apis/catalogue-api";

const api = new CatalogueApi();

const CataloguePage: React.FC = () => {
  const { "*": path = "" } = useParams();

  const catalogues = React.use(api.getCatalogue(path));

  return catalogues.map((catalogue) => (
    <p key={catalogue.directory}>{catalogue.directory}</p>
  ));
};

export default CataloguePage;
