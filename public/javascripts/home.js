/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 04 Jan, 2019, 7:45 PM,
        @File-Name : home.js

 */

$(document).ready(function () {

    $("button#go_btn").click(function() {

        var tmp = $("input#key_sch");
        if (tmp.val() !== "") {

            $.post("/", { "key" : tmp.val() }, function(data) {

                alert(String(data));

            }, "text");

        }

    });

});