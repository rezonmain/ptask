import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./views/Layout";
import Root from "./views/Root";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Layout>
          <Root />
        </Layout>
      }
    />
  )
);
