<template>
    <div id="playlist-container">
        <h2>Play List</h2>
        <div>
            <playlist-song class="song" v-for="content in playList" v-bind:key="content.id" :song="content">
            </playlist-song>
        </div>
    </div>
</template>

<script>
import PlaylistSong from './songInPlayList'

export default {
    name: "play-list",
    components: {
        PlaylistSong
    },
    
    data: function() {
        return {}
    },

    computed: {
        playList: function() {
            return this.$store.state.playList;
        }
    }
}
</script>

<style scoped>
    #playlist-container {
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

  .song {
    width: 20vw;
    height: 10vh;
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