
import { MessagesSquare } from "lucide-react";
import HeaderSection from "../../../components/header-section";
import ContainerLayout from "../../../components/layout/container-layout";
import SeparatorCustom from "../../../components/separator-custom";

export default function ChatsPage() {
  return (
    <ContainerLayout>
      <HeaderSection subTitle="" icon={MessagesSquare} title="Chats" titleSection="Todos los usuarios" />
      <SeparatorCustom />
    </ContainerLayout>
  );
}
