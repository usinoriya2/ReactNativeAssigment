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
   Text,
   View,
 } from 'react-native';
 import { useSelector } from 'react-redux';
 import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
 import Search from './Search';
 import {Bird, ResponseData} from './models';


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
    console.log(this.props);
   return (
     <View>
       <Search/>
       {this.props.characterData.characters.map(character => {
         return(<Text>{character.name}</Text>);
       })}
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
