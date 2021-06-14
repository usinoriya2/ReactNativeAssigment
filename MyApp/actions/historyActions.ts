import { Character } from "../models"
import { ADD_CHARACTER } from "./types"

export const addCharacters = (characterHistory: Character[]) => {
    return {
        type: ADD_CHARACTER,
        payload: characterHistory,
    }
}