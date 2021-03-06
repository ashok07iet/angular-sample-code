/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
 var myApp=angular.module('myApp');
myApp.service('customerService',['$q',function($q){
        this.getCustomers = function () {
            var deffer = $q.defer();
            var customers=[
  {
    "_id": "585283cd48e60b528f97e617",
    "customerId": 1,
    "FirstName": "Marcus",
    "LastName": "HighTower",
    "Email": "Marcus.HighTower@acmecorp.com",
    "Address": "1234 Anywhere St.",
    "City": "Phoenix",
    "Zip": 85229,
    "Gender": "Male",
    "State": {
      "Name": " Arizona",
      "Abbreviation": "AZ"
    }
  },
  {
    "_id": "585283cd48e60b528f97e618",
    "customerId": 2,
    "FirstName": "Jesse3",
    "LastName": "Smith",
    "Email": "Jesse.Smith@gmail.com",
    "Address": "435 Main St.",
    "City": "Encinitas",
    "Zip": 85230,
    "Gender": "Female",
    "State": {
      "Abbreviation": "CA",
      "Name": "California"
    }
  },
  {
    "_id": "585283cd48e60b528f97e619",
    "customerId": 3,
    "FirstName": "Albert",
    "LastName": "Einstein",
    "Email": "Albert.Einstein@outlook.com",
    "Address": "1 Atomic St.",
    "City": "Seattle",
    "Zip": 85231,
    "Gender": "Male",
    "State": {
      "Name": "Washington",
      "Abbreviation": "WA"
    }
  },
  {
    "_id": "585283cd48e60b528f97e61a",
    "customerId": 4,
    "FirstName": "Dan",
    "LastName": "Wahlin",
    "Email": "Dan.Wahlin@yahoo.com",
    "Address": "85 Cedar Dr.",
    "City": "Chandler",
    "Zip": 85232,
    "Gender": "Male",
    "State": {
      "Name": " Arizona",
      "Abbreviation": "AZ"
    }
  },
  {
    "_id": "585283cd48e60b528f97e61b",
    "customerId": 5,
    "FirstName": "Ward",
    "LastName": "Bell",
    "Email": "Ward.Bell@gmail.com",
    "Address": "12 Ocean View St.",
    "City": "Dallas",
    "Zip": 85233,
    "Gender": "Male",
    "State": {
      "Name": "Texas",
      "Abbreviation": "TX"
    }
  },
  {
    "_id": "585283cd48e60b528f97e61c",
    "customerId": 6,
    "FirstName": "Brad",
    "LastName": "Green",
    "Email": "Brad.Green@gmail.com",
    "Address": "1600 Amphitheatre Parkway",
    "City": "Orlando",
    "Zip": 85234,
    "Gender": "Male",
    "State": {
      "Name": "Florida",
      "Abbreviation": "FL"
    }
  },
  {
    "_id": "585283cd48e60b528f97e61d",
    "customerId": 7,
    "FirstName": "Igor",
    "LastName": "Minar",
    "Email": "Igor.Minar@gmail.com",
    "Address": "1604 Amphitheatre Parkway",
    "City": "Carey",
    "Zip": 85235,
    "Gender": "Male",
    "State": {
      "Name": "North Carolina",
      "Abbreviation": "NC"
    }
  },
  {
    "_id": "585283cd48e60b528f97e61e",
    "customerId": 8,
    "FirstName": "Miško",
    "LastName": "Hevery",
    "Email": "Miško.Hevery@gmail.com",
    "Address": "1607 Amphitheatre Parkway",
    "City": "Anaheim",
    "Zip": 85236,
    "Gender": "Male",
    "State": {
      "Name": "California",
      "Abbreviation": "CA"
    }
  },
  {
    "_id": "585283cd48e60b528f97e61f",
    "customerId": 9,
    "FirstName": "Michelle",
    "LastName": "Avery",
    "Email": "Michelle.Avery@acmecorp.com",
    "Address": "346 Cedar Ave.",
    "City": "Dallas",
    "Zip": 85237,
    "Gender": "Female",
    "State": {
      "Name": "Texas",
      "Abbreviation": "TX"
    }
  },
  {
    "_id": "585283cd48e60b528f97e620",
    "customerId": 10,
    "FirstName": "Heedy",
    "LastName": "Wahlin",
    "Email": "Heedy.Wahlin@hotmail.com",
    "Address": "4576 Main St.",
    "City": "New York",
    "Zip": 85238,
    "Gender": "Female",
    "State": {
      "Name": "New York",
      "Abbreviation": "NY"
    }
  },
  {
    "_id": "585283cd48e60b528f97e621",
    "customerId": 11,
    "FirstName": "Thomas",
    "LastName": "Martin",
    "Email": "Thomas.Martin@outlook.com",
    "Address": "964 Point St.",
    "City": "White Plains",
    "Zip": 85239,
    "Gender": "Male",
    "State": {
      "Name": "New York",
      "Abbreviation": "NY"
    }
  },
  {
    "_id": "585283cd48e60b528f97e622",
    "customerId": 12,
    "FirstName": "Jean",
    "LastName": "Martin",
    "Email": "Jean.Martin@outlook.com",
    "Address": "98756 Center St.",
    "City": "Las Vegas",
    "Zip": 85240,
    "Gender": "Female",
    "State": {
      "Name": " Nevada",
      "Abbreviation": "NV"
    }
  },
  {
    "_id": "585283cd48e60b528f97e623",
    "customerId": 13,
    "FirstName": "Robin",
    "LastName": "Cleark",
    "Email": "Robin.Cleark@acmecorp.com",
    "Address": "35632 Richmond Circle Apt B",
    "City": "Los Angeles",
    "Zip": 85241,
    "Gender": "Female",
    "State": {
      "Name": "California",
      "Abbreviation": "CA"
    }
  },
  {
    "_id": "585283cd48e60b528f97e624",
    "customerId": 14,
    "FirstName": "Juan",
    "LastName": "Paulo",
    "Email": "Juan.Paulo@yahoo.com",
    "Address": "2352 Angular Way",
    "City": "Portland",
    "Zip": 85242,
    "Gender": "Male",
    "State": {
      "Name": "Oregon",
      "Abbreviation": "OR"
    }
  },
  {
    "_id": "585283cd48e60b528f97e625",
    "customerId": 15,
    "FirstName": "Gene",
    "LastName": "Thomas",
    "Email": "Gene.Thomas@gmail.com",
    "Address": "23566 Directive Pl.",
    "City": "Seattle",
    "Zip": 85243,
    "Gender": "Male",
    "State": {
      "Name": "Washington",
      "Abbreviation": "WA"
    }
  },
  {
    "_id": "585283cd48e60b528f97e626",
    "customerId": 16,
    "FirstName": "Pinal",
    "LastName": "Dave",
    "Email": "Pinal.Dave@gmail.com",
    "Address": "235235 Yaz Blvd.",
    "City": "Houston",
    "Zip": 85244,
    "Gender": "Male",
    "State": {
      "Name": "Texas",
      "Abbreviation": "TX"
    }
  },
  {
    "_id": "585283cd48e60b528f97e627",
    "customerId": 17,
    "FirstName": "Fred",
    "LastName": "Roberts",
    "Email": "Fred.Roberts@outlook.com",
    "Address": "7656 Crescent St.",
    "City": "Chicago",
    "Zip": 85245,
    "Gender": "Male",
    "State": {
      "Name": "Illinois",
      "Abbreviation": "IL"
    }
  },
  {
    "_id": "585283cd48e60b528f97e628",
    "customerId": 18,
    "FirstName": "Tina",
    "LastName": "Roberts",
    "Email": "Tina.Roberts@outlook.com",
    "Address": "76543 Moon Ave.",
    "City": "Atlanta",
    "Zip": 85246,
    "Gender": "Female",
    "State": {
      "Name": "Georgia",
      "Abbreviation": "GA"
    }
  },
  {
    "_id": "585283cd48e60b528f97e629",
    "customerId": 19,
    "FirstName": "Cindy",
    "LastName": "Jamison",
    "Email": "Cindy.Jamison@gmail.com",
    "Address": "84533 Hardrock St.",
    "City": "Chandler",
    "Zip": 85247,
    "Gender": "Female",
    "State": {
      "Name": " Arizona",
      "Abbreviation": "AZ"
    }
  },
  {
    "_id": "585283cd48e60b528f97e62a",
    "customerId": 20,
    "FirstName": "Robyn",
    "LastName": "Flores",
    "Email": "Robyn.Flores@yahoo.com",
    "Address": "5687534 Jefferson Way",
    "City": "Buffalo",
    "Zip": 85248,
    "Gender": "Female",
    "State": {
      "Name": "New York",
      "Abbreviation": "NY"
    }
  },
  {
    "_id": "585283cd48e60b528f97e62b",
    "customerId": 21,
    "FirstName": "Jeff",
    "LastName": "Wahlin",
    "Email": "Jeff.Wahlin@gmail.com",
    "Address": "346346 Blue Pl.",
    "City": "Albuquerque",
    "Zip": 85249,
    "Gender": "Male",
    "State": {
      "Name": " Arizona",
      "Abbreviation": "AZ"
    }
  },
  {
    "_id": "585283cd48e60b528f97e62c",
    "customerId": 22,
    "FirstName": "Danny",
    "LastName": "Wahlin",
    "Email": "Danny.Wahlin@gmail.com",
    "Address": "23423 Adams St.",
    "City": "Boise",
    "Zip": 85250,
    "Gender": "Male",
    "State": {
      "Name": "Idaho",
      "Abbreviation": "ID"
    }
  },
  {
    "_id": "585283cd48e60b528f97e62d",
    "customerId": 23,
    "FirstName": "Elaine",
    "LastName": "Jones",
    "Email": "Elaine.Jones@yahoo.com",
    "Address": "633 Main St.",
    "City": "Salt Lake City",
    "Zip": 85251,
    "Gender": "Female",
    "State": {
      "Name": "Utah",
      "Abbreviation": "UT"
    }
  },
  {
    "_id": "58552f7986d0211d40cff18a",
    "customerId": 46,
    "FirstName": "ashok",
    "LastName": "kumar",
    "Email": "ashok@gmail.com",
    "Address": "btm",
    "City": "bangalore",
    "Zip": 670078,
    "Gender": "M",
    "__v": 0,
    "State": {
      "Name": "KA",
      "Abbreviation": "KA"
    }
  },
  {
    "_id": "58553243bc43a3289449b5d6",
    "customerId": 67,
    "FirstName": "ashok",
    "LastName": "dfrt",
    "Email": "asdf",
    "Address": "btm",
    "City": "ndfrtg",
    "Zip": 56789,
    "Gender": "m",
    "__v": 0,
    "State": {
      "Name": "mdfg",
      "Abbreviation": "ka"
    }
  },
  {
    "_id": "58553251bc43a3289449b5d7",
    "customerId": 67,
    "FirstName": "ashok",
    "LastName": "dfrt",
    "Email": "asdf",
    "Address": "btm",
    "City": "ndfrtg",
    "Zip": 56789,
    "Gender": "m",
    "__v": 0,
    "State": {
      "Name": "mdfg",
      "Abbreviation": "ka"
    }
  },
  {
    "_id": "58553392bc43a3289449b5db",
    "customerId": 98,
    "FirstName": "fhg",
    "LastName": "hhfg",
    "Email": "hgfghfgh",
    "Address": "hghgh",
    "City": "hghgh",
    "Zip": 45678,
    "Gender": "gffffggh",
    "__v": 0,
    "State": {
      "Name": "hgghf",
      "Abbreviation": "sassdasd"
    }
  },
  {
    "_id": "5855345abc43a3289449b5dc",
    "customerId": 87,
    "FirstName": "hfdhfg",
    "LastName": "hghg",
    "Email": "hghgjg",
    "Address": "hghg",
    "City": "hghgg",
    "Zip": 6545,
    "Gender": "g",
    "__v": 0,
    "State": {
      "Name": "ggjg",
      "Abbreviation": "hghgjgh"
    }
  },
  {
    "_id": "5858a2395904f32b9c95e5b3",
    "customerId": 89,
    "FirstName": "fddfd",
    "LastName": "gdgdf",
    "Email": "gdd",
    "Address": "gfddf",
    "City": "gfdgdf",
    "Zip": 67890,
    "Gender": "gfd",
    "__v": 0,
    "State": {
      "Name": "dgfgf",
      "Abbreviation": "gdgffgg"
    }
  }
];
            deffer.resolve(customers);
            return deffer.promise;
        };
}]);
   
})();

