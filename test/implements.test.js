/* global describe, before, after, it */

'use strict';

var expect = require('chai').expect;

module.exports = function(App) {

  describe('App interface', function() {

    describe('it should have all required static methods:', function() {
      it('cleanQuery', function() {
        expect(App.cleanQuery).to.be.a('function');
        expect(App.cleanQuery.length).to.equal(1);
      });
      it('deleteExperiment', function() {
        expect(App.deleteExperiment).to.be.a('function');
        expect(App.deleteExperiment.length).to.equal(2);
      });
      it('find', function() {
        expect(App.find).to.be.a('function');
        expect(App.find.length).to.equal(3);
      });
      it('findOne', function() {
        expect(App.findOne).to.be.a('function');
        expect(App.findOne.length).to.equal(2);
      });
      it('findAndUpdate', function() {
        expect(App.findAndUpdate).to.be.a('function');
        expect(App.findAndUpdate.length).to.equal(3);
      });
      it('updateExperiment', function() {
        expect(App.updateExperiment).to.be.a('function');
        expect(App.updateExperiment.length).to.equal(3);
      });
    });

    describe('it should have required prototypal methods:', function() {
      it('createExperiment', function() {
        expect(App.prototype.createExperiment).to.be.a('function');
        expect(App.prototype.createExperiment.length).to.equal(2);
      });
      it('getDoc', function() {
        expect(App.prototype.getDoc).to.be.a('function');
        expect(App.prototype.getDoc.length).to.equal(1);
      });
      it('getExperiment', function() {
        expect(App.prototype.getExperiment).to.be.a('function');
        expect(App.prototype.getExperiment.length).to.equal(1);
      });
      it('getExperimentsObj', function() {
        expect(App.prototype.getExperimentsObj).to.be.a('function');
        expect(App.prototype.getExperimentsObj.length).to.equal(0);
      });
      it('getSerialized', function() {
        expect(App.prototype.getSerialized).to.be.a('function');
        expect(App.prototype.getSerialized.length).to.equal(0);
      });
      it('save', function() {
        expect(App.prototype.save).to.be.a('function');
        expect(App.prototype.save.length).to.equal(1);
      });
      it('serialize', function() {
        expect(App.prototype.serialize).to.be.a('function');
        expect(App.prototype.serialize.length).to.equal(1);
      });
    });

  });

};
