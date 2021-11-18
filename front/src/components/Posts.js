import React, { useState, useEffect } from 'react'


import { Link } from 'react-router-dom'

import $ from 'jquery';

const API = process.env.REACT_APP_BACK;

export const Posts = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [filt, filterText] = useState('')
    const [sta, setSta] = useState('All')

    const [editando, setEditando] = useState(false)
    const [ID, setID] = useState('false')

    const [posts, setPosts] = useState([])


    const getPosts = async () => {
        const res = await fetch(`${API}/users`)
        const data = await res.json();
        setPosts(data);
    }



    useEffect(() => {
        getPosts();
    }, [])

    const [searchTerm, setSearchTerm] = useState("")






    return (


        <div className="container py-5">

            <div class="row justify-content-center my-5">
                <div class="filter-btns shadow-md rounded-pill text-center col-auto">

                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"

                        onChange={(e) => { setSearchTerm(e.target.value) }} />
                    <select class="form-control mt-6"
                        type="text"
                        onChange={e => setSta(e.target.value)}
                        value={sta}
                        className="form-control"
                        autoFocus>
                        <option>All</option>
                        <option>En_progreso</option>
                        <option>Resuelto</option>
                    </select>
                </div>
            </div>


            <div className="row projects gx-lg-5">

                {posts.filter((val) => {
                    if (sta == "All") {
                        if (searchTerm == "") {
                            return val
                        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                        else if (val.ticket1.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                        else if (val.ticket2.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                        else if (val.creator.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                        else if (val.location.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    } else if (val.sta.includes(sta)) {
                        if (searchTerm == "") {
                            return val
                        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                        else if (val.ticket1.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                        else if (val.ticket2.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                        else if (val.location.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }
                }).map((post, key) => (
                    <div className="col-sm-6 col-lg-4 text-decoration-none" key={key}>
                        <div className="service-work overflow-hidden card mb-5 mx-5 m-sm-4">
                            <img className="card-img-top" src={post.file} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title light-300 text-dark">{post.title} <i class={(post.sta === "En_progreso") ? 'bx bxs-checkbox-checked' : 'bx bxs-x-square'}></i></h5>
                                <p className="card-text light-300 text-primary" style={{ color: "red" }}>
                                    Creado por: <Link to={`/profile?p=${post.creator}`}> {post.creator} </Link>
                                </p>
                                <p>{(post.ticket1 === "") ? '' : `#${post.ticket1} `}
                                    {(post.ticket2 === "") ? '' : `#${post.ticket2}`}
                                </p>
                                <Link to={`/indiv?p=${post._id}`} className="text-decoration-none text-primary light-300">
                                    Ver más...
                                </Link>
                            </div>
                        </div>
                    </div>


                ))
                }

            </div>




        </div >
    )
}

