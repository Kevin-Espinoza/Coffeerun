(function (window) {
    'use strict';
    // Code will go here
    var App = window.App || {};
    
    class Truck {
        constructor(truckID, db) {
            console.log('running the Truck constructor');
            this.truckID = truckID;
            this.db = db;
            
        }

        createOrder(order) {
            console.log('Adding order for ' + order.emailAddress);
            return this.db.add(order.emailAddress, order);
        }

        removeOrder(order) {
            console.log('Adding order for ' + order.emailAddress);
            return this.db.remove(order.emailAddress);
        }

        deliverOrder(customerId) {
            console.log('Delivering order for ' + customerId);
            this.db.remove(customerId);
        }

        printOrders() {
            var customerIdArray = Object.keys(this.db.getAll());
            customerIdArray.forEach(function(id) {
                console.log(this.db.get(id));
            }.bind(this));
        }

        static runTests(truck) {
            // var truck = new App.Truck('007', new App.DataStore());
            truck.createOrder({ emailAddress: 'dr@no.com', coffee: 'decaf'});
            truck.createOrder({ emailAddress: 'me@goldfinger.com', coffee: 'double mocha'});
            truck.createOrder({ emailAddress: 'm@bond.com', coffee: 'earl grey'});
            console.log('truck.db says: ' + truck.db);

            truck.deliverOrder('m@bond.com');
            truck.deliverOrder('dr@no.com');
            truck.printOrders();

            truck.deliverOrder('me@no.com');
            truck.printOrders();
        }
    }

    App.Truck = Truck;
    window.App = App;

   })(window);
   