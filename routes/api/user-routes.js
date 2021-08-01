const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller.js');

// /api/pizzas
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// /api/pizzas/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);
    
module.exports = router;

// I lovingly borrowed code from **pizza-hunt**.  I left artifacts from that code in homage as long as it is commented out, such as the two occurrences of the word 'pizzas' here.