/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 04 Jan, 2019, 7:45 PM,
        @File-Name : home.js

 */

$(document).ready(function () {

    $.ajaxSetup({

        type : 'POST',
        timeout : 40000000000000

    });

    $("button#go_btn").click(function() {

        var tmp = $("input#key_sch");
        if (tmp.val() !== "") {

            $.post("/", { "key" : tmp.val() }).done((data) => { alert(String(data)); }).fail((xhr) => { alert(xhr.responseText); });

        }

    });

});