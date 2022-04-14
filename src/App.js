import { Routes , Route} from 'react-router-dom';
import Login from './Pages/Authentication/Login'
import SignUp from './Pages/Authentication/SignUp';
import Mockman from 'mockman-js'
import { LangingPage } from './Pages/landingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LangingPage/>} />
        <Route path="signup" element={<SignUp />} />
        <Route path="mock" element={<Mockman />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
