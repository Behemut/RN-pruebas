/* eslint-disable prettier/prettier */
import { API_HOST } from '../utils/constants';

export function setNewsApi(){
  
  
    const url = `${API_HOST}/noticias`;
   return fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'yourValue',
          url: 'yourOtherValue',
        })});
}