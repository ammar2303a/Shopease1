
import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', { email, password })
      localStorage.setItem('token', res.data.token)
      alert('Login Successful')
    } catch (error) {
      alert('Login Failed')
    }
  }

  return (
    // CHANGED: Wrapper section for spacing + background
    <section className="bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            {/* CHANGED: Card box for template-style form */}
            <div className="card shadow border-0">
              <div className="card-body p-4">
                {/* CHANGED: Template style heading */}
                <h2 className="h3 mb-4 text-center text-success">Login</h2>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor='Email' className="form-label">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor='Password' className="form-label">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  {/* CHANGED: Button styled to template */}
                  <button type="submit" className="btn btn-success w-50 ">
                    Login
                  </button>
                   <Link className="btn btn-primary w-50" to="/update">Update</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
