function hideAllPair() {
    let arrOfTagsName = [ 'p', 'tr', 'h1', 'h2', 'h3', 'h4', 'h5', 'th'];
    arrOfTagsName.forEach(function(tag) {
                $(tag).hide();
    })
}
function hideAllNoPair() {
    let arrOfTagsName = ['img', 'br'];
    arrOfTagsName.forEach(function(tag) {
        let allTags = $(tag);
        var allTagsArray = [].slice.call(allTags);
        allTagsArray.forEach(function(el){
            if ($(el).hasClass('MsoNormal')) {
                $(el).hide();
            } else {
                $(el).hide()
            }
        })
    })
}

$(document).ready(function () {
    $("#hidePairs").click(function () {
        hideAllPair();
    });
});

$(document).ready(function () {
    $("#hideNoPairs").click(function () {
        hideAllNoPair();
    });
});



$(document).ready(function () {
    let arrOfTagsName = ['div', 'p', 'tr', 'h1', 'h2', 'h3', 'h4', 'h5', 'th'];
    $("#show").click(function () {
        for (let i = 0; i < arrOfTagsName.length; i++) {

            $(arrOfTagsName[i]).show();
        }
    });
});
$(document).ready(function () {
    let arrOfTagsName = ['img', 'br'];
    $("#showNoPairs").click(function () {
        for (let i = 0; i < arrOfTagsName.length; i++) {

            $(arrOfTagsName[i]).show();
        }
    });
});

$(document).ready(function () {
    $("#hideDivs").dblclick(function () {
        let arrOfTagsName = ['div'];
        arrOfTagsName.forEach(function(tag) {
            let allTags = $(tag);
            var allTagsArray = [].slice.call(allTags);
            allTagsArray.forEach(function(el){

                if ($(el).attr('align') == 'justify') {
                    $(el).hide();
                }
            })
        })
    });});

$( function() {
    $( "#tabs" ).tabs();
} );

$( function() {
    $( document ).tooltip();
} );

$( function() {
    $( "#draggable" ).draggable();
} );