import Header from './components/header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { LoginContainer } from './components/login'
import { Home } from './components/home'
import { ListData } from './components/listData'
import { NotFound } from './components/notFound'
function App () {
  return (
    <div className='App'>
      <Header />
      <Router>
        {/* <Layout> */}
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<LoginContainer />} />
          <Route exact path='/list' element={<ListData />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {/* </Layout> */}
      </Router>
    </div>
  )
}

export default App
