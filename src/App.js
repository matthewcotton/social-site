import React, { useState, useMemo } from "react";
import { Container } from "react-bootstrap";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { MyNav, MyFooter } from "./Componenets";
import { AddBark, Feed, HoofedHouse, Login, PrivateRoute } from "./Pages";
import { ApiClient } from "./Clients/apiClient";
import { UserContext } from "./Context";
import toastr from "toastr";
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

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  toastr.options = {
    closeButton: "true",
    positionClass: "toast-top-center",
    newestOnTop: "true",
    timeOut: "5000",
  };
  toastr.clear();

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
      <UserContext.Provider value={value}>
        <MyNav logout={() => deleteUserToken()} />
        <Container>
          <Switch>
            <Route path="/" exact render={() => <Feed client={client} />} />
            <Route
              path="/house"
              render={() => <HoofedHouse client={client} />}
            />
            <Route
              path="/login"
              render={() => (
                <Login
                  client={client}
                  storeUserToken={(t) => storeUserToken(t)}
                />
              )}
            />

            <PrivateRoute loggedIn={user}>
              <Route path="/add" render={() => <AddBark client={client} />} />
            </PrivateRoute>

            <Route path="/">Error: 404 not found</Route>
          </Switch>
        </Container>
        <MyFooter />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
