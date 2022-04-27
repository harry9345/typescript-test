import diaries from '../../data/diaries';

import { NonSensetiveDiaryEntry, DiaryEntry, NewDiaryEntry } from '../types';


const getEntries = (): Array<DiaryEntry> => {
    return diaries
}
const getNonSensetiveEntries = (): NonSensetiveDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => ({
        id, date, weather, visibility
    }))
}

const addDiary = (entry: NewDiaryEntry): DiaryEntry => {
    const newDiaryEnrty = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ...entry
    }
    diaries.push(newDiaryEnrty)
    return newDiaryEnrty
}

const finfById = (id: number): DiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id)
    return entry
}

export default {
    getEntries,
    addDiary,
    getNonSensetiveEntries,
    finfById
}