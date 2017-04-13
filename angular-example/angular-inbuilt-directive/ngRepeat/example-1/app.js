/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    angular.module("myApp", [])
            .controller('simpleCtrl', [function () {
                    var self = this;
                    self.students = [
                        new Student("ram", 101),
                        new Student("mohan", 102),
                        new Student("sohan", 104)
                    ];
                    self.delete = function (index) {
                        self.students.splice(index, 1);
                    };
                }])
            .controller('mainCtrl', [function () {
                    var self=this;
                    self.things = [
                        {values: ['a', 'b', 'c']},
                        {values: ['d', 'e', 'f']}
                    ];
                }]);
    function Student(name, studentId) {
        this.name = name;
        this.studentId = studentId;
    }
})();

