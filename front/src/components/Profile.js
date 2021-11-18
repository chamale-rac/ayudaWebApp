import React, { Fragment, useState, useEffect } from 'react'


import { Link } from 'react-router-dom'


import { useAuth0 } from '@auth0/auth0-react';


const API = process.env.REACT_APP_BACK;

export const Profile = () => {


  const { logout, user } = useAuth0();

  const url_str = window.location.href
  const url = new URL(url_str);
  const param = url.searchParams.get("p");


  const [rels, setRel] = useState([])
  const [posts, setPosts] = useState([])
  const [yes, setY] = useState("");



  const getPosts = async () => {
    const res = await fetch(`${API}/users`)
    const data = await res.json();
    setPosts(data);
  }

  const getRelations = async () => {
    const res = await fetch(`${API}/relations`)
    const data = await res.json();
    setRel(data);
  }

  const handleSubmit = async () => {

    const seguidor = user.name;
    const seguido = param;
    const res = fetch(`${API}/relations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        seguidor,
        seguido
      }),
    })
      .then(res => {
        console.log("response: ", res);

        setY("");
      })
      .catch(err => {
        console.log("error:", err);
      })
    setTimeout(function () { getRelations(); }, 500);
  }

  const deleteFollow = async (id) => {

    console.log(id)
    const userResponse = window.confirm("¿Estás seguro de dejar de seguir?");
    if (userResponse) {
      const res = await fetch(`${API}/relations/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);


      setTimeout(function () { getRelations(); }, 500);
    }
  };

  function wiew(array, seguidox, seguidorx) {
    console.log(array.length);
    let res = array.filter((val) => {
      console.log(val)
      if (val.seguidor === seguidorx) {
        if (val.seguido === seguidox) {
          return val
        }
      }
    }
    ).length;

    let x = res;
    console.log(x);

    if (parseInt(x) === parseInt(0)) {
      const x = new Boolean(true);

      console.log("x" + x);
      return (x);
    } else {
      const x = new Boolean(false);

      console.log("x" + x);
      return (x);
    }
  }

  useEffect(() => {

    getRelations();
    getPosts();
  }, [])


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div id="content" className="content content-full-width">
                  <div className="profile">
                    <div className="profile-header">
                      <div className="profile-header-cover" />
                      <div className="profile-header-content">
                        <div className="profile-header-img">
                          <img src="https://drive.google.com/uc?export=view&id=1_JQRSCnyjaRVepXUdFvo-ZkDPojcVoGa" alt="" />
                        </div>
                        <div className="profile-header-info">
                          <h4 className="m-t-10 m-b-5">{param}</h4>
                          <br></br>
                          <p className="m-b-10"></p>

                          {(param === user.email) ?
                            <button onClick={(e) => logout({ returnTo: window.location.origin })} className="btn btn-xs btn-success">Logout</button>
                            :
                            <div>
                              {
                                ((rels.filter((val) => {
                                  console.log(val)
                                  if (val.seguidor === user.email) {
                                    if (val.seguido === param) {
                                      return val
                                    }
                                  }
                                }
                                ).length) === 1) ?
                                  rels.filter((val) => {
                                    if (val.seguidor === user.email) {
                                      if (val.seguido === param) {
                                        return val
                                      }
                                    }
                                  }).map((post, key) => (
                                    < button onClick={(e) => deleteFollow(post._id)} className="btn btn-xs btn-success">Dejar de seguir</button>
                                  )) : <button onClick={(e) => handleSubmit()} className="btn btn-xs btn-success">Seguir</button>
                              }
                            </div>}

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profile-content">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Posts</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="follower-tab" data-bs-toggle="tab" data-bs-target="#follower" type="button" role="tab" aria-controls="follower" aria-selected="false">Seguidores</button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="following-tab" data-bs-toggle="tab" data-bs-target="#following" type="button" role="tab" aria-controls="following" aria-selected="false">Seguidos</button>
                      </li>


                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                        <div className="row projects gx-lg-5">

                          {posts.filter((val) => {
                            if (val.creator === param) {
                              return val
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


                      </div>
                      <div className="tab-pane fade" id="follower" role="tabpanel" aria-labelledby="follower-tab">
                        {

                          rels.filter((val) => {
                            if (val.seguido === param) {
                              return val
                            } else if (val.seguidor === "") {
                              if (val.seguido === "") {
                                return val
                              }
                            }
                          }).map((post, key) => (
                            <div>
                              <Link to={`/profile?p=${post.seguidor}`}> {post.seguidor} </Link>
                            </div>
                          ))
                        }

                      </div>
                      <div className="tab-pane fade" id="following" role="tabpanel" aria-labelledby="following-tab">
                        {

                          rels.filter((val) => {
                            if (val.seguidor === param) {
                              return val
                            } else if (val.seguidor === "") {
                              if (val.seguido === "") {
                                return val
                              }
                            }
                          }).map((post, key) => (
                            <div>
                              <Link to={`/profile?p=${post.seguido}`}> {post.seguido} </Link>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}