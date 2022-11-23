import './App.css'
import Header from './components/header'
import { Home } from './components/home'
import { Route, Routes } from 'react-router-dom'
import { LoginContainer } from './components/login'
import { ResultData } from './components/resultData'
import { NotFound } from './components/notFound'

function App() {
  let dateUrl = new Date()
  const day = dateUrl.getDate()
  const month = dateUrl.getMonth() + 1
  const logURL = `/${day}${month}showme`
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route exact path='/result' element={<ResultData />} />
        <Route exact path={logURL} element={<LoginContainer />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App