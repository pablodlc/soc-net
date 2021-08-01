const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controllers.js');

// GET all thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

// GET, UPDATE, and DELETE thoughts by id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

// POST a thought to a `/:userId` route
router
    .route('/:userId')
    .post(addThought);

// POST a reaction to the `/:thoughtId/reactions` route
router
    .route('/:thoughtId/reactions')
    .post(addReaction);

// DELETE reaction by id using `/:thoughtId/reactions/:reactionId` route
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;