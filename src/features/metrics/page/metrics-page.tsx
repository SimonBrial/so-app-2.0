
import { ChartPie } from "lucide-react";
import HeaderSection from "../../../components/header-section";
import ContainerLayout from "../../../components/layout/container-layout";
import { Separator } from "../../../components/ui/separator";

export default function MetricsPage() {
  return (
    <ContainerLayout>
      <HeaderSection icon={ChartPie} title="Metricas" titleSection="Usuarios" />
      <Separator className="my-2.5" />
    </ContainerLayout>
  );
}
