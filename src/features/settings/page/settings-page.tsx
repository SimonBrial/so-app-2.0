
import { Settings } from "lucide-react";
import HeaderSection from "../../../components/header-section";
import ContainerLayout from "../../../components/layout/container-layout";
import { Separator } from "../../../components/ui/separator";

export default function SettingsPage() {
  return (
    <ContainerLayout>
      <HeaderSection icon={Settings} title="Ajustes" titleSection="Perfil" />
      <Separator className="my-2.5" />
    </ContainerLayout>
  );
}
