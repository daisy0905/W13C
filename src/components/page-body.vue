<template>
    <div id="body-grid">
        <div></div>
        <song-list></song-list>
        <play-list></play-list>
        <div></div>
    </div>
</template>

<script>
import PlayList from './play-list.vue';
import SongList from './song-list.vue';


export default {
    name: "page-body",
    components: {
        PlayList,
        SongList
    }
}
</script>

<style scoped>
    #body-grid {
        width: 100%;
        min-height: 40vh;
        display: grid;
        grid-template-columns: 1fr 2fr 2fr 1fr;
        column-gap: 1vw;
        justify-items: center;
        align-items: top;
    }

</style>