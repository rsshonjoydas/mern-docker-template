import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import Layout from "./layout";
import routes from "./routers";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(routeProps: RouteComponentProps<any>) => {
                return <route.component {...routeProps} />;
              }}
            />
          ))}
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
