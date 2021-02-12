/* eslint-disable prettier/prettier */
import React,{useEffect,useState} from 'react';
import {API_HOST} from '../utils/constants';
import axios from 'axios';

export function getNewsApi(){
    const url = `${API_HOST}/noticias?_sort=created_at:DESC&_limit=100`;

    return fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((result) =>{
        return result;
    });

}
