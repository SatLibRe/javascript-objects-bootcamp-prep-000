var artist = ""
var song = ""
const playlist = {artist,song}; 

function updatePlaylist(playlist, artistName, songTitle){
 playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist
}