import { Button } from "../components/ui/button";
import { ThemeProvider } from "../features/theme/theme-provider";
import "../App.css";
import { ModeToggle } from "../features/theme/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        Hello!
        <ModeToggle />
        <Button className="m-4">Click Me</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
