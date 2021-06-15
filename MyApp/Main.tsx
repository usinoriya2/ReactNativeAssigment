import React from 'react';
import { ActivityIndicator } from 'react-native';
import App from './App';

import { getPageWiseFilteredCharacterData } from './apiManager';
import { Character, ResponseData } from './models';
import { NavigationHelpers } from '@react-navigation/core';
//  import Spinner from 'react-native-loading-spinner-overlay';



interface Props {
    navigation: any,
}

export interface ReduxState {
    characterData?: ResponseData,
    currentPage: number,
    searchString: string,
    characterHistory: Character[],
    loading: boolean
}

class Main extends React.Component<Props, ReduxState> {
    state: ReduxState = {
        currentPage: 1,
        searchString: '',
        characterHistory: [],
        loading: false
    }

    componentDidMount() {
        this.getCurrentPageData(this.state.currentPage, this.state.searchString);
    }

    getCurrentPageData = async (pageNumber: number, searchString: string) => {
        this.setState({ loading: true });
        let characterData: ResponseData = await getPageWiseFilteredCharacterData(pageNumber, searchString);
        console.log(characterData, 1);
        this.setState({ characterData: characterData, loading: false });
    }

    handlePageButtonPress = (pageNumber: number) => {
        console.log(pageNumber);
        this.getCurrentPageData(pageNumber, this.state.searchString);
        this.setState({ currentPage: pageNumber });
    }

    handleSearch = (searchString: string) => {
        console.log(searchString);
        this.getCurrentPageData(1, searchString);
        this.setState({ currentPage: 1, searchString: searchString });
    }

    render() {
        return (
            // this.state.loading ? <ActivityIndicator size="large" /> :
            <App characterData={this.state.characterData} onButtonPressed={this.handlePageButtonPress} onSearch={this.handleSearch}
                currentPage={this.state.currentPage} navigation={this.props.navigation} />
        );
    };
}


export default Main;
