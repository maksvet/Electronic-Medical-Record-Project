import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Header from "../src/Components/Shared/Header";
// import Footer from "../src/Components/Shared/Footer";
// import Landing from "./Components/Pages/Login";
import Login from '../src/Components/Pages/Login';
import AdminLandingPage from '../src/Components/Pages/AdminLandingPage';
import AdminLandingPage2 from '../src/Components/Pages/AdminLandingPage2';
import AdminHome from '../src/Components/Pages/AdminHome';
import CareProviderLandingPage from '../src/Components/Pages/CareProviderLandingPage';
import PrivateRoute from '../src/Components/Shared/PrivateRoute';

// import { Card } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/CareProviderLandingPage" component={CareProviderLandingPage} />
        <Route path="/AdminHome" component={AdminHome} />
        <Route path="/AdminLandingPage" component={AdminLandingPage} />
        <Route path="/AdminLandingPage2" component={AdminLandingPage2} />
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
