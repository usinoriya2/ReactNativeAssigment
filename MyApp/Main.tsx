/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import { Provider as PaperProvider } from 'react-native-paper';
 import { Provider as StoreProvider } from 'react-redux';
 import App from './App';
 import { createStore } from 'redux';
 import {getPageWiseCharacterData} from './apiManager';
 import {ResponseData} from './models';

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
    characterData:ResponseData
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
        characters:[
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
    }
  }

  componentDidMount(){
      const characterData = getPageWiseCharacterData(1);
    // this.setState({characterData:characterData});
  }

  render() {
   return (
    <StoreProvider store={store}>
      <PaperProvider>
          <App characterData={this.state.characterData}/>
      </PaperProvider>
    </StoreProvider>
   );
 };
}


 export default Main;
