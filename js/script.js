let foods = ["Shorva", "Mastava", "Moshhurda", "Makaron-Shurva", "Qaynatma", "Moshkichir", "Grechka", "Grechka-shurva", "Gusala-xurak", "Indonak", "Makaron-dim", "Kapusta-dim", "Bolgarskiy", "Xonim", "Kartoshka-dim", "Gorox-shurva", "Moxora"]
let button = $("#btn")
let body = $("#body")
button.click(function() {
    let randomIndex = Math.floor(Math.random() * 17)
        // let randomfood = alert(foods[randomIndex])
    $("#food__index").html(foods[randomIndex])
    if (1 > randomIndex) {
        body.css("background-image", "url('./img/shorva.jpg')")
    } else if (2 > randomIndex) {
        body.css("background-image", "url('./img/mastava.jpg')")
    } else if (3 > randomIndex) {
        body.css("background-image", "url('./img/moshhurda.jpg')")
    } else if (4 > randomIndex) {
        body.css("background-image", "url('./img/makaron-shurva.jpg')")
    } else if (5 > randomIndex) {
        body.css("background-image", "url('./img/qaynatma.jpg')")
    } else if (6 > randomIndex) {
        body.css("background-image", "url('./img/moshkichir.jpg')")
    } else if (7 > randomIndex) {
        body.css("background-image", "url('./img/grechka-shurva.jpg')")
    } else if (8 > randomIndex) { //grechka-shurva
        body.css("background-image", "url('./img/grechka.jpg')")
    } else if (9 > randomIndex) {
        body.css("background-image", "url('./img/gusala.jpg')")
    } else if (10 > randomIndex) {
        body.css("background-image", "url('./img/indonak.jpg')")
    } else if (11 > randomIndex) {
        body.css("background-image", "url('./img/makaron.jpg')")
    } else if (12 > randomIndex) {
        body.css("background-image", "url('./img/kapusta-shorva.jpg')")
    } else if (13 > randomIndex) {
        body.css("background-image", "url('./img/galupsi.jpg')")
    } else if (14 > randomIndex) {
        body.css("background-image", "url('./img/xonim.jpg')")
    } else if (15 > randomIndex) {
        body.css("background-image", "url('./img/kartoshka-dim.jpg')")
    } else if (16 > randomIndex) {
        body.css("background-image", "url('./img/noxat-shorva.jpg')")
    } else if (17 > randomIndex) {
        body.css("background-image", "url('./img/moxora.jpg')")
    }
});