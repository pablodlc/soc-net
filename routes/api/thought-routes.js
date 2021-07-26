const router = require('express').Router();
const { addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controllers');

// /api/comments/<pizzaId>
router.route('/:userId').post(addThought);

// /api/comments/<pizzaId>/<commentId>
router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought);

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;

// I lovingly borrowed from the **pizza-hunt** project.  I deliberately left some artifacts from it if they're commented out.  `comments` are the equivalent of `thoughts` in this project, `pizza` is the equivalent of `user`, and `replies` are here `reactions`.