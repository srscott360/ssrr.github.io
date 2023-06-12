var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'o-YBDTqX_ZU',
        height: '100%',
        width: '100%',
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'enablejsapi': 1,
            'loop': 1,
            'autohide': 1,
            'playsinline': 0,
            'modestbranding': 1,
        },
        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    if (player.getPlayerState() != 1) {
        event.target.mute();
        event.target.playVideo();
    }
}
