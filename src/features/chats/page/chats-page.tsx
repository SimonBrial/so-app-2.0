import { MessagesSquare } from "lucide-react";
import HeaderSection from "../../../components/header-section";
import ContainerLayout from "../../../components/layout/container-layout";
import SeparatorCustom from "../../../components/separator-custom";
import SocialMediaContainer from "../social-media-container";
// import { Route, Switch } from "wouter";

export default function ChatsPage() {
  return (
    <ContainerLayout styles="h-full flex flex-col">
      <HeaderSection
        subTitle=""
        icon={MessagesSquare}
        title="Chats"
        titleSection="Todos los usuarios"
      />
      <SeparatorCustom />
      <div className="flex-1 overflow-hidden">
        <SocialMediaContainer />
      </div>

      {/* <Switch>
        <Route path="/db" component={DBList} />
        <Route path="/db/crear" component={DbCreatePage} />
      </Switch> */}


    </ContainerLayout>
  );
}
