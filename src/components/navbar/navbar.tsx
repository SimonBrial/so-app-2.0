import { MessagesSquare, ChartPie, Database, House, Bolt } from "lucide-react";
import IconNavbar from "./icon-navbar";
import type { IconNavbarProps } from "../../types/interface";
import SeparatorCustom from "../separator-custom";
import { useLocation } from "wouter";

export default function Navbar() {
  const location = useLocation();

  const currentSection = location[0].split("/")[1]

  console.log(location[0].split("/")[1]);
  const dirObj: IconNavbarProps[] = [
    {
      icon: House,
      dir: "/",
      label: "Home",
    },
    {
      icon: ChartPie,
      dir: "/metricas",
      label: "Dashboard",
    },
    {
      icon: MessagesSquare,
      dir: "/chats",
      label: "Chats",
    },
    {
      icon: Database,
      dir: "/db",
      label: "Base de Datos",
    },
    {
      icon: Bolt,
      dir: "/ajustes",
      label: "Configuración",
    },
  ];
  return (
    <div className="flex flex-col gap-2 items-center rounded-lg bg-container dark:bg-container-dark h-full px-3 py-[3rem] border- border--red-500 w--1/6">
      {dirObj.map((item, index) => {
        //console.log(item.dir.split("/")[1] === currentSection);
        return (
        <div key={index}>
          <IconNavbar active={item.dir.split("/")[1] === currentSection} {...item} />
          {index === 0 && <SeparatorCustom />}
        </div>
      )
      })}
    </div>
  );
}
