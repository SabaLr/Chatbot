var parametre;

function PushFromPage1() {
    $(document).ready(function () {
        $.ajax("page2.html").done(function (response) {
            $("#result").html(response);
        });
    });
}

function PushFromPage2() {
    $(document).ready(function () {
        $.ajax("page3.html").done(function (response) {
            $("#result").html(response);
        });
    });
}

function PushFromPage3() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    if (min < 10) {
        min = "0" + min;
    }
    var paragraph = document.getElementById("para").innerHTML;
    var msgT = document.getElementById("time").innerHTML;
    $(document).ready(function () {
        $.ajax("page4.html").done(function (response) {
            $("#result").html(response);
            document.getElementById("responseA").classList.add("fa-frown-o");
            document.getElementById("paraAffiche").innerHTML = paragraph;
            document.getElementById("responseATime").innerHTML = hr + ":" + min;
            document.getElementById("msgTime").innerHTML = msgT;
        });
    });
}

function PushFromPage3_1() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    if (min < 10) {
        min = "0" + min;
    }
    var paragraph = document.getElementById("para").innerHTML; // ou mchina recupina ga3 dak l code li kayn f had div
    var msgT = document.getElementById("time").innerHTML;
    $(document).ready(function () {
        $.ajax("page5.html").done(function (response) {
            $("#result").html(response);
            document.getElementById("responseA").classList.add("fa-smile-o");
            document.getElementById("paraAffiche").innerHTML = paragraph;
            document.getElementById("responseATime").innerHTML = hr + ":" + min;
            document.getElementById("msgTime").innerHTML = msgT;
        });
    });
}

function PushFromPage3_2() {
    // var params = { para: "fa-meh-o" };
    // parametre = $.param(params);
    // var ArryApra = parametre.split("=");
    // // alert(ArryApra[1]);
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    if (min < 10) {
        min = "0" + min;
    }
    var paragraph = document.getElementById("para").innerHTML;
    var msgT = document.getElementById("time").innerHTML;
    $(document).ready(function () {
        $.ajax("page5.html").done(function (response) {
            $("#result").html(response);
            document.getElementById("responseA").classList.add("fa-meh-o");
            document.getElementById("responseATime").innerHTML = hr + ":" + min;
            document.getElementById("paraAffiche").innerHTML = paragraph; // ou mchina 7atinah f dik div li kana sayabna
            document.getElementById("msgTime").innerHTML = msgT;
        });
    });
}

function PushFromPage5_1() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    if (min < 10) {
        min = "0" + min;
    }
    var resultPage5 = document.getElementById("resultPage5").innerHTML; //nafs haja hna had result page majmou3a fiha les deux historique hite kana jma3nahom
    var paragraph = document.getElementById("para").innerHTML; // haya fin recupiranaha
    var msgT = document.getElementById("time").innerHTML;
    $(document).ready(function () {
        $.ajax("page6.html").done(function (response) {
            $("#result").html(response);
            document.getElementById("resultPage6_1").classList.add("d-block");
            document.getElementById("responseATime_1").innerHTML = hr + ":" + min;

            document.getElementById("resultPage6_1").classList.add("btn");
            document.getElementById("resultPage6_2").classList.add("d-none");
            document.getElementById("paraPage6_1").innerHTML = resultPage5;
            document.getElementById("paraPage6_2").innerHTML = paragraph;
            document.getElementById("msgTime").innerHTML = msgT;
        });
    });
}

function PushFromPage5_2() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    if (min < 10) {
        min = "0" + min;
    }
    var resultPage5 = document.getElementById("resultPage5").innerHTML;
    var paragraph = document.getElementById("para").innerHTML;
    var msgT = document.getElementById("time").innerHTML;
    $(document).ready(function () {
        $.ajax("page6.html").done(function (response) {
            $("#result").html(response);
            document.getElementById("resultPage6_2").classList.add("d-block");
            document.getElementById("resultPage6_2").classList.add("btn");
            document.getElementById("resultPage6_1").classList.add("d-none");
            document.getElementById("responseATime_2").innerHTML = hr + ":" + min;

            document.getElementById("paraPage6_1").innerHTML = resultPage5;
            document.getElementById("paraPage6_2").innerHTML = paragraph;
            document.getElementById("msgTime").innerHTML = msgT;


        });
    });
}

function PushFromPage6() {
    $(document).ready(function () {
        $.ajax("page7.html").done(function (response) {
            $("#result").html(response);
        });
    });
}