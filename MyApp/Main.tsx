 import React from 'react';
 import { Provider as PaperProvider } from 'react-native-paper';
 import { Provider as StoreProvider } from 'react-redux';
 import App from './App';
 import { createStore } from 'redux';
 import {getPageWiseFilteredCharacterData} from './apiManager';
 import {ResponseData} from './models';
//  import Spinner from 'react-native-loading-spinner-overlay';
const store = createStore(() => ({
  birds: [
    {
      name: 'robin',
      views: 1
    }
  ]
}));


interface Props {
}

interface State {
    characterData:ResponseData,
    currentPage:number,
    searchString:string
}

class Main extends React.Component<Props, State> {
  state: State = {
    characterData:{
        info: {
            count: 671,
            pages: 34,
            next: "https://rickandmortyapi.com/api/character?page=3",
            prev: "https://rickandmortyapi.com/api/character?page=1"
        },
        results:[
            {
                id: 21,
                name: "Aqua Morty",
                status: "unknown",
                species: "Humanoid",
                type: "Fish-Person",
                gender: "Male",
                origin: {
                    name: "unknown",
                    url: ""
                },
                location: {
                    name: "Citadel of Ricks",
                    url: "https://rickandmortyapi.com/api/location/3"
                },
                image: "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
                episode: [
                    "https://rickandmortyapi.com/api/episode/10",
                    "https://rickandmortyapi.com/api/episode/22"
                ],
                url: "https://rickandmortyapi.com/api/character/21",
                created: "2017-11-04T22:39:48.055Z"
            }
        ]
    },
    currentPage:1,
    searchString:''
  }

  componentDidMount(){
    this.getCurrentPageData(this.state.currentPage, this.state.searchString);
  }

  getCurrentPageData = async(pageNumber:number, searchString:string) =>{
    let characterData:ResponseData = await getPageWiseFilteredCharacterData(pageNumber, searchString);
    console.log(characterData, 1);
    this.setState({characterData:characterData});
  }

  handlePageButtonPress = (pageNumber:number) =>{
    console.log(pageNumber);
    this.getCurrentPageData(pageNumber, this.state.searchString);
    this.setState({currentPage:pageNumber});
  }

  handleSearch =(searchString:string)=>{
    console.log(searchString);
    this.getCurrentPageData(1,searchString);
    this.setState({currentPage:1,searchString:searchString});
  }

  render() {
   return (
    <StoreProvider store={store}>
      <PaperProvider>
          <App characterData={this.state.characterData} onButtonPressed={this.handlePageButtonPress} onSearch={this.handleSearch}
           currentPage={this.state.currentPage}/>
      </PaperProvider>
    </StoreProvider>
   );
 };
}


 export default Main;
