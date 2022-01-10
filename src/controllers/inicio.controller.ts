import { Request, Response } from 'express'

export const txt = async (req: Request, res: Response): Promise<Response>=>{
    
    const datosDeCreacion = {
                            title: "Creacion de usuario",
                            MetodoHTTP:"Post",
                            Url:"https://api-rest-ndjs.herokuapp.com/singup",
                            objetoInputJson:{
                                firstName: "nombre",
                                lastName: "apellido",
                                age: "edad",
                                email: "@email.com",
                                password: "password"
                                },
                            respuesta:{
                                header:"auth-token(key , value)",
                                objetoRespuestaJson:"Datos del usuario sin la Password"
                                }
                            };

    const datosDeIngreso = {
                            title: "Inicio de session",
                            MetodoHTTP:"Get",
                            Url:"https://api-rest-ndjs.herokuapp.com/singin",
                            objetoInputJson:{
                                email: "@email.com",
                                password: "password"
                                },
                            respuesta:{
                                header:"auth-token(key , value)",
                                objetoRespuestaJson:"Datos del usuario sin la Password"
                                }
                            };

    const datosDeautenticado = {
                            title: "Datos del usuario al haberse autenticado",
                            MetodoHTTP:"Get",
                            Url:"https://api-rest-ndjs.herokuapp.com/userlogin",
                            header:"auth-token(key , value)",
                            respuesta:{
                                objetoRespuestaJson:"Datos del usuario sin la Password"
                                }
                            };
    const importante ={msg:"Los Token tienen solo una duracion de 1HS"}


    return res.json({datosDeCreacion,datosDeIngreso,datosDeautenticado,importante});
}