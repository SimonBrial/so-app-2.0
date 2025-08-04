import { Route, Switch } from "wouter";
import HomePage from "../features/home/page/home-page";
import ChatsPage from "../features/chats/page/chats-page";
import SettingsPage from "../features/settings/page/settings-page";
import DBLayout from "../features/data-base/page/db-layout";
import MetricsPage from "../features/metrics/page/metrics-page";

export default function RouterApp() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path={"/metricas"} component={MetricsPage} />
      <Route path="/chats" component={ChatsPage} />
      <Route path="/db" component={DBLayout} />
      <Route path="/db/crear" component={DBLayout} />
      <Route path="/ajustes" component={SettingsPage} />
    </Switch>
  );
}
