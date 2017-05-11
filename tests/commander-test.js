'use strict';

let gc = require('../src/gulp-commander');

let chai = require('chai');
let expect = chai.expect; // we are using the "expect" style of Chai

describe('GulpCommander', function() {
    it('addTask should add one element to tasks list and none to watch list', function() {
        gc.addTask('task-1');
        expect(gc.getTasks().length).to.equal(1);
        expect(gc.getWatch().length).to.equal(0);
    });

    it('addWatch should add one element to watch list and none to task list', function () {
        gc.addWatch('watch-1');
        expect(gc.getTasks().length).to.equal(1);
        expect(gc.getWatch().length).to.equal(1);
    });

    it('addTask should add another element to tasks list and none to watch list', function() {
        gc.addTask('task-2');
        expect(gc.getTasks().length).to.equal(2);
        expect(gc.getWatch().length).to.equal(1);
    });

    it('getList must return one task and one watch', function(){
        let list = gc.getList();

        expect(list.tasks[0]).to.equal('task-1');
        expect(list.tasks[1]).to.equal('task-2');
        expect(list.watch[0]).to.equal('watch-1');
    });

    it('addTask accept arrays too', () => {
        gc.addTask(['array-1', 'array-2']);

        let list = gc.getList();

        expect(list.tasks[2]).to.equal('array-1');
        expect(list.tasks[3]).to.equal('array-2');
    });

    it('addWatch accept arrays too', () => {
        gc.addWatch(['array-1', 'array-2']);

        let list = gc.getList();

        expect(list.watch[1]).to.equal('array-1');
        expect(list.watch[2]).to.equal('array-2');
    });
});
