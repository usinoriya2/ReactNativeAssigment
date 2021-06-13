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
 import Page from './Page';
interface Props {
  characterData: ResponseData, 
  onButtonPressed:(pageNumber:number)=>void, 
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
  handlePageButtonPress= (pageNumber:number)=>{
    this.props.onButtonPressed(pageNumber);
  }

  render() {
    // const birds = useSelector(state => this.state.birds);
    const characterData = this.props.characterData;
    
    let renderPages = () =>{
      const numberOfPages = characterData.info.pages;
      let pages = [];
      for(let i=1; i<=numberOfPages; i++){
          pages.push(<Page pageNumber={i} onButtonPressed={this.handlePageButtonPress}/>);
      }
      return pages;
    }
    console.log(this.props);
   return (
     <View>
       <Search/>
       <ScrollView style={{height:'85%'}}>
         <View>
          {this.props.characterData.results.map(character => {
            return(<CharacterCard character={character}/>);
          })}
          {/* {setMultipleCharacters()} */}
        </View>
       </ScrollView>
       <ScrollView style={{height:'5%'}} horizontal={true}>{renderPages()}</ScrollView>
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
