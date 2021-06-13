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
 import {
   StyleSheet,
   ScrollView,
   Text,
   View,
 } from 'react-native';
 import { useSelector } from 'react-redux';
 import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
 import Search from './Search';
 import {Bird, ResponseData} from './models';
 import CharacterCard from './CharacterCard';
 import Pages from './Pages';
interface Props {
  characterData: ResponseData, 
}

interface State {
  birds: Bird[],
}

class App extends React.Component<Props, State> {

  state: State = {
    birds:[
      {
        name: 'robin',
        views: 1
      }
    ],
  } 
  render() {
    // const birds = useSelector(state => this.state.birds);
    let setMultipleCharacters = () =>{
      let tempArray = [];
      for(let i=0; i<20; i++){
        tempArray.push(<CharacterCard character={this.props.characterData.characters[0]}/>);
      }
      return tempArray;
    }
    console.log(this.props);
   return (
     <View>
       <Search/>
       <ScrollView>
         <View>
          {/* {this.props.characterData.characters.map(character => {
            return(<CharacterCard character={character}/>);
          })} */}
          {setMultipleCharacters()}
        </View>
       </ScrollView>
       <Pages numberOfPages={this.props.characterData.info.pages}/>
     </View>
   );
 };
}

 const styles = StyleSheet.create({
   highlight: {
     fontWeight: '700',
   },
 });

 export default App;
