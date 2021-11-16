import React, { useState, useRef, useEffect } from "react";

import { useAuth0 } from '@auth0/auth0-react'

const API = process.env.REACT_APP_BACK;


export const Miposts = () => {


    const { user } = useAuth0();

    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [descrip, setDescrip] = useState("");

    const [ticket1, setTicket1] = useState("");
    const [ticket2, setTicket2] = useState("");

    const [file, setFile] = useState("");

    const [editing, setEditing] = useState(false);
    const [id, setId] = useState("");

    const titleInput = useRef(null);

    const [users, setUsers] = useState([]);


    const creator = user.email;



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editing) {
            const res = await fetch(`${API}/users/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    creator,
                    title,
                    location,
                    descrip,
                }),
            })
                .then(res => {
                    console.log("response: ", res);
                })
                .catch(err => {
                    console.log("error:", err);
                })
            setEditing(false);
            setId("");
        }
        await getUsers();

        setTitle("");
        setLocation("");
        setDescrip("");

        setTicket1('');
        setTicket2('');
        setFile('');
        titleInput.current.focus();
    };

    const getUsers = async () => {
        const res = await fetch(`${API}/users`);
        const data = await res.json();
        setUsers(data);
    };

    const deleteUser = async (id) => {
        const userResponse = window.confirm("¿Estás seguro de eliminar el evento?");
        if (userResponse) {
            const res = await fetch(`${API}/users/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();
            console.log(data);
            await getUsers();
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

    const pass = () => (
        console.log("JS")
    )

    useEffect(() => {
        getUsers();
    }, []);

    const cancelInsertion = () => {
        setEditing(false)
        setId('')
        setTitle("");
        setLocation("");
        setDescrip("");


        setTicket1('');
        setTicket2('');
        setFile('');
    }
    return (
        <div className="row">
            <div className="col-md-4">



                <div className="card-header">
                    Actualización de eventos
                </div>
                <form onSubmit={handleSubmit} className="card card-body">


                    <div className="form-group mb-4">
                        <label className="form-label mt-4 ">Estado</label >
                        <select class="form-control">
                            <option></option>
                            <option>En progreso</option>
                            <option>Resuelto</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            className="form-control"
                            placeholder="Actualizar titulo"
                            ref={titleInput}

                            autoFocus
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-4 "></label >
                        <input
                            type="location"
                            onChange={(e) => setLocation(e.target.value)}
                            value={location}
                            className="form-control"
                            placeholder="Actualizar location"
                            autoFocus
                            required
                        />
                    </div>
                    <div className="form-group">

                        <label className="form-label mt-4 "></label >
                        <textarea type="text"
                            onChange={e => setDescrip(e.target.value)}
                            value={descrip}
                            className="form-control mb-4"
                            placeholder="Escriba una breve descripción del evento"
                            autoFocus
                            rows={3} required />
                    </div>


                    <div className="form-group">

                        <label className="form-label mt-4 ">Actualizar imagen</label >

                        <br />
                        <input type="file" className="form-control-file" id="exampleFormControlFile1"

                            onChange={e => setFile(e.target.value)}
                            value={file} />
                    </div>


                    <div className="form-row">
                        <label className="form-label mt-4 "> Actualizar etiquetas</label >
                        <div className="col">
                            <input type="text"
                                onChange={e => setTicket1(e.target.value)}
                                value={ticket1}
                                autoFocus
                                className="form-control mb-1"
                                placeholder="Etiqueta 1" />
                        </div>
                        <div className="col">
                            <input type="text"
                                onChange={e => setTicket2(e.target.value)}
                                value={ticket2}
                                autoFocus
                                className="form-control mb-1"
                                placeholder="Etiqueta 2" />
                        </div>
                    </div>


                    <label className="form-label mt-4 "></label >
                    <button className="btn btn-primary btn-block">
                        {editing ? "Update" : "Locked"}
                    </button>
                    <button
                        className="btn btn-warning mt-2 mb-2"
                        onClick={(e) => cancelInsertion()} >
                        Cancelar
                    </button>
                </form>
            </div>
            <div className="col ">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Ubicación</th>
                            <th>Descripción</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            (user.creator == creator) ?
                                <tr key={user._id}>
                                    <td>{user.title}</td>
                                    <td>{user.location}</td>
                                    <td>{user.descrip}</td>
                                    <td>
                                        <button
                                            className="btn btn-secondary btn-sm btn-block m-1"
                                            onClick={(e) => editUser(user._id)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm btn-block"
                                            onClick={(e) => deleteUser(user._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                : pass()

                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
