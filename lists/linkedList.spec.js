var expect = require('chai').expect;
var sinon = require('sinon');
var LinkedList = require('./linkedList.js').LinkedList;
var Node = require('./linkedList.js').Node;

describe('Linked List', function(){
    var sandbox;
    beforeEach(function() {
        sandbox = sinon.sandbox.create();
        sandbox.stub(console, "log");
    });
    afterEach(function() {
        sandbox.restore();
    });
    describe('Inserting Nodes:', function(){
        it('Correctly inserts nodes into Linked List in order', function(){
            var pokemon = new LinkedList();
            pokemon.insert("Pikachu", "head");
            pokemon.insert("Kadabra", "Pikachu");
            pokemon.insert("Squirtle", "Kadabra");
            pokemon.display();
            sinon.assert.calledThrice(console.log);
            sinon.assert.calledWith(console.log,"Pikachu");
            sinon.assert.calledWith(console.log,"Kadabra");
            sinon.assert.calledWith(console.log,"Squirtle");
        })
    })
})
