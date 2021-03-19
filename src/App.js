import { Link, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const home = lazy(() => import("./pages/home"));
const test = lazy(() => import("./pages/test"));

const Fallback = () => null;
export default function App() {
  return (
    <div>
      <Link to="/home">home</Link>
      <br />
      <Link to="/test">test</Link>
      <Suspense fallback={<Fallback />}>
        <div style={{ padding: 20 }}>
          <Route path="/home" component={home} />
          <Route path="/test" component={test} />
        </div>
      </Suspense>
    </div>
  );
}
