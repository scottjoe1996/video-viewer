import React from "react";
import { NavLink, useParams } from "react-router";
import { Folder, SquarePlay } from "lucide-react";

import CatalogueApi from "../apis/catalogue-api";

const api = new CatalogueApi();

const CatalogueCard: React.FC<{
  icon: React.ComponentType<any>;
  title: string;
  to: string;
}> = ({ icon: Icon, title, to }) => (
  <li className="rounded shadow-md bg-lime-400 shadow-lime-400 ">
    <NavLink
      className="rounded p-2 inline-block bg-lime-700 text-white transition-transform hover:bg-lime-600 hover:-translate-y-0.5 focus:bg-lime-600 focus:-translate-y-0.5 focus:outline-none"
      to={to}
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
                to={catalogue.directory}
              />
            );
          }

          return (
            <CatalogueCard
              key={catalogue.directory}
              icon={SquarePlay}
              title={catalogue.directory}
              to={`/video/${path}/${catalogue.directory}`}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default CataloguePage;
