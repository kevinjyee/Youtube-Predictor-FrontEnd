function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function(e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);
        var fd = new FormData(); // I wrote about it: https://hacks.mozilla.org/2011/01/how-to-develop-a-html5-image-uploader/
        fd.append("image", input.files[0]); // Append the file
        var xhr = new XMLHttpRequest(); // Create the XHR (Cross-Domain XHR FTW!!!) Thank you sooooo much imgur.com
        xhr.open("POST", "https://api.imgur.com/3/image.json"); // Boooom!

        var linkToImg
        xhr.onload = function() {
            // Big win!
            //document.querySelector("#link").href = JSON.parse(xhr.responseText).data.link;
            console.log(JSON.parse(xhr.responseText).data.link);
            linkToImg = JSON.parse(xhr.responseText).data.link
            get_nsfw(linkToImg)
        }
        //xhr.setRequestHeader('Authorization', 'Client-ID 28aaa2e823b03b1'); // Get your own key http://api.imgur.com/
        xhr.setRequestHeader('Authorization', 'Client-ID 02f0d36a571e444');
        // Ok, I don't handle the errors. An exercise for the reader.
        /* And now, we send the formdata */
        xhr.send(fd);

    } else {
        removeUpload();
    }
}

function get_nsfw(link){

    var XHR = new XMLHttpRequest();


    // Define what happens in case of error
    XHR.addEventListener("error", function(event) {
        alert('Oups! Something goes wrong.');
    });



    console.log(name.value)
    var url = "https://infinite-sands-32812.herokuapp.com/nsfw?url=" + encodeURIComponent(link.trim());
    console.log(url)
    XHR.open("GET", url, true);

    // Set up our request
    XHR.setRequestHeader("Content-type", "application/json");
    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4 && XHR.status === 200) {
            var json = JSON.parse(XHR.responseText);
            console.log(json.porniness);
            jQuery('#scoreNSFW').text("" + Math.round(json.porniness));
        }
    };
    XHR.send();
}


function sendData() {
    var XHR = new XMLHttpRequest();


    // Define what happens in case of error
    XHR.addEventListener("error", function(event) {
        alert('Oups! Something goes wrong.');
    });


    var name = document.getElementById("titleName");
    console.log(name.value)

    var url = "https://infinite-sands-32812.herokuapp.com/detect?headline=" + encodeURIComponent(name.value.trim());
    console.log(url)
    XHR.open("GET", url, true);

    // Set up our request
    XHR.setRequestHeader("Content-type", "application/json");
    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4 && XHR.status === 200) {
            var json = JSON.parse(XHR.responseText);
            console.log(json.clickbaitiness);
            jQuery('#score').text("" + Math.round(json.clickbaitiness));
            get_views()
        }
    };
    XHR.send();

    // The data sent is what the user provided in the form

}

function get_views(){

    var XHR = new XMLHttpRequest();


    // Define what happens in case of error
    XHR.addEventListener("error", function(event) {
        alert('Oups! Something goes wrong.');
    });


    var channelID = document.getElementById("channelID").value;
    var numweeks = document.getElementById("numweeks").value;

    var score = $("#score").text();
    var scoreNSFW = $("#scoreNSFW").text();


    console.log(channelID)
    console.log(numweeks)
    console.log(score)
    console.log(scoreNSFW)

    var url = "https://infinite-sands-32812.herokuapp.com/predictVid?channelID=" + channelID + "&numWeeks=" + numweeks + "&clickbait=" + parseFloat(score)/100 + "&porniness" + parseFloat(scoreNSFW)/100 ;
    console.log(url)
    XHR.open("GET", url, true);

    // Set up our request
    XHR.setRequestHeader("Content-type", "application/json");
    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4 && XHR.status === 200) {
            var json = JSON.parse(XHR.responseText);
            console.log(json.views);
            jQuery('#scoreViews').text("" + Math.round(json.views));
        }
    };
    XHR.send();
}
function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});
