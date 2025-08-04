import { Database } from "lucide-react";
import HeaderSection from "../../../components/header-section";
import ContainerLayout from "../../../components/layout/container-layout";
import SeparatorCustom from "../../../components/separator-custom";
import { Route, Switch, useLocation } from "wouter";
import DbCreatePage from "./create/db-create-page";
import DBList from "./db-list";

export default function DBLayout() {
  const [location] = useLocation();

  location.split("/");
  console.log(location.split("/"));

  const sections: string[] = [
    "Crear Usuario",
    "Editar Usuario",
    "Lista de Usuarios",
    "Actualizar Usuario",
  ];

  const subSectionName = () => {
    if (location.split("/").length < 3) {
      return sections[2];
    }
    if (location.split("/")[2] === "crear") {
      return sections[0];
    } else if (location.split("/")[2] === "editar") {
      return sections[1];
    } else if (location.split("/")[2] === "lista") {
      return sections[2];
    }
    return "";
  };

  return (
    <ContainerLayout>
      <HeaderSection
        fivethTitle=""
        fourthTitle=""
        subTitle=""
        icon={Database}
        title="Data Base"
        titleSection={subSectionName()}
      />
      <SeparatorCustom />
      <Switch>
        <Route path="/db" component={DBList} />
        <Route path="/db/crear" component={DbCreatePage} />
      </Switch>
    </ContainerLayout>
  );
}

{
  /* <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <div className="flex items-center group">
            <Search
              className="absolute ml-2 text-light-text dark:text-white"
              size={20}
            />
            <Input
              placeholder="Buscar usuario"
              className="w-[300px] border-1 border-container-border dark:border-container-border-dark pl-8 hover:border-branding-1 focus:border-branding-1/20 focus:outline-2 focus:outline-sky-500/40 text-light-text placeholder:text-light-text bg-container dark:bg-container-small-dark dark:text-white"
            />
          </div>
          <Button>
            <ArrowUpDown /> Sort
          </Button>
          <Button>
            <SlidersHorizontal /> Filtros
          </Button>
          <Button>
            <User /> 15 Usuarios
          </Button>
        </div>
        <Link href="/db/crear">
          <Button className="border border-branding-1 text-branding-1 hover:text-branding-3 hover:border-branding-3 transition-all dark:border-branding-1 dark:text-branding-1 dark:hover:text-branding-2">
            <UserPlus /> Crear Registro
          </Button>
        </Link>
      </div>
      <SeparatorCustom /> */
}
