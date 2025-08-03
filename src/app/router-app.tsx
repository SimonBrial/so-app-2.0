import { Route, Switch } from "wouter";
import HomePage from "../features/home/page/home-page";
import ChatsPage from "../features/chats/page/chats-page";
import SettingsPage from "../features/settings/page/settings-page";
import DBPage from "../features/data-base/page/db-page";
import MetricsPage from "../features/metrics/page/metrics-page";

export default function RouterApp() {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path={"/metricas"} component={MetricsPage} />
        <Route path="/chats" component={ChatsPage} />
        <Route path="/db" component={DBPage} />
        <Route path="/ajustes" component={SettingsPage} />
      </Switch>
    </>
  );
}
