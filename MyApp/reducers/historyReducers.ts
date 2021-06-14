import { ADD_CHARACTER } from '../actions/types';
import { Character } from '../models';
import { ReduxState } from '../Main';
// type Actions =
//   | ReturnType<typeof addPerson>
//   | ReturnType<typeof removePerson>;

const initialState = {
    characterHistory: []
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case ADD_CHARACTER:
            return {
                // ...state, characterHistory: (state.characterHistory.filter((ch: Character) => {
                //     return ch.id != action.payload.id;
                // })as any).unshift(action.payload)
                ...state, characterHistory: [...state.characterHistory, action.payload]
            };
        default:
            return state
    }
}