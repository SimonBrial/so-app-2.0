import {
  MessagesSquare,
  ChartPie,
  Database,
  Settings,
  User,
} from "lucide-react";
import IconNavbar from "./icon-navbar";
import type { IconNavbarProps } from "../../types/interface";
import { Separator } from "../ui/separator";

export default function Navbar() {
  const dirObj: IconNavbarProps[] = [
    {
      icon: User,
      dir: "/",
      label: "Usuario",
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
      icon: Settings,
      dir: "/ajustes",
      label: "Configuración",
    },
  ];
  return (
    <div className="flex flex-col gap-4 items-center rounded-lg bg-container h-full px-3 py-[3rem] border- border--red-500 w--1/6">
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
