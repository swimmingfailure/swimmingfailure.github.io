$(function() {
    console.log("MUSIC");
    $.getJSON('/music/music.json', function(json) {
        for (let i in json) {
            let title = json[i].title;
            let artist = json[i].artist;
        }
    });
});