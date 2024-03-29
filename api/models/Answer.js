/**
 * Answer.js
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
    parentItem: {
      model: 'question',
      via: 'id'
    },
    text: {
      type: 'string',
      required: true
    },
    upvoteCount: {
      type: 'integer',
      defaultsTo: 0
    }

  }
};
