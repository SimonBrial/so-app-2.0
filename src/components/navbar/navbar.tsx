import {
  MessagesSquare,
  ChartPie,
  Database,
  House,
  Bolt,
} from "lucide-react";
import IconNavbar from "./icon-navbar";
import type { IconNavbarProps } from "../../types/interface";
import { Separator } from "../ui/separator";

export default function Navbar() {
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
    <div className="flex flex-col gap-4 items-center rounded-lg bg-container dark:bg-container-dark h-full px-3 py-[3rem] border- border--red-500 w--1/6">
      {dirObj.map((item, index) => (
        <>
          <IconNavbar key={index} {...item} />
          {
            index === 0 && <Separator />
          }
        </>
      ))}
    </div>
  );
}
