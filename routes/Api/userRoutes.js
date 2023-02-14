const router = require('express').Router();

const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController');

//GET all and POST 
router.route('/').get(getUser).post(createUser);

// GET one user, 
//PUT and DELETE by the user's ID
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);



module.exports = router;
