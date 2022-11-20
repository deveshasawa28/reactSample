import Header from './components/header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import { LoginContainer } from './components/login'
import { Home } from './components/home'
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        {/* <Layout> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginContainer />} />
          {/* <Route exact path="/recovery-password" element={<RecoveryPassword />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        {/* </Layout> */}
      </Router>
    </div>
  );
}

export default App;
