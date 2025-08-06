import { Bolt } from "lucide-react";
import HeaderSection from "../../../components/header-section";
import ContainerLayout from "../../../components/layout/container-layout";
import { ModeToggle } from "../../theme/mode-toggle";
import SeparatorCustom from "../../../components/separator-custom";

export default function SettingsPage() {
  return (
    <ContainerLayout>
      <HeaderSection subTitle="" icon={Bolt} title="Ajustes" titleSection="Perfil" />
      <SeparatorCustom />
      <ModeToggle />
    </ContainerLayout>
  );
}
