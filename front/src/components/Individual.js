import React, { Fragment, useState, useEffect } from 'react'


import { Link } from 'react-router-dom'


import { useAuth0 } from '@auth0/auth0-react';
import { post } from 'jquery';


const API = process.env.REACT_APP_BACK;

export const Individual = () => {



    const { user } = useAuth0();
    const creator = user.email;

    const [com, setCom] = useState('')
    const [xe, setX] = useState()

    const url_str = window.location.href
    const url = new URL(url_str);
    const param = url.searchParams.get("p");

    const [posts, setPosts] = useState([])

    const handleCom = async (e) => {

        e.preventDefault();
        const res = await fetch(`${API}/update/${param}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                com,
                creator

            }),
        })
            .then(res => {
                console.log("response: ", res);
            })
            .catch(err => {
                console.log("error:", err);
            })


        setCom('')
        getPosts();

    }






    const getPosts = async () => {
        const res = await fetch(`${API}/users`)
        const data = await res.json();
        setPosts(data);
    }


    useEffect(() => {
        getPosts();
    }, [])


    return (
        <div className="container py-5">

            {posts.filter((val) => {
                if (val._id === param) {
                    return val
                }
            }).map((post, key) => (
                <div key={key}>


                    <div className="jumbotron">
                        <h1 className="display-4">{post.title} <i class={(post.sta === "En_progreso") ? 'bx bxs-checkbox-checked' : 'bx bxs-x-square'}></i></h1>
                        <p className="lead">  {(post.ticket1 === "") ? '' : `#${post.ticket1} `} {(post.ticket2 === "") ? '' : `#${post.ticket2}`}</p>
                        <p className="lead">
                            <Link to={`/profile?p=${post.creator}`}> {post.creator} </Link></p>
                        <p className="lead">Ubicacion: {post.location}</p>
                        <p className="lead">Estado: {post.sta}</p>
                        <hr className="my-4" />

                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Descripcion</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="follower-tab" data-bs-toggle="tab" data-bs-target="#follower" type="button" role="tab" aria-controls="follower" aria-selected="false">Imagen</button>
                            </li>


                        </ul>

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <p className="mt-3">

                                    {post.descrip}
                                    {

                                        console.log(post.descrip)
                                    }
                                    {
                                        console.log(post.comments)
                                    }
                                    {
                                        console.log(com)
                                    }
                                </p>
                            </div>
                            <div className="tab-pane fade" id="follower" role="tabpanel" aria-labelledby="follower-tab">
                                <img className="card-img-top" src={post.file} alt="..." />
                            </div>

                        </div>
                        <hr className="my-4" />

                        <div>
                            Comentarios:
                            {post.comments.map((l) => (
                                <div className="form-floating mt-4 text-right">
                                    <Link className="pull-right" to={`/profile?p=${l[0]}`}> {l[0]} </Link>
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" defaultValue={l[1]} readOnly />

                                </div>


                            ))}
                        </div>
                        <hr className="my-4" />


                    </div>

                </div>




            ))
            }
            <p>
                <div className="form-floating" >
                    <form onSubmit={handleCom}>
                        <textarea type="text"
                            onChange={e => setCom(e.target.value)}
                            value={com}
                            className="form-control"
                            placeholder="Escriba un comentario"

                            rows={3} required />

                        <label htmlFor="floatingTextarea"></label>
                        <button className="btn btn-primary   m-1">
                            Comentar
                        </button>
                    </form>
                </div>
            </p>
            <hr className="my-4" />
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Go top</a>
            </p>

        </div >

    )
}