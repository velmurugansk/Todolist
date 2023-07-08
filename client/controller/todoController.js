const toDo = require('../models/toDo');

module.exports.getToDo = async (req, res) => {
    try {
        const todo = await toDo.find();
        res.send({status:true,data:todo});
    } catch (err) {
        res.send({status:false,message: err.message});
    }
} 

module.exports.saveData = async (req,res) => {
    try {
        const { title, content} = req.body;
        const todo =  toDo({
            title,
            content
        });

        const savedTodo = await todo.save();

        if(savedTodo) {
            res.send({status:true, message:'ToDo Added Successfully.'});
        }

    } catch (err) {
        res.send({status:false,message: err.message});
    }
}

module.exports.updateData = async (req,res) => {
    try {
        const {_id, title, content} = req.body;
        
        const updatedata =await toDo.findByIdAndUpdate(_id, {title,content});        

        if(updatedata) {
            res.send({status:true, message:'ToDo Updated Successfully.'});
        }

    } catch (err) {
        res.send({status:false,message: err.message});
    }
}

module.exports.deleteData = async (req,res) => {
    try {
        const {_id} = req.body;
        
        const deletedata =await toDo.findByIdAndDelete(_id);        

        if(deletedata) {
            res.send({status:true, message:'ToDo Deleted Successfully.'});
        }

    } catch (err) {
        res.send({status:false,message: err.message});
    }
}
