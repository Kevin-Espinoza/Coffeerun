(function (window) {
    'use strict';
    // Code will go here
    var App = window.App || {};
    
    class DataStore {
        constructor() {
            console.log('running the DataStore constructor');
            this.data = {};
            // returns undefined
        }

        add(key, val) { this.data[key] = val; }
        get(key) { return this.data[key]; }
        getAll() { return this.data; }
        remove(key) { delete this.data[key]; }

        static runTests(ds) {
            // var ds = new App.DataStore;
            ds.add('m@bond.com', 'tea');
            ds.add('james@bond.com', 'espresso');
            console.log(ds.getAll());
            ds.remove('james@bond.com');
            console.log('Printing all after removing james@bond.com: ' + ds.getAll());
            console.log('Printing m@bond.com: ' + ds.get('m@bond.com'));
            console.log('Printing james@bond.com: ' + ds.get('james@bond.com'));
        }
    }

    App.DataStore = DataStore;
    window.App = App;

   })(window);
   