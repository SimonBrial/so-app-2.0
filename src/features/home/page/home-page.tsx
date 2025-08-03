import { Bolt } from "lucide-react";
import HeaderSection from "../../../components/header-section";
import ContainerLayout from "../../../components/layout/container-layout";
import { Separator } from "../../../components/ui/separator";

export default function HomePage() {
  return (
    <ContainerLayout>
      <HeaderSection icon={Bolt} title="Home" titleSection="Dashboard" />
      <Separator className="my-2.5" />
    </ContainerLayout>
  );
}
