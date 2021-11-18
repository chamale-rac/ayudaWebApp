//import { useAuth0 } from '@auth0/auth0-react'

import React, { useState, useRef } from "react";

import { useAuth0 } from '@auth0/auth0-react'

import FileBase64 from 'react-file-base64';

const API = process.env.REACT_APP_BACK;

export const Add = () => {


    const { user } = useAuth0();

    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [descrip, setDescrip] = useState("");

    const [sta, setSta] = useState("En_progreso");

    const [ticket1, setTicket1] = useState("");
    const [ticket2, setTicket2] = useState("");

    const [file, setFile] = useState("");

    const [editing, setEditing] = useState(false);
    const [id, setId] = useState("");


    const titleInput = useRef(null);

    let [users, setUsers] = useState([]);

    const creator = user.email;
    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = fetch(`${API}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                creator,
                title,
                location,
                descrip,
                file,
                ticket1,
                ticket2,
                sta
            }),
        })
            .then(res => {
                console.log("response: ", res);
            })
            .catch(err => {
                console.log("error:", err);
            })


        setTitle('');
        setLocation('');
        setDescrip('');
        setTicket1('');
        setTicket2('');
        setFile('');


        document.getElementById("exampleCheck1").checked = false;
        //        await res.json();



    };

    const deleteUser = async (id) => {
        const userResponse = window.confirm("Are you sure you want to delete it?");
        if (userResponse) {
            const res = await fetch(`${API}/users/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();
            console.log(data);

        }
    };

    const editUser = async (id) => {
        const res = await fetch(`${API}/users/${id}`);
        const data = await res.json();

        setEditing(true);
        setId(id);

        // Reset
        setTitle(data.title);
        setLocation(data.location);
        setDescrip(data.descrip);
        titleInput.current.focus();
    };

    const cancelInsertion = () => {
        setEditing(false)
        setId('')
        setTitle("");
        setLocation("");
        setDescrip("");

        setTicket1('');
        setTicket2('');
        setFile('');

        document.getElementById("exampleCheck1").checked = false;
        //        document.getElementById("exampleFormControlFile1").value = null;
    }


    return (


        <div className="mt-4" >

            <div className="mx-auto">

                <div className="card text-left" style={{ marginLeft: '100px', marginRight: '100px' }}>


                    <div className="card-header">
                        Registro de eventos
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>

                            <div className="form-group mb-4">
                                <label className="form-label mt-4 ">Estado</label >
                                <input
                                    type="text"
                                    onChange={e => setSta(e.target.value)}
                                    value={sta}
                                    className="form-control"
                                    placeholder="Inserte nombre"
                                    autoFocus
                                    readOnly
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label mt-4">Nombre del evento*</label>
                                <input
                                    type="text"
                                    onChange={e => setTitle(e.target.value)}
                                    value={title}
                                    className="form-control"
                                    placeholder="Inserte nombre"
                                    autoFocus
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label mt-4">Ubicación*</label>
                                <input
                                    type="text"
                                    onChange={e => setLocation(e.target.value)}
                                    value={location}
                                    className="form-control"
                                    placeholder="Inserte ubicación"

                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label mt-4 ">Descripción*</label >


                                <textarea type="text"
                                    onChange={e => setDescrip(e.target.value)}
                                    value={descrip}
                                    className="form-control mb-4"
                                    placeholder="Escriba una breve descripción del evento"

                                    rows={3} required />

                            </div>


                            <div className="form-group">

                                <label className="form-label mt-4 ">Agregar imagen (Si no ve la imagen no se cargará)</label >

                                <br />
                                <FileBase64
                                    multiple={false}
                                    onDone={({ base64 }) => setFile(base64)}
                                    //onChange={e => setFile(e.target.value)}
                                    value={file}
                                />
                            </div>

                            <div>

                                <label className="form-label">Previa: </label >

                                <br />
                                <img src={file} alt="Still no image" />
                            </div>




                            <div className="form-row">
                                <label className="form-label mt-4 ">Etiquetas</label >
                                <div className="col">
                                    <input type="text"
                                        onChange={e => setTicket1(e.target.value)}
                                        value={ticket1}
                                        className="form-control mb-1"
                                        placeholder="Etiqueta 1" />
                                </div>
                                <div className="col">
                                    <input type="text"
                                        onChange={e => setTicket2(e.target.value)}
                                        value={ticket2}
                                        className="form-control mb-1"
                                        placeholder="Etiqueta 2" />
                                </div>
                            </div>


                            <div className="form-check mt-5">
                                <input type="checkbox"
                                    className="form-check-input"
                                    id="exampleCheck1"

                                    required />
                                <label className="form-check-label" htmlFor="exampleCheck1" > Mi publicación cumple las normas de la comunidad.</label>
                            </div>

                            <button className="btn btn-primary   m-1"
                            >

                                {
                                    editing ? 'Actualizar' : 'Crear'
                                }

                            </button>

                            <button
                                className="btn btn-warning m-1 "
                                onClick={(e) => cancelInsertion()} >
                                Cancelar
                            </button>
                        </form>

                    </div>
                    <div className="card-footer text-muted">

                    </div>
                </div>
            </div >


        </div >



    )


}
