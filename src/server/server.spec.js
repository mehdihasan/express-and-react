import {addNewTask, updateTask} from './server'

(async function autoOperation() {

    await addNewTask({
        name: "My task created form express server - this might be the new tsk",
        id: "1323243445"
    });

    await updateTask({
        id: "1323243445",
        name: "My task created form express server this might - UPDATED!!!"
    });

}) ();
