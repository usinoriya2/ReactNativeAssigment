import axios from 'axios';
import {ResponseData} from './models';

export let responseData:ResponseData;
export let getPageWiseCharacterData = (page:number):ResponseData => {
    axios.get("https://rickandmortyapi.com/api/character?page="+page)
        .then(response => {
            responseData = response.data;
            console.log(responseData);
            return responseData;
        })
        .catch(error => {
            console.log(error);
        });
    return responseData;
}