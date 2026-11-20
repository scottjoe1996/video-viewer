import React from "react";
import { NavLink, useParams } from "react-router";
import { Folder, SquarePlay } from "lucide-react";

import CatalogueApi from "../apis/catalogue-api";

const api = new CatalogueApi();

const CatalogueCard: React.FC<{
  icon: React.ComponentType<any>;
  title: string;
}> = ({ icon: Icon, title }) => (
  <li className="rounded shadow-md bg-lime-400 shadow-lime-400 ">
    <NavLink
      className="rounded p-2 inline-block bg-lime-700 text-white transition-transform hover:bg-lime-600 hover:-translate-y-0.5 focus:-translate-y-0.5 focus:outline-none"
      to={title}
    >
      <Icon className="inline mr-2" />
      {title}
    </NavLink>
  </li>
);

const CataloguePage: React.FC = () => {
  const { "*": path = "" } = useParams();

  const catalogues = React.use(api.getCatalogue(path));

  return (
    <nav>
      <ul className="flex gap-4">
        {catalogues.map((catalogue) => {
          if (catalogue.type === "folder") {
            return (
              <CatalogueCard
                key={catalogue.directory}
                icon={Folder}
                title={catalogue.directory}
              />
            );
          }

          return (
            <CatalogueCard
              key={catalogue.directory}
              icon={SquarePlay}
              title={catalogue.directory}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default CataloguePage;
