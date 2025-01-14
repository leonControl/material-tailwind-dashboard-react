import { Routes, Route } from "react-router-dom";
import {
  Sidenav,
  DashboardNavbar,
} from "@/components/layout";
import routes from "@/routes";
import { useMaterialTailwindController } from "@/context";

export function Gestor() {
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "dark" ? "/img/logo-sat.png" : "/img/logo-sat-dark.png"
        }
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />

        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "gestor" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
      </div>
    </div>
  );
}

Gestor.displayName = "/src/layouts/gestor";

export default Gestor;
