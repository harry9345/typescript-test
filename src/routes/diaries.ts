import express from "express";
import diaryService from "../services/diaryService";
import toNewDairyEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send(diaryService.getNonSensetiveEntries())
})

router.get('/:id', (req, res) => {
    const diary = diaryService.finfById(Number(req.params.id))
    if (diary) {
        res.send(diary)
    } else {
        res.sendStatus(404)
    }
})

router.post('/', (req, res) => {
    try {
        const newDiaryEntry = toNewDairyEntry(req.body)
        const addedEntry = diaryService.addDiary(newDiaryEntry)
        res.json(addedEntry)
    } catch (error: unknown) {
        let errorMessage = 'Somthing goes Wrong'
        if (error instanceof Error) {
            errorMessage += ' Error : ' + error.message
        }
        res.status(404).send(errorMessage)
    }
})

router.post('/', (_req, res) => {
    res.send('Saving a diary!')
})

export default router