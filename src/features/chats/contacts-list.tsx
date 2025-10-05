import Facebook from "../../components/icons/facebook";
import Instagram from "../../components/icons/instagram";
import Whatsapp from "../../components/icons/whatsapp";
import { Badge } from "../../components/ui/badge";
import { ScrollArea } from "../../components/ui/scroll-area";
import UserCard from "./user-card";

export default function ContactsList() {
  return (
    <div className=" h-full w-1/3 mr-4">
      <div className="flex justify-evenly">
        <span
          className="p-6 rounded-[8px] border border-container-border dark:border-container-border-dark cursor-pointer"
          style={{
            background:
              "linear-gradient(90deg, rgba(250, 199, 93, 0.1) 0%, rgba(253, 14, 120, 0.1) 50%, rgba(45, 104, 221, 0.1) 100%)",
          }}
        >
          <Instagram height={"3em"} width={"3em"} />
        </span>

        <span className=" bg-[rgba(31,122,242,0.1)] border border-container-border dark:border-container-border-dark cursor-pointer p-6 rounded-[8px]">
          <Facebook height={"3em"} width={"3em"} />
        </span>
        <span className="bg-[rgba(34,216,70,0.1)] border border-container-border dark:border-container-border-dark cursor-pointer p-6 rounded-[8px]">
          <Whatsapp height={"3em"} width={"3em"} />
        </span>
      </div>
      <div className="flex justify-center m-4 gap-1.5">
        <Badge className="" variant="default">
          Todos
        </Badge>
        <Badge className="" variant="default">
          Conversaciones
        </Badge>
        <Badge className="" variant="default">
          Favoritos
        </Badge>
        <Badge className="" variant="default">
          Archivados
        </Badge>
      </div>
      <div className="flex flex-col gap-4 overflow-y-auto h-[calc(100vh-250px)]">
        <ScrollArea className="h-[500px] w-full rounded-md border p-4 flex flex-col gap-2">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </ScrollArea>
      </div>
    </div>
  );
}
