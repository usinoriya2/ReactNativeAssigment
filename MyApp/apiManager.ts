import axios from 'axios';
import {ResponseData} from './models';

export let responseData:ResponseData;
export let getCharacterData = (page:number):ResponseData => {
    axios.get("https://rickandmortyapi.com/api/character")
        .then(response => {
            responseData = response.data;
            // console.log(responseData);
            return responseData;
        })
        .catch(error => {
            console.log(error);
        });
    return responseData;
}