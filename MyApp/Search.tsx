import * as React from 'react';
import { View, TextInput, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { Searchbar } from 'react-native-paper';

interface Props {
}

interface State {
    searchQuery : string,
}

class Search extends React.Component<Props, State> {

    state: State = {
        searchQuery : '',
    }

    componentDidMount() { 
    }

     onChangeSearch = (query : string) => {
        console.log(query);
        this.setState({searchQuery:query});
    }

    
    render() {
        return (
            <Searchbar
                placeholder="Search"
                onChangeText={this.onChangeSearch}
                value={this.state.searchQuery}
            />
        );
      }
 }
 export default Search;