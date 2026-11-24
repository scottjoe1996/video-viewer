import React from "react";
import { NavLink, Outlet, useParams } from "react-router";
import { ChevronRight } from "lucide-react";

const Breadcrumb: React.FC<{ current?: boolean; path: string; to: string }> = ({
  current = false,
  path,
  to,
}) => {
  {
    return current ? (
      <span aria-current>{path}</span>
    ) : (
      <NavLink
        className="hover:text-white focus:text-white focus:outline-none"
        to={to}
      >
        {path}
      </NavLink>
    );
  }
};

const CatalogueLayout: React.FC = () => {
  const { "*": path } = useParams();

  const pathSegments = path ? path.split("/") : [];

  return (
    <>
      <nav className="mb-2">
        <ol className="flex items-center text-gray-400">
          <li>
            <Breadcrumb
              to="/catalogue"
              path="Home"
              current={pathSegments.length === 0}
            />
          </li>
          {pathSegments.map((path, index) => {
            const isLast = pathSegments.length - 1 === index;

            return (
              <li key={path} className="inline-flex items-center">
                <ChevronRight />
                <Breadcrumb
                  to={`/catalogue/${pathSegments.slice(0, index + 1).join("/")}`}
                  path={path}
                  current={isLast}
                />
              </li>
            );
          })}
        </ol>
      </nav>
      <Outlet />
    </>
  );
};

export default CatalogueLayout;
