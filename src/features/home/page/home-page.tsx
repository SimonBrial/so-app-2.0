import { House } from "lucide-react";
import HeaderSection from "../../../components/header-section";
import ContainerLayout from "../../../components/layout/container-layout";
import SeparatorCustom from "../../../components/separator-custom";

export default function HomePage() {
  return (
    <ContainerLayout>
      <HeaderSection icon={House} title="Home" titleSection="Dashboard" />
      <SeparatorCustom />
    </ContainerLayout>
  );
}
