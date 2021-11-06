const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require('fs');
const uuid = require('uuid');

const notePath = path.join(__dirname, "..", "..", "db", "db.json");

/**
 * 
 * @returns {Array<{
 *      id: string,
 *      title: string,
 *      text: string
 *      }>}
 */
function getNotesFromDb(){
    return JSON.parse(fs.readFileSync(notePath, 'utf-8')) || [];
}

function saveNotesToDb(notes){
    return fs.writeFileSync(notePath, JSON.stringify(notes));
}



router.get('/api/notes', function(req, res){

    const notes = getNotesFromDb();

    res.json(notes);

});

router.get("/api/notes/:id", function (req, res) {
    // get all the notes
    const notes = getNotesFromDb();
    // find the note with the given id
    const found = notes.find((note) => note.id === req.params.id )
    // if not found, return error
    if(!found){
        return res.status(400).json({
            error: "not found"
        })
    }

    // else return the found note
    res.json(found);


});

router.post("/api/notes", function (req, res) {
    // add a new note to db.json
    // get all the existing notes
    const notes = getNotesFromDb();

    // create a new note object

    // 
    const newNote = {
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text,
    }

    // add the new note to the existing notes
    const updatedNotes = [
        ...notes,
        newNote
    ]

    // save the update notes back to db.json
    saveNotesToDb(updatedNotes);

    res.json({
        data: 'ok'
    });

});

router.put("/api/notes/:id", function (req, res) {

    // get all the notes
    const notes = getNotesFromDb()

    // find the index of the note to update
    const foundIndex = notes.findIndex((note) => note.id === req.params.id);

    if(foundIndex === -1){
        return res.status(400).json({
            error: "not found",
        });
    }

    // edit the note 
    const noteToUpdate = {...notes[foundIndex]}
    
    noteToUpdate.text = req.body.text || noteToUpdate.text;
    noteToUpdate.title = req.body.title || noteToUpdate.title;

    const updatedNotes = [
        ...notes.slice(0, foundIndex),
        noteToUpdate,
        ...notes.slice(foundIndex + 1)
    ]

    saveNotesToDb(updatedNotes);
    // return updated note
    res.json(noteToUpdate);

});

router.delete("/api/notes/:id", function (req, res) {

    // get all the notes
    const notes = getNotesFromDb();

    // filter out the note to delete
     const foundIndex = notes.findIndex((note) => note.id === req.params.id);

     if (foundIndex === -1) {
         return res.status(400).json({
             error: "not found",
         });
     }


    const updatedNotes = [
        ...notes.slice(0, foundIndex),
        ...notes.slice(foundIndex + 1),
    ];
    // save

    saveNotesToDb(updatedNotes);
    
    // return success
    res.json({
        data: 'ok'
    });

});



module.exports = router;