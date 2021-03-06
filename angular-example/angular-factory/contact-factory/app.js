(function() {
    var module = angular.module('myApp', []);
    module.factory('ContactService', function() {
        //to create unique contact id
        var uid = 1;

        //contacts array to hold list of all contacts
        var contacts = [{
            id: 0,
            'name': 'Viral',
            'email': 'hello@gmail.com',
            'phone': '123-2343-44'
        }];

        //save method create a new contact if not already exists
        //else update the existing object
        return {
            save: function(contact) {
                if (!contact.id) {
                    //if this is new contact, add it in contacts array
                    contact.id = uid++;
                    contacts.push(contact);
                } else {
                    //for existing contact, find this contact using id
                    //and update it.
                    for (var i in contacts) {
                        if (contacts[i].id === contact.id) {
                            contacts[i] = contact;
                        }
                    }
                }

            },

            //simply search contacts list for given id
            //and returns the contact object if found
                get: function(id) {
                for (var i in contacts) {
                    if (contacts[i].id === id) {
                        return contacts[i];
                    }
                }

            },

            //iterate through contacts list and delete
            //contact if found
                delete: function(id) {
                for (var i in contacts) {
                    if (contacts[i].id === id) {
                        contacts.splice(i, 1);
                    }
                }
            },

            //simply returns the contacts list
                list: function() {
                return contacts;
            }
        };
    });
    module.controller('ContactController', function($scope, ContactService) {

        $scope.contacts = ContactService.list();

        $scope.saveContact = function() {
            ContactService.save($scope.newcontact);
            $scope.newcontact = {};
        };


        $scope.delete = function(id) {

            ContactService.delete(id);
            if ($scope.newcontact.id === id) $scope.newcontact = {};
        };


        $scope.edit = function(id) {
            $scope.newcontact = angular.copy(ContactService.get(id));
        };
    });
})();
