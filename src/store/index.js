import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songList: [
      {
        artist: "Lady Gaga",
        song: "Rain On Me"
      },
      {
        artist: "Jawsh 685",
        song: "Savage Love"
      },
      {
        artist: "Dura Lipa",
        song: "Break My Heart"
      },
      {
        artist: "Chris Brown",
        song: "Go Crazy"
      },
      {
        artist: "Jason Derulo",
        song: "Take You Dancing"
      },
    ],
    playList: []
  },
  mutations: {},
  actions: {},
  modules: {}
});
