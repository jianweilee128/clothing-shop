import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import ErrorBoundary from "./components/error-boundary/error-boundary";
import NavigationBar from "./components/navigation-bar/navigation-bar.component";
import Spinner from "./components/spinner/spinner.component";

import { useAuth0 } from "./react-auth0-spa";

const HomePage = lazy(() => import("./pages/homepage/homepage"));

const CategoryPage = lazy(() => import("./pages/category/category-page"));

const CheckoutPage = lazy(() => import("./pages/checkout/checkout-page"));

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Spinner />;
  }
  return (
    <React.Fragment>
      <NavigationBar />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              match
              path={`/category/:category`}
              component={CategoryPage}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </React.Fragment>
  );
};

export default App;
