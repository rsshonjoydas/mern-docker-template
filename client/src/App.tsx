import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import ClientLayout from "./layout/ClientLayout";
import ServerLayout from "./layout/ServerLayout";
import routes from "./routers";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(routeProps: RouteComponentProps<any>) => {
                if (route.protected === true) {
                  return (
                    <ServerLayout name={""}>
                      <route.component {...routeProps} />
                    </ServerLayout>
                  );
                } else if (route.protected === false) {
                  return (
                    <ClientLayout name={""}>
                      <route.component {...routeProps} />
                    </ClientLayout>
                  );
                } else {
                  return <route.component {...routeProps} />;
                }
              }}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default App;
