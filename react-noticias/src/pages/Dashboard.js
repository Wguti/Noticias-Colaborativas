//import React,{ useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
//import axios from 'axios'
import Layout from "../components/Layout"
import useServer from '../hooks/useServer.js'
  
function Dashboard() {  

    // const { get } = useServer()
    // const navigate = useNavigate()

    // const { data } =  get({ url: '/profile', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzAsImlhdCI6MTY4Mjc5NTI0MiwiZXhwIjoxNjg1Mzg3MjQyfQ.TRC5u8_ha_IBGVK58K1IHSwygoJEsMB0jPWOptEnGFc' })
    // console.log(data)
    // if (!data.status) return navigate('/')

    return (
        <Layout>
           <div className="row justify-content-md-center">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Noticias Colaborativas</a>
                            <div className="d-flex">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                    <p className="text-center"><Link to="/">Cerrar Sesión</Link></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {<h2 className="text-center mt-5">Bienvenido , somos el equipo C!</h2  >/* <h2 className="text-center mt-5">Bienvenido {data.data.username}, somos el equipo C!</h2  > */}
                </div>
            </div>
        </Layout>
    );
}
   
export default Dashboard;