
import { Bolt } from "lucide-react";
import HeaderSection from "../../../components/header-section";
import ContainerLayout from "../../../components/layout/container-layout";
import { Separator } from "../../../components/ui/separator";

export default function ChatsPage() {
  return (
    <ContainerLayout>
      <HeaderSection icon={Bolt} title="Chats" titleSection="Todos los usuarios" />
      <Separator className="my-2.5" />
    </ContainerLayout>
  );
}
