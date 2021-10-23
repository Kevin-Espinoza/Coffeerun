(function (window) {
    'use strict';
    // Code will go here
    var App = window.App || {};
    var $ = window.jQuery;
    
    class RemoteDataStore {
        constructor(url) {
            console.log('running the RemoteDataStore constructor');
            if(!url){ throw new Error('No remote URL supplied.'); }

            this.serverUrl = url;
            // returns undefined
        }

        add(key, val) {
            return $.post(this.serverUrl, val, function(serverResponse) {
                console.log(serverResponse);
            });
        }
        get(key, cb) { 
            return $.get(this.serverUrl, '/' + key, function(serverResponse) {
                if(cb) {
                    console.log(serverResponse);
                    cb(serverResponse);    
                }
            });  
        }

        getAll(cb) { 
            return $.get(this.serverUrl, function(serverResponse) {
                if(cb) {
                    console.log(serverResponse);
                    cb(serverResponse);
                }
            });
        }

        remove(key) { return $.ajax(this.serverUrl + '/' + key, { type: 'DELETE' }); }
           

        // static runTests(ds) {
        //     // var ds = new App.DataStore;
        //     ds.add('m@bond.com', 'tea');
        //     ds.add('james@bond.com', 'espresso');
        //     console.log(ds.getAll());
        //     ds.remove('james@bond.com');
        //     console.log('Printing all after removing james@bond.com: ' + ds.getAll());
        //     console.log('Printing m@bond.com: ' + ds.get('m@bond.com'));
        //     console.log('Printing james@bond.com: ' + ds.get('james@bond.com'));
        // }
    }

    App.RemoteDataStore = RemoteDataStore;
    window.App = App;

    // Console test: 
    // var remoteDS = new App.RemoteDataStore("http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders");
    // remoteDS.add('einstein@princeton.com', {emailAddress: 'einy@princeton.com', coffee: 'expresso', strength: '1'});

   })(window);
   