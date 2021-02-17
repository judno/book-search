import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./Header";
import { Saved } from "./Saved";
import { Search } from "./Search";

function Hero() {
  return (
    <div className="content text-center flex flex-col justify-center gap-y-6 h-48 text-gray-700">
      <h2 className="text-5xl font-semibold">(React) Google Books Search</h2>
      <div className="text-2xl">Search for and Save Books of Interest</div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Switch>
        <Route path="/saved">
          <Saved />
        </Route>
        <Route path="/">
          <Search />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
