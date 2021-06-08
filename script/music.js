$(function() {
    console.log("MUSIC");
    $.getJSON('/music/music.json', function(json) {
        for (let i in json) {
            let filepath = "/music/" + json[i].title.toLowerCase().replace(/\s/g, '');
            let html = `
            <div class="track" data-mp3="${filepath}.mp3" style="background-image: url(${filepath}.jpg)">
                <p>${json[i].title}</p>
                <p>${json[i].artis}</p>
                <p>${json[i].date}</p>
            </div>`
            
            $("#tracks").append(html);
        }

        $(".track").click(function() {
            let mp3 = $(this).data("mp3");
            $("#audio").attr("src", mp3);
            document.getElementById("audio").play();
        });
    });
});