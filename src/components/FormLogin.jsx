import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  setToken,
  setisAuthenticated,
  setErrorLogin,
} from '../store/user.slice'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../hook/login'
import {
  useLocalStorageLogin,
  useLocalStorageToken,
} from '../hook/useLocaleStorage'

export default function FormLogin() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector((state) => state.user.token)
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
  const errorLogin = useSelector((state) => state.user.errorLogin)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useLocalStorageToken(dispatch, token, setToken, setisAuthenticated)

  const { rememberMe, handleRememberMe } = useLocalStorageLogin(
    email,
    setEmail,
    password,
    setPassword,
    isAuthenticated
  )

  const handleFormLogin = (event) => {
    event.preventDefault()
    login(setIsLoading, email, password, dispatch)
  }

  useEffect(() => {
    dispatch(setErrorLogin(''))
  }, [email, password, dispatch])

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile')
    }
  }, [isAuthenticated, navigate])

  return (
    <form onSubmit={handleFormLogin}>
      <div className="input-wrapper">
        <label htmlFor="email">Username</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="password"
        />
      </div>
      <div className="input-remember">
        <label htmlFor="remember-me">
          <input
            type="checkbox"
            id="remember-me"
            checked={rememberMe}
            onChange={handleRememberMe}
          />
          Remember me
        </label>
      </div>
      <button
        type="submit"
        className={`${errorLogin ? 'redAlert' : 'noAlert'} sign-in-button`}
        disabled={isLoading}
      >
        Sign In
      </button>
      {errorLogin && <p>UserName or Password is incorrect</p>}
    </form>
  )
}
