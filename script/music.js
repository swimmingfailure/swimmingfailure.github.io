JSON_FILEPATH = "/music/!music.json";
MUSIC_FOLDERPATH = "/music/";
TRACKS_DIV = "#tracks";
AUDIO_ELEM = document.getElementById("audio");

$(function() {
    console.log("MUSIC");
    $.getJSON(JSON_FILEPATH, function(json) {
        for (let i in json) {
            let filepath = MUSIC_FOLDERPATH + json[i].title.toLowerCase().replace(/\s/g, '').replace(/'/g, '');
            let html = 
            `<div class="track" data-track="${filepath}.mp3" style="background-image: url(${filepath}.jpg)">
                <p>${json[i].title}</p>
                <p>${json[i].artist}</p>
                <p>${json[i].date}</p>
            </div>`

            $(TRACKS_DIV).append(html);
        }

        $(".track").click(function() {
            AUDIO_ELEM.src = $(this).data("track");
            AUDIO_ELEM.play();
        });
    });
});