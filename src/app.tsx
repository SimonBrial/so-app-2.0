import Provider from "./app/provider";
import RouterApp from "./app/router-app";
import AppLayout from "./components/layout/app-layout";

function App() {
  return (
    <Provider>
      <AppLayout>
        <RouterApp />
      </AppLayout>
    </Provider>
  );
}

export default App;
