const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: 'You must have a username to play',
            unique: 'Not very original. Try not to append a ♋ symbol if you\'re hoping an employer may see this.',
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: 'I hope you\'re not sharing your email account with your mother, Norman.',
            trim: true,
            match: /.+\@.+\..+/
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],

    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        // prevents virtuals from creating duplicate of _id as `id`
        id: false
    }
);

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length + 1;
});

const Pizza = model('Pizza', PizzaSchema);

module.exports = Pizza;
