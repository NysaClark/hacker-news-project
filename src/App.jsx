import SearchForm from './Components/SearchForm'
import Stories from './Components/Stories'
import PageButtons from './Components/PageButtons';
import Loading from './Components/Loading';
import { useGlobalContext } from "./util/context";

function App() {
  const {loading} = useGlobalContext();
  return (
    <div className="App">
      <SearchForm/>
      <PageButtons/>
      {loading ? <Loading /> : <Stories />}
    </div>
  );
}

export default App;
