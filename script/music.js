JSON_FILEPATH = "/music/!music.json";
MUSIC_FOLDERPATH = "/music/";
TRACKS_DIV = "#tracks";
AUDIO_ELEM = document.getElementById("audio");

$(function() {
    console.log("MUSIC");
    $.getJSON(JSON_FILEPATH, function(json) {
        makeTrackElems(json);
        $(".track").click(function() {
            let parser = document.createElement('a');
            parser.href = AUDIO_ELEM.src;
            // Switch tracks when different track is clicked
            if (parser.pathname != $(this).data("track")) {
                clearCSS($(`[data-track="${parser.pathname}"]`));
                AUDIO_ELEM.src = $(this).data("track");
                AUDIO_ELEM.play();
                activeCSS($(this));
            // Play clicked track if it is paused
            } else if (AUDIO_ELEM.paused) {
                AUDIO_ELEM.play();
                activeCSS($(this));
            // Pause clicked track if it is playing
            } else {
                AUDIO_ELEM.pause();
                pausedCSS($(this));
            }
        });
    });
});

function makeTrackElems(json) {
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
}

function activeCSS(elem) {
    elem.css({"outline": "solid var(--black) 5px", "outline-offset": "-10px", "border": "solid var(--white) 5px"});
}

function pausedCSS(elem) {
    elem.css({"outline": "solid var(--gray) 5px", "outline-offset": "-10px", "border": "solid var(--black) 5px"});
}

function clearCSS(elem) {
    elem.css({"outline": "0px", "outline-offset": "0px", "border": "solid transparent 5px"});
}