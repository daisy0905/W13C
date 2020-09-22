<template>
  <div id="songlist-container">
    <h2>Song List</h2>
    <div>
      <songlist-song class="song" v-for="content in songList" v-bind:key="content.id" :song="content">
      </songlist-song>
    </div>
  </div>
</template>

<script>
import SonglistSong from './songInSongList.vue'

export default {
  name: "song-list",
  components: {
    SonglistSong
  },
 
  data: function() {
    return {}
  },

  computed: {
    songList: function() {
      return this.$store.state.songList;
    }
  }

};
</script>

<style scoped>
  #songlist-container {
    width: 80%;
    min-height: 70vh;
    background-color: lightgrey;
    display: grid;
    justify-items: center;
    align-items: top;
    grid-template-rows: 10% 90%;
    row-gap: 1vh;
    padding-bottom: 1em;
    border-radius: 2em;
  }

    h2 {
      height: 5vh;
    }

  .song {
    width: 20vw;
    height: 5vh;
    background-color: lightskyblue;
    padding: 0.5em 0 0.5em 0;
    border-radius: 2em;
    margin-bottom: 1vh;
  }

  .song:hover {
    box-shadow: 1px 1px 2px darkblue;
    cursor: pointer;
  }
  
</style>