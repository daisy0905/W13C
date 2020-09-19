<template>
    <div>
        <song-list></song-list>
        <play-list></play-list>
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

</style>