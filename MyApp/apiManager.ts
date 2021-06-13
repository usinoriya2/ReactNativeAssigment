import axios from 'axios';
import {ResponseData} from './models';

let responseData:ResponseData;

export let getPageWiseCharacterData = async(page:number) => {
    try {
        const response = await axios.get("https://rickandmortyapi.com/api/character?page="+page);
        responseData = response.data as ResponseData;
        console.log(responseData);
        return responseData;
    } catch (error) {
        console.error(error);
    }
    // axios.get("https://rickandmortyapi.com/api/character?page="+page)
    //     .then(response => {
    //         responseData = response.data as ResponseData;
    //         console.log(responseData);
    //         return responseData;
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    return responseData;
}

export let getFilteredCharacterData = (searchString:String, page:number):ResponseData => {
    axios.get("https://rickandmortyapi.com/api/character?page="+page+"&name="+searchString)
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