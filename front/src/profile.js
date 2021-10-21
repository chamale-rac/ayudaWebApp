import React, { Fragment } from 'react';

export const profile = () => (
<div className="container">
  <div className="row">
    <div className="col-md-12">
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="content" className="content content-full-width">
              <div className="profile">
                <div className="profile-header">
                  <div className="profile-header-cover" />
                  <div className="profile-header-content">
                    <div className="profile-header-img">
                      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
                    </div>
                    <div className="profile-header-info">
                      <h4 className="m-t-10 m-b-5">Pablo</h4>
                      <p className="m-b-10">Ayudante</p>
                      <a href="#" className="btn btn-xs btn-success">Editar perfil</a>
                    </div>
                  </div>
                  <ul className="profile-header-tab nav nav-tabs">
                    <li className="nav-item"><a href="#profile-post" className="nav-link" data-toggle="tab">Ayudas</a></li>
                    <li className="nav-item"><a href="#profile-about" className="nav-link active show" data-toggle="tab">Información general</a></li>
                    <li className="nav-item"><a href="#profile-photos" className="nav-link" data-toggle="tab">Fotos</a></li>
                    <li className="nav-item"><a href="#profile-videos" className="nav-link" data-toggle="tab">Videos</a></li>
                    <li className="nav-item"><a href="#profile-friends" className="nav-link" data-toggle="tab">Contactar</a></li>
                  </ul>
                </div>
              </div>
              <div className="profile-content">
                <div className="tab-content p-0">
                  <div className="tab-pane fade in active show" id="profile-about">
                    <div className="table-responsive">
                      <table className="table table-profile">
                        <thead>
                          <tr>
                            <th />
                            <th>
                              <h4>Pablo    Leal <small>Estudiante UVG</small></h4>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="highlight">
                            <td className="field">Estado</td>
                            <td><a href="javascript:;">Añade tu estado</a></td>
                          </tr>
                          <tr className="divider">
                            <td colSpan={2} />
                          </tr>
                          <tr>
                            <td className="field">Telefono</td>
                            <td><i className="fa fa-mobile fa-lg m-r-5" /> +502 30454323 <a href="javascript:;" className="m-l-5">Edit</a></td>
                          </tr>
                          <tr>
                            <td className="field">Numero alternativo</td>
                            <td><a href="javascript:;">Añadir numero</a></td>
                          </tr>
                          <tr>
                            <td className="field">Numero de trabajo</td>
                            <td><a href="javascript:;">Añadir numero</a></td>
                          </tr>
                          <tr className="divider">
                            <td colSpan={2} />
                          </tr>
                          <tr className="highlight">
                            <td className="field">Sobre mi</td>
                            <td><a href="javascript:;">Añade descripcion</a></td>
                          </tr>
                          <tr className="divider">
                            <td colSpan={2} />
                          </tr>
                          <tr>
                            <td className="field">Departamento</td>
                            <td>
                              <select className="form-control input-inline input-xs" name="region">
                                <option value="US" selected>Guatemala</option>
                                <option value="AF">Peten</option>
                                <option value="AL">Huehuetango</option>
                                <option value="DZ">Izabal</option>
                                <option value="AS">Escuintla</option>
                                <option value="AD">Baja Verapaz</option>
                                <option value="AO">Alta Verapaz</option>
                                <option value="AI">Quiche</option>
                                <option value="AQ">Solola</option>
                                <option value="AG">San Marcos</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td className="field">Municipio</td>
                            <td>Ciudad</td>
                          </tr>
                          <tr>
                            <td className="field">Zona</td>
                            <td><a href="javascript:;">Añadir zona</a></td>
                          </tr>
                          <tr>
                            <td className="field">Sitio web</td>
                            <td><a href="javascript:;">Añade tu sitio web</a></td>
                          </tr>
                          <tr>
                            <td className="field">Genero</td>
                            <td>
                              <select className="form-control input-inline input-xs" name="gender">
                                <option value="male">Masculino</option>
                                <option value="female">Femenino</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td className="field">Fecha de nacimiento</td>
                            <td>
                              <select className="form-control input-inline input-xs" name="day">
                                <option value={04} selected>06</option>
                              </select>
                              -
                              <select className="form-control input-inline input-xs" name="month">
                                <option value={11} selected>09</option>
                              </select>
                              -
                              <select className="form-control input-inline input-xs" name="year">
                                <option value={1989} selected>2001</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td className="field">Idioma</td>
                            <td>
                              <select className="form-control input-inline input-xs" name="language">
                                <option value selected>Español</option>
                              </select>
                            </td>
                          </tr>
                          <tr className="divider">
                            <td colSpan={2} />
                          </tr>
                          <tr className="highlight">
                            <td className="field">&nbsp;</td>
                            <td className="p-t-10 p-b-10">
                              <button type="submit" className="btn btn-primary width-150">Actualizar datos</button>
                              <button type="submit" className="btn btn-white btn-white-without-border width-150 m-l-5">Cancelar</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    4                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)