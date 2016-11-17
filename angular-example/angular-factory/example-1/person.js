/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Person() {
        this.setlastName=function(lastName){
            this.newLastName=lastName;
            return this;
        };
        this.setFirstName=function(firstName){
            this.newFirstName=firstName;
            return this;
        };
        this.setMiddleName=function(middleName){
            this.newMiddleName=middleName;
            return this;
        };
    }

