import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songList: [
      { 
        id: 1,
        artist: "Lady Gaga",
        songName : "Rain On Me"
      },
      {
        id: 2,
        artist: "Jawsh 685",
        songName: "Savage Love"
      },
      {
        id: 3,
        artist: "Dura Lipa",
        songName: "Break My Heart"
      },
      {
        id: 4,
        artist: "Chris Brown",
        songName: "Go Crazy"
      },
      {
        id: 5,
        artist: "Jason Derulo",
        songName: "Take You Dancing"
      },
      {
        id: 6,
        artist: "Joel Corry",
        songName: "Head & Heart"
      },
      {
        id: 7,
        artist: "Selena Gomez",
        songName: "Lose You To Love Me"
      },
      {
        id: 8,
        artist: "Raye",
        songName: "Secrets"
      },
      {
        id: 9,
        artist: "Jack Harlow",
        songName: "Whats Poppin"
      },
      {
        id: 10,
        artist: "Drake",
        songName: "Laugh Now Cry Later"
      }],
    playList: []
  },
  mutations: {
    songMove: function(state, idSelection) {
      for(let i=0; i<state.songList.length; i++) {
        if(state.songList[i].id == idSelection) {
          state.playList.push(state.songList[i]);
          state.songList.splice(i, 1);
        }
      }
    },
    songMoveBack: function(state, idSelection) {
      for(let i=0; i<state.playList.length; i++) {
        if(state.playList[i].id == idSelection) {
          state.songList.push(state.playList[i]);
          state.playList.splice(i, 1);
        }
      }
    }
  },
  actions: {},
  modules: {}
});
