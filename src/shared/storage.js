import { AsyncStorage } from 'react-native';


export const set = (key, value) => {
    return AsyncStorage.setItem(key, JSON.stringify(value));
}


export const get = key => {

    function parseJson(item) {
        try { return JSON.parse(item) }
        catch (e) { return item }
    }

    return AsyncStorage.getItem(key).then(item => parseJson(item));

}

