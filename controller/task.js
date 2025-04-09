export const readTasks = async (req,res) => {

    return res.status(200).json({
        message: 'Successfully fetched tasks',
        data: {task: "task 1"}, 
    });
}

export const addTasks = async (req,res) => {
    return res.send('<h1>fssfdsf</h1>');
}

export const updateTask = async (req,res) => {
    return res.send('UPDATE tasks');
}

export const deleteTask = async (req,res) => {
    const {id} = req.params;


    // delete database from this id



    return res.json({   message: `Successfully deleted task `, id });
    // return res.status(200).json({
}

// NEST = BACKEND
// NEXT = FRONTEND