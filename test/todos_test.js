var expect = require('chai').expect;
var request = require('supertest');
var app = require('../index');

describe('GET /todos', function() {
  it('should return a 200 response', function(done) {
    request(app).get('/todos')
    .expect(200, done);
  });

  it('should return a 200 response', function (done) {
    request(app).get('/todos/587749c69ea76d3857b8bb39')
    .expect(200, done)
  })
});

describe('POST /todos', function() {
  it('should create a todos and return it', function(done) {
    request(app).post('/todos')
    .set("Accept", "application/json")
    .send({
      name: 'for delete',
      description: 'test if post function is working',
      completed: false
    })
    .expect(301, done);
  });
});

describe('PUT /todos/:id', function() {
  it('find a todos by id and update it', function(done) {
    request(app).put('/todos/5876f40f9e28c625c342182c')
    .set("Accept", "application/json")
    .send({
      description: 'testing update function eighth time',
      completed: true
    })
    .expect(200, done);
  });
});

describe('DELETE /todos/', function () {
  it('should return a 200 response on deleting a valid todo', function (done) {
    request(app).delete('/todos/587c648c311a0408dac1451c')
    .end(function (err, response) {
      expect(200, done);
      done();
    })
  })

  // it('should return a 200 response on deleting a valid todo with name', function (done) {
  //   request(app).delete('/todos/{ name: for delete}')
  //   .end(function (err, response) {
  //     expect(200, done);
  //     done();
  //   })
  // })

})
