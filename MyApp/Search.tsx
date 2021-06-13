import * as React from 'react';
import { View, TextInput, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { Searchbar } from 'react-native-paper';

interface Props {
    onSearch:(searchString:string)=>void;
}

interface State {
    searchString : string,
}

class Search extends React.Component<Props, State> {

    state: State = {
        searchString : '',
    }

    componentDidMount() { 
    }

     handleSearch = (query : string) => {
        console.log(query);
        this.props.onSearch(query);
        this.setState({searchString:query});
    }

    
    render() {
        return (
            <Searchbar
                style={{height:'7%'}}
                placeholder="Search"
                onChangeText={this.handleSearch}
                value={this.state.searchString}
            />
        );
      }
 }
 export default Search;