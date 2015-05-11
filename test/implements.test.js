/* global describe, before, after, it */

'use strict';

var expect = require('chai').expect;

module.exports = function(App) {

  describe('App interface', function() {

    describe('it should have all required static methods:', function() {
      it('find', function() {
        expect(App.find).to.be.a('function');
        expect(App.find.length).to.equal(2);
      });
      it('findOne', function() {
        expect(App.findOne).to.be.a('function');
        expect(App.findOne.length).to.equal(2);
      });
      it('findAndUpdate', function() {
        expect(App.findAndUpdate).to.be.a('function');
        expect(App.findAndUpdate.length).to.equal(3);
      });
    });

    describe('it should have required prototypal methods:', function() {
      it('addExperiment', function() {
        expect(App.prototype.addExperiment).to.be.a('function');
        expect(App.prototype.addExperiment.length).to.equal(1);
      });
      it('createExperiment', function() {
        expect(App.prototype.createExperiment).to.be.a('function');
        expect(App.prototype.createExperiment.length).to.equal(1);
      });
      it('save', function() {
        expect(App.prototype.save).to.be.a('function');
        expect(App.prototype.save.length).to.equal(1);
      });
      it('serialize', function() {
        expect(App.prototype.serialize).to.be.a('function');
        expect(App.prototype.serialize.length).to.equal(0);
      });
    });

  });

};
