(function() {

    var day = {
        "sun": 1,
        "Mon": 2,
        "tue": 3,
        "wed": 4,
        "thu": 5,
        "friday": 6,
        "saturday": 7
    };
    function getDayName(dayname) {
        document.write("day no:::" + day[dayname]);


    }
    getDayName("Mon");
})();