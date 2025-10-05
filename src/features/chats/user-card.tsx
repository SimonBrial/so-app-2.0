import { AtSign } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import Instagram from "../../components/icons/instagram";

export default function UserCard() {
  return (
    <div className="flex flex-row items-center gap-4 border border-container-border dark:border-container-border-dark rounded-2xl p-3 mb-2">
      <div className="relative">
        <Avatar className="w-16 h-16 ">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>SB</AvatarFallback>
        </Avatar>
        <div className="h-4 w-4 bg-[#22d846] rounded-full border border-white absolute bottom-0 right-0"></div>
      </div>
      <div className="flex flex-col mt-2 justify-between items-start w-full">
        <div className="flex flex-row justify-between items-center gap-2 w-full">
          <div className="text-xl flex justify-center items-center gap-2">
            <h1>Simon Briceño</h1>
            <span>
              <Instagram height={"1.5em"} width={"1.5em"}/>
            </span>
          </div>
          <p className="text-light-text text-xs">11:25 PM</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <span className="text-branding-1">
            <AtSign size={12} />
          </span>
          <h3 className="text-sm">Nickname</h3>
        </div>
        <p className="text-xs">
          Hola que tal?... Necesito tus servicio para...
        </p>
      </div>
    </div>
  );
}
