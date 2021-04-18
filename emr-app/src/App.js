import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Header from "../src/Components/Shared/Header";
// import Footer from "../src/Components/Shared/Footer";
// import Landing from "./Components/Pages/Login";
import Login from '../src/Components/Pages/Login';
import AdminCreatePatientPage from './Components/Pages/AdminCreatePatientPage';
import AdminCreateCareProviderPage from '../src/Components/Pages/AdminCreateCareProviderPage';
import AdminHome from '../src/Components/Pages/AdminHome';
import UpdatePatientPage from '../src/Components/Pages/UpdatePatientPage';
import PrivateRoute from '../src/Components/Shared/PrivateRoute';
import AdminUpdateCareProviderPage from './Components/Pages/AdminUpdateCareProviderPage';
import CareProviderHome from './Components/Pages/CareProviderHome';
import RegisteredCareProviders from './Components/Pages/RegisteredCareProviders';
import RegisteredPatients from './Components/Pages/RegisteredPatients';

// import { Card } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/UpdatePatientPage" component={UpdatePatientPage} />
        <Route path="/AdminHome" component={AdminHome} />
        <Route path="/AdminCreatePatientPage" component={AdminCreatePatientPage} />
        <Route path="/AdminCreateCareProviderPage" component={AdminCreateCareProviderPage} />
        <Route path="/AdminUpdateCareProviderPage" component={AdminUpdateCareProviderPage} />
        <Route path="/CareProviderHome" component={CareProviderHome} />
        <Route path="/RegisteredCareProviders" component={RegisteredCareProviders} />
        <Route path="/RegisteredPatients" component={RegisteredPatients} />
        <PrivateRoute path="/..........">
          <AdminCreatePatientPage />
        </PrivateRoute>
        <PrivateRoute path="/..........">
          <UpdatePatientPage />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
