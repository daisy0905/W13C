<template>
    <div>
        <h1>Song List</h1>
        <div class="songs" v-for="content in songList" v-bind:key="content">
            <h3>{{ content.artist }}</h3>
            <h2>{{ content.song }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "song-list",
    data: function() {
        return {

        }
    },
    computed: {
        songList: function() {
            return this.$store.state.songList;
        }
    }

}
</script>

<style scoped>

</style>