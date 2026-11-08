import React from "react";

import { useParams } from "react-router";

const CataloguePage: React.FC = () => {
  const { "*": path } = useParams();

  return <div>{path}</div>;
};

export default CataloguePage;
