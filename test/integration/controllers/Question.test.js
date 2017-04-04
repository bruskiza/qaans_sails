var request = require('supertest');

describe('QuestionController', function() {

  describe('add a question', function() {
    it('save', function (done) {
      request(sails.hooks.http.app)
        .post('/question')
        .send({ text: 'Hello test question'})
        .expect(201, done);
    });
  });
  describe('add a question - no text', function() {
    it("doesn't save a question", function (done) {
      request(sails.hooks.http.app)
        .post('/question')
        .send({})
        .expect(400, done);
    });
  });
  describe('get questions', function() {
    it('returns', function (done) {
      request(sails.hooks.http.app)
        .get('/question')
        .expect(200, done);
    });
  });
  describe('delete a question', function() {
    it('delete', function (done) {
      request(sails.hooks.http.app)
        .delete('/question')
        .send({ id: 6 })
        .expect(200, done);
    });
  });
  describe("delete a question that doesn't exist", function() {
    it('delete', function (done) {
      request(sails.hooks.http.app)
        .delete('/question')
        .send({ id: 6 })
        .expect(404, done);
    });
  });


});
