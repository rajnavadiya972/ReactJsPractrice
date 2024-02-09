import './App.css';
import ApiFetch from './component/ApiFetch';
import ApiAxios from './component/ApiAxios';
import 'bootstrap/dist/css/bootstrap.min.css';
import TempClassComp from './component/TempClassComp';
import CustomHookApi from './component/CustomHookApi';
import Counter from './component/Counter';
import DataProvider from './context/countContext';

function App() {
  return (
    <>
      {/* <ApiFetch /> */}
      {/* <ApiAxios /> */}
      {/* <TempClassComp /> */}
      {/* <CustomHookApi /> */}
      <DataProvider>
        <Counter />
      </DataProvider>
    </>
  );
}

export default App;
