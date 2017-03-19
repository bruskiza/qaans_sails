/**
 * Question.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    acceptedAnswer: {
      model: 'answer',
      via: 'id'
    },
    answerCount: {
      type: 'integer',
      defaultsTo: 0
    },
    downvoteCount: {
      type: 'integer',
      defaultsTo: 0

    },
    upvoteCount: {
      type: 'integer',
      defaultsTo: 0

    },
    answers: {
      collection: 'answer',
      via: 'id'
    },
    text: {
      type: 'string',
      required: true
    }


  }
};
