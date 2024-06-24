import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Verify = () => {
    const [verified, setverified] = useState("")
    const [fetched, setfetched] = useState("")

    useEffect(() => {
      const url = 'https://level-project-bank-app.onrender.com/client/verify?token=5dGvM4mebtV@gmail.com'
      axios.get(url)
      .then(res => {
        setfetched(true)
        if (res.data.status == true) {
            setverified(true)
        }
      })
      .catch(err => {
        setfetched(true)
      })
    }, [])
    
  return (
    <>
        <div>
            {
                fetched ? (
                    <div>
                        {
                            verified ? <div>
                                <h1>Email verified</h1>
                                <Link to='/Login'>Go back to Login</Link>
                            </div> 
                            : 
                            <div>
                                <h1>Not found</h1>
                                <Link to='/Login'>Go back to Login</Link>
                            </div>
                        }
                    </div>
                ) : (
                    <div>
                        <h1>Loading ...</h1>
                    </div>
                )
            }
        </div>
    </>
  )
}

export default Verify