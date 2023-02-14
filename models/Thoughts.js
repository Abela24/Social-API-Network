const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');




const ThoughtSchema = new Schema(
    {
        thoughtText:
        {
            type: String,
            required: true,
            minlength:1,
            maxlength: 280,
        },

        createdAt:
        {
            type:Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)

        },

        userName:
        {
            type: String,
            required: true,

        },

        reactions:
        [
            ReactionSChema
        ]

    },

    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
 
    }
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

// creates Thought model using Schema 
const Thought = model('Thought', ThoughtSchema);
//Exports Thought model




module.exports = Thought;
