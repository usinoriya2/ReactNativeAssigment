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
import { Button, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Search from './Search';
import { ResponseData, Character } from './models';
import CharacterCard from './CharacterCard';
import Page from './Page';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
interface Props {
  characterData?: ResponseData,
  currentPage: number,
  onButtonPressed: (pageNumber: number) => void,
  onSearch: (searchString: string) => void,
  navigation: any,
}

interface State {
  historyView: boolean,
}

class App extends React.Component<Props, State> {

  state: State = {
    historyView: false,
  }
  handlePageButtonPress = (pageNumber: number) => {
    this.props.onButtonPressed(pageNumber);
  }

  handleSearch = (searchString: string) => {
    this.props.onSearch(searchString);
  }

  goToHistory = () => {
    this.props.navigation.navigate('History');
  }

  render() {
    // const birds = useSelector(state => this.state.birds);
    const characterData = this.props.characterData;
    const numberOfPages = characterData?.info.pages || 0;
    let renderPages = () => {

      const currentPage = this.props.currentPage;
      let pages = [];
      if (numberOfPages <= 1) return;
      for (let i = 1; i <= numberOfPages; i++) {
        if (i === currentPage) {
          pages.push(<Page pageNumber={i} currentPage={true} onButtonPressed={this.handlePageButtonPress} />);
        } else {
          pages.push(<Page pageNumber={i} currentPage={false} onButtonPressed={this.handlePageButtonPress} />);
        }
      }
      return pages;
    }
    return (
      <View>
        <Search onSearch={this.handleSearch} />
        <Button style={{ height: 40, margin: 10 }} mode="outlined" dark={true} onPress={this.goToHistory}>HISTORY</Button>
        <ScrollView style={numberOfPages <= 1 ? { height: '85%' } : { height: '77%' }}>
          <View>
            {this.props.characterData?.results.map(character => {
              return (<CharacterCard fromHistory={false} key={character.id} character={character} />);
            })}
          </View>
        </ScrollView>
        <ScrollView style={{ height: '5%' }} horizontal={true}>{renderPages()}</ScrollView>
      </View>
    );
  };
}


export default App;
