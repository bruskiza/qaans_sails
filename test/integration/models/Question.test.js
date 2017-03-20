describe('Question', function() {

  describe('#find()', function() {
    it('should check find function', function (done) {
      Question.find()
      .then(function(results) {
        // some tests
        done();
      })
      .catch(done);
    });
  });

});
