import React, { useState, useMemo } from "react";
import { Container } from "react-bootstrap";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { MyNav, MyFooter } from "./Componenets";
import {
  AddBark,
  Feed,
  HoofedHouse,
  Login,
  PrivateRoute,
  UserBarks,
  EditBark,
  NewUser,
} from "./Pages";
import { ApiClient } from "./Clients/apiClient";
import { UserContext, ClientContext } from "./Context";
import toastr from "toastr";
import { toastrSettings } from "./Settings";
import "toastr/build/toastr.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    window.localStorage.getItem("facebuck-token")
  );

  const client = new ApiClient(
    () => token,
    () => deleteUserToken()
  );

  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  const clientValue = { client };
  toastr.options = toastrSettings;

  const storeUserToken = (t) => {
    window.localStorage.setItem("facebuck-token", t);
    setToken(t);
  };

  const deleteUserToken = () => {
    window.localStorage.removeItem("facebuck-token");
    setToken(undefined);
    setUser(null);
    toastr.info("You have been logged out.");
  };

  return (
    <Router>
      <UserContext.Provider value={userValue}>
        <ClientContext.Provider value={clientValue}>
          <MyNav logout={() => deleteUserToken()} />
          <Container>
            <Switch>
              <Route path="/" exact render={() => <Feed />} />
              <Route path="/new-user" render={() => <NewUser />} />
              <Route path="/house" render={() => <HoofedHouse />} />
              <Route
                path="/login"
                render={() => (
                  <Login storeUserToken={(t) => storeUserToken(t)} />
                )}
              />

              <PrivateRoute>
                <Route path="/add" render={() => <AddBark />} />
                <Route path="/userbarks" render={() => <UserBarks />} />
                <Route path="/editbark" render={() => <EditBark />} />
              </PrivateRoute>

              <Route path="/">Error: 404 not found</Route>
            </Switch>
          </Container>
          <MyFooter />
        </ClientContext.Provider>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
