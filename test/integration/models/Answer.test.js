var request = require('supertest');

describe('AnswerController', function() {

  describe('post answer', function() {
    it('save', function (done) {
      request(sails.hooks.http.app)
        .post('/answer')
        .send({ text: 'Test answer'})
        .expect(201, done);
    });
  });
  describe('post answer - no text', function() {
    it('save', function (done) {
      request(sails.hooks.http.app)
        .post('/answer')
        .send({})
        .expect(400, done);
    });
  });

});
