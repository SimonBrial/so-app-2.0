import SeparatorCustom from "../../components/separator-custom";
import UserChat from "./user-chat";
import ContactsList from "./contacts-list";

export default function SocialMediaContainer() {
  return (
    <div className=" h-full w-full flex items-center flex-row">
      <ContactsList />
      <SeparatorCustom orientation="vertical" />
      <UserChat />
    </div>
  );
}
