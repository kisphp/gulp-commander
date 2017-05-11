'use strict';

let colors = require('colors');

class GulpCommander {

    constructor() {
        this.gulp_tasks = [];
        this.gulp_watch = [];
    }

    /**
     * @param {String} taskName
     */
    addTask(taskName) {
        if (typeof taskName === 'object') {
            taskName.forEach((task) => {
                this.addTask(task);
            });

            return null;
        }
        this.gulp_tasks.push(taskName);
    }

    /**
     * @param {String} watchName
     */
    addWatch(watchName) {
        if (typeof watchName === 'object') {
            watchName.forEach((watch) => {
                this.addWatch(watch);
            });

            return null;
        }
        this.gulp_watch.push(watchName);
    }

    /**
     * @returns {Array}
     */
    getTasks() {
        return this.gulp_tasks;
    }

    /**
     * @returns {Array}
     */
    getWatch() {
        return this.gulp_watch;
    }

    getList() {
        return {
            tasks: this.gulp_tasks,
            watch: this.gulp_watch
        };
    }

    displayList() {
        let list = this.getList();

        let tasks_info = list.tasks.join(', ');
        let watch_info = list.watch.join(', ');

        console.log('Tasks: '.cyan + tasks_info.green);
        console.log('Watch: '.cyan + watch_info.green);
    }
}

module.exports = new GulpCommander();
