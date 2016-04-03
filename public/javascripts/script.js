/*
   ____                        _ ____                      _     
 / ___|  ___  _   _ _ __   __| / ___|  ___  __ _ _ __ ___| |__  
 \___ \ / _ \| | | | '_ \ / _` \___ \ / _ \/ _` | '__/ __| '_ \ 
  ___) | (_) | |_| | | | | (_| |___) |  __/ (_| | | | (__| | | |
 |____/ \___/ \__,_|_| |_|\__,_|____/ \___|\__,_|_|  \___|_| |_|

*/

SC.initialize({
  client_id: '473a8267fd2d06190b87123932918857'
});

function makeCenterFromTracks(tracks) {
	var track, permURL, newDiv;
	for (var i = 0; i <= 5; i++) {
		newDiv = document.createElement("center");
		newDiv.id = "track" + i;
		track=tracks[i];
		SC.oEmbed(track.permalink_url,{color:"ff0066",
				  maxwidth:750, maxheight: 166},newDiv);
		document.body.appendChild(newDiv);
	}
}

$(document).ready(function() {
	$('#search').click(function() {
		var musicGenre = $('input[name=Soundcloud]').val();
		SC.get('/tracks', { genres: musicGenre}, function(tracks) {
			$('#results').append(makeCenterFromTracks(tracks));
		/*	$(tracks).each(function(index, track) {
				$('#results').append($('<li></li>').html(track.title + ' - ' + track.genre)); */
		});
	});
});

/* Search for a specific user
$(document).ready(function() {
	$('#search').click(function() {
		var user = $('input[name=Soundcloud]').val();
		SC.get('/users/'+user+'/tracks', {limit: 100}, function(tracks) {
			$('#results').append(makeCenterFromTracks(tracks));
		});
	});
});
*/

/*
$(document).ready(function() {
	$('#search').click(function() {
		var musicGenre = $('input[name=Soundcloud]').val();
		SC.get('/tracks', { genres: musicGenre }, function(tracks) {
			$(tracks).each(function(index, track) {
				$('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
			});
		});
	});
});
*/
