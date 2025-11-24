import { HelloComp } from "./components/Hello";
import { withAuth } from "./components/withAuth";
import "./styles.scss";


const WithAuthComp = withAuth(HelloComp)

const App = () => {
  return <div className="app"><WithAuthComp/></div>;
};

export default App;
