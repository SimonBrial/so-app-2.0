
import { ChartPie } from "lucide-react";
import HeaderSection from "../../../components/header-section";
import ContainerLayout from "../../../components/layout/container-layout";
import SeparatorCustom from "../../../components/separator-custom";

export default function MetricsPage() {
  return (
    <ContainerLayout>
      <HeaderSection icon={ChartPie} title="Metricas" titleSection="Usuarios" />
      <SeparatorCustom />
    </ContainerLayout>
  );
}
