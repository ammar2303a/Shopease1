import React, { useState, useEffect } from 'react'
import axios from 'axios'

function UpdateUser({ userId }) { // yeh id tum login ke baad token se bhi nikal sakte ho
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    // Page load hone par user ka purana data fetch karo
    axios.get(`http://localhost:3000/api/auth/user/${userId}`)
      .then(res => {
        setName(res.data.name)
        setEmail(res.data.email)
      })
      .catch(err => console.log(err))
  }, [userId])

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:3000/api/auth/update/${userId}`, { name, email })
      alert("User updated successfully")
    } catch (error) {
      alert("Update failed")
    }
  }

  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow border-0">
              <div className="card-body p-4">
                <h2 className="h3 mb-4 text-center text-primary">Update User</h2>
                <form onSubmit={handleUpdate}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpdateUser
