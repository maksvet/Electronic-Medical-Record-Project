import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Header from "../src/Components/Shared/Header";
// import Footer from "../src/Components/Shared/Footer";
// import Landing from "./Components/Pages/Login";
import Login from '../src/Components/Pages/Login';
import AdminLandingPage from '../src/Components/Pages/AdminLandingPage';
import CareProviderLandingPage from '../src/Components/Pages/CareProviderLandingPage';
import PrivateRoute from '../src/Components/Shared/PrivateRoute';

// import { Card } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/CareProviderLandingPage" component={CareProviderLandingPage} />
        <Route exact path="/AdminLandingPage" component={AdminLandingPage} />
        <PrivateRoute path="/..........">
          <AdminLandingPage />
        </PrivateRoute>
        <PrivateRoute path="/..........">
          <CareProviderLandingPage />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
