<template>
    <div @click="idGetBack">
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
        idGetBack: function() {
            this.$store.commit("songMoveBack", this.song.id)
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