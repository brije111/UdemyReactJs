import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "Song A", duration: "4:00" },
    { title: "Song B", duration: "3:00" },
    { title: "Song C", duration: "2:00" },
    { title: "Song D", duration: "1:00" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
