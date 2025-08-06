import {
  SlidersHorizontal,
  ArrowUpDown,
  UserPlus,
  Search,
  User,
} from "lucide-react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import SeparatorCustom from "../../../components/separator-custom";
import { Link } from "wouter";
import PaginationCustom from "../../../components/pagination-custom";

export default function DBList() {
  return (
    <>
      <div className="flex items-center justify-between">
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
      <SeparatorCustom />
      Here will be the list
      <SeparatorCustom />
      <div className="flex items-center justify-between">
        <Button>
          <User /> 15 Usuarios
        </Button>
        <PaginationCustom />
        {/* <div>
        </div> */}
      </div>
    </>
  );
}
