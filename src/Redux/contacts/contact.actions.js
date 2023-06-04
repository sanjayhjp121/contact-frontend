import axios from "axios"
import { useSelector } from "react-redux"
import { BASE_URL } from "../../constants/config"
import { store } from "../store"
import { LOGOUT } from "../users/user.types"
import { CREATE_CONTACTS_ERROR, CREATE_CONTACTS_LOADING, CREATE_CONTACTS_SUCCESS, DELETE_CONTACTS_ERROR, DELETE_CONTACTS_LOADING, DELETE_CONTACTS_SUCCESS, GET_CONTACTS_ERROR, GET_CONTACTS_LOADING, GET_CONTACTS_SUCCESS, UPDATE_CONTACTS_ERROR, UPDATE_CONTACTS_LOADING, UPDATE_CONTACTS_SUCCESS } from "./contact.types"


export const getContacts=()=>async(dispatch)=>{
    const {token} = store.getState().userReducer

    dispatch({type:GET_CONTACTS_LOADING})
    try {
        
        const res= await axios(BASE_URL+"/contact",{
            method:"get",
            headers:{
                Authorization:token
            }
        })

        const {status,message,data} = res.data
        console.log(message)
        if(status==1){
            
        dispatch({type:GET_CONTACTS_SUCCESS,payload:data})
        }else if(status==2){
            dispatch({type:LOGOUT})
        }else{
            dispatch({type:GET_CONTACTS_ERROR})

        }

    } catch (error) {
        dispatch({type:GET_CONTACTS_ERROR})

    }



}


export const createContacts=(obj)=>async(dispatch)=>{
    const {token} = store.getState().userReducer

    dispatch({type:CREATE_CONTACTS_LOADING})
    try {
        
        const res= await axios(BASE_URL+"/contact/create",{
            method:"post",
            data:obj,
            headers:{
                Authorization:token
            }
        })

        const {status,message} = res.data
        console.log(message)
        if(status==1){
            
        dispatch({type:CREATE_CONTACTS_SUCCESS})
        dispatch(getContacts())
        }else if(status==2){
            dispatch({type:LOGOUT})
        }else{
            dispatch({type:CREATE_CONTACTS_ERROR})

        }

    } catch (error) {
        dispatch({type:CREATE_CONTACTS_ERROR})

    }



}



export const deleteContacts=(id)=>async(dispatch)=>{
    const {token} = store.getState().userReducer

    dispatch({type:DELETE_CONTACTS_LOADING})
    try {
        
        const res= await axios(BASE_URL+"/contact/",{
            method:"delete",
            headers:{
                Authorization:token,
                id:id
            }
        })

        const {status,message} = res.data
        console.log(message)
        if(status==1){
            
        dispatch({type:DELETE_CONTACTS_SUCCESS})
        dispatch(getContacts())

        }else if(status==2){
            dispatch({type:LOGOUT})
        }else{
            dispatch({type:DELETE_CONTACTS_ERROR})

        }

    } catch (error) {
        dispatch({type:DELETE_CONTACTS_ERROR})

    }



}



export const updateContacts=(id,obj)=>async(dispatch)=>{
    const {token} = store.getState().userReducer

    dispatch({type:UPDATE_CONTACTS_LOADING})
    try {
        
        const res= await axios(BASE_URL+"/contact",{
            method:"patch",
            data:obj,
            headers:{
                Authorization:token,
                id:id
            }
        })

        const {status,message} = res.data
        console.log(message)
        if(status==1){
            
        dispatch({type:UPDATE_CONTACTS_SUCCESS})
        dispatch(getContacts())

        }else if(status==2){
            dispatch({type:LOGOUT})
        }else{
            dispatch({type:UPDATE_CONTACTS_ERROR})

        }

    } catch (error) {
        dispatch({type:UPDATE_CONTACTS_ERROR})

    }



}