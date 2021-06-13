import axios from 'axios';
import {ResponseData} from './models';

let responseData:ResponseData;

export let getPageWiseFilteredCharacterData = async(page:number, searchString:String):Promise<ResponseData> => {
    try {
        const response = await axios.get("https://rickandmortyapi.com/api/character?name="+searchString+"&page="+page);
        responseData = response.data as ResponseData;
        console.log(responseData, "responseData");
        return responseData;
    } catch (error) {
        console.error(error);
    }
    return responseData;
}
