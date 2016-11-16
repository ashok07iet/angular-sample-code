(function () {
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
    var p1=new Person().setFirstName("ashok").setlastName("chourasia").setMiddleName("kumar");
    console.log("p1=  "+JSON.stringify(p1));
     
    var p2=new Person();
     p2.setFirstName("Ram");
     p2.setlastName("Singh");
     p2.setMiddleName("kumar");
      console.log("p2=  "+JSON.stringify(p2));
})();

