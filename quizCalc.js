$(document).ready(function () {
    $("form").submit(calculate); // removed the extra () (9)
}); //moved closing tags to the right place (10)

    function calculate(event) {// added event parameter (5)
        event.preventDefault();
        let quiz1 = parseFloat($("input#quiz1").val());
        //changed from var to let & convert to number from string (6)
        let quiz2 = parseFloat($("input#quiz2").val());
        //changed from var to let & convert to number from string (7)
        let quiz3 = parseFloat($("input#quiz3").val());
        //changed from var to let & convert to number from string (8)
        let average = (quiz1 + quiz2 + quiz3) / 3;
        $("td#average").text(`${average.toFixed(1)}%`);
        //not a fix but changed syntax
        let min = Math.min(quiz1, quiz2, quiz3);
        // fixed syntax (11)
        let max = Math.max(quiz1, quiz2, quiz3);
        //fixed syntax (12)
        $("td#minMax").text(`${min}/${max}`);
        //added the td# to the selector (13)
        let gradeToPass = (73 * 4) - (quiz1 + quiz2 + quiz3);
        $("#quiz4grade").text(gradeToPass.toFixed(1));
        //fixed syntax for selector and .toFixed (14)
    }
