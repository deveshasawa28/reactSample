import { useState } from "react"
import jwt_decode from 'jwt-decode'
import { ToastContainer } from 'react-toastify'
import { storageActions } from "../actions"
import restActions from "../actions/rest"
import NotificationMessage from "../notification/NotificationMessage"
import { useNavigate } from 'react-router-dom'

export const LoginComponent = (props) => {
  const [data, setData] = useState({ userName: '', password: '' })
  const [formLoader, setFormLoader] = useState(false)
  const navigate = useNavigate();
  const submitLoginDetail = async () => {
    setFormLoader(true)
    const text = `${data.userName}:${data.password}`
    const encoded = window.btoa(text)
    let config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Basic ${encoded}`,
      },
    }
    const loginUrl = `http://localhost:3000/auth/login/basic`
    restActions.POST(loginUrl, data, config).then((res) => {
      if (res.data) {
        const decoded = jwt_decode(res.data.token)
        const currentTime = Date.now() / 1000
        if (decoded.exp < currentTime) {
          NotificationMessage.showError('login expire')
          return false
        }
        const payload = decoded.payload
        storageActions.storeItems(
          ['isAuthenticated', 'username', 'phone', 'email', 'token', 'role', 'imgKey'],
          [
            true,
            payload['username'],
            payload['phone'],
            payload['email'],
            res.data.token,
            this.getRole(payload['roles']),
            payload['profileImageKey'],
          ],
        )
        navigate('/admin')
      }
      setFormLoader(false)
    },
      (err) => {
        setFormLoader(false)
        NotificationMessage.showError(err.message)
      },
    )
  }
  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  return (
    <div className='container mt-5  ' style={{ textAlign: '-webkit-center' }}>
      <ToastContainer />
      <div className='form-box'>
        <div className='header-form mt-3'>
          <h4 className='text-primary text-center'><i className='fa fa-user-circle' style={{ fontSize: '110px' }} /></h4>
          <div className='image' />
        </div>
        <div className='body-form'>
          <form>
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <span className='input-group-text'><i className='fa fa-user' /></span>
              </div>
              <input type='text' required value={data?.userName} name="userName" id="userName" className='form-control' placeholder='Username' onChange={inputsHandler} />
            </div>
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <span className='input-group-text'><i className='fa fa-lock' /></span>
              </div>
              <input type='text' required name="password" value={data?.password} id="password" className='form-control' placeholder='Password' onChange={inputsHandler} />
            </div>
          </form>

          {formLoader ?
            <button className='btn btn-primary btn-lg d-block w-100' disabled>
              <span className="loader"></span>
            </button>
            :
            <button type='button' className='btn btn-secondary btn-block' onClick={submitLoginDetail}>LOGIN</button>
          }
        </div>
      </div>
    </div>
  )
}
