var request = require('supertest');

describe('QuestionController', function() {

  describe('post question', function() {
    it('save', function (done) {
      request(sails.hooks.http.app)
        .post('/question')
        .send({ text: 'Hello test question'})
        .expect(201, done);
    });
  });
  describe('post question - no text', function() {
    it('save', function (done) {
      request(sails.hooks.http.app)
        .post('/question')
        .send({})
        .expect(400, done);
    });
  });

});
