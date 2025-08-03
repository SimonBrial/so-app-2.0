
import { Database } from "lucide-react";
import HeaderSection from "../../../components/header-section";
import ContainerLayout from "../../../components/layout/container-layout";
import { Separator } from "../../../components/ui/separator";

export default function DBPage() {
  return <ContainerLayout>
      <HeaderSection icon={Database} title="Data Base" titleSection="Usuarios" />
      <Separator className="my-2.5" />
    </ContainerLayout>;
}