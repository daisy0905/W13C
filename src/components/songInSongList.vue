<template>
    <div @click="idGet">
        <p>{{ "No: " + song.id }}</p>
        <p>{{ "Artist: " + song.artist }}</p>
        <p>{{ "Song Name: " + song.songName }}</p>
    </div>
</template>

<script>
export default {
    name: "songlist-song",

    props: {
    song: {
      type: Object,
      required: true
    }
  },

    methods: {
    idGet: function() {
      this.$store.commit("songMove", this.song.id)
    }
  }
}
</script>

<style scoped>
  p {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    color: white;
  }
</style>