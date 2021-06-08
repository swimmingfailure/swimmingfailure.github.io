$(function() {
    console.log("MUSIC");
    $.getJSON('/music/music.json', function(json) {
        for (let i in json) {
            let title = json[i].title;
            let artist = json[i].artist;
            let date = json[i].date;
            let file = title.toLowerCase().replace(/\s/g, '');

            $("#tracks").append(`
            <div class="track" data-file="${file}">
                <p>${title}</p>
                <p>${artist}</p>
                <p>${date}</p>
            </div>
            `);
        }

        $(".track").click(function() {
            let mp3 = "/music/" + $(this).data("file") + ".mp3";
            $("#audio").attr("src", mp3);
            $(this).attr("background", "blue");
            document.getElementById("audio").play();
        });
    });
});