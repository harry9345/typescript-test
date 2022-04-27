import diaries from '../../data/diaries';

import { NonSensetiveDiaryEntry, DiaryEntry } from '../types';


const getEntries = (): Array<DiaryEntry> => {
    return diaries
}
const getNonSensetiveEntries = (): NonSensetiveDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => ({
        id, date, weather, visibility
    }))
}

const addDiary = () => {
    return null
}

export default {
    getEntries,
    addDiary,
    getNonSensetiveEntries
}