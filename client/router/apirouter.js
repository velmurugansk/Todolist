const {Router} = require('express');
const {saveData, getToDo, deleteData, updateData} = require('../controller/todoController');

const router = Router();

router.get("/", getToDo);
router.post("/Addtodo",saveData);
router.post("/updatetodo",updateData);
router.post("/deletetodo",deleteData);

module.exports = router;