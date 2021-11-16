import React, { useState, useEffect } from 'react'


import { Link } from 'react-router-dom'


const API = process.env.REACT_APP_BACK;

export const Posts = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const [editando, setEditando] = useState(false)
    const [ID, setID] = useState('false')

    const [posts, setPosts] = useState([])


    const getPosts = async () => {
        const res = await fetch(`${API}/users`)
        const data = await res.json();
        setPosts(data)
    }


    useEffect(() => {
        getPosts();
    }, [])







    return (


        <div className="container py-5">
            <div className="row justify-content-center my-5">

            </div>


            <div className="row projects gx-lg-5">



                {
                    posts.map(post => (
                        <Link className="col-sm-6 col-lg-4 text-decoration-none project marketing social business">
                            <div className="service-work overflow-hidden card mb-5 mx-5 m-sm-4">
                                <img className="card-img-top" src="./assets/img/our-work-01.jpg" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title light-300 text-dark">{post.title}</h5>
                                    <p className="card-text light-300 text-primary" style={{ color: "red" }}>
                                        Creado por: <u>  {post.creator} </u>
                                    </p>
                                    <span className="text-decoration-none text-primary light-300">
                                        Ver más...
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))
                }

            </div>




        </div >
    )
}

