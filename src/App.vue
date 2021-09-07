<template>
    <div class="w-full h-full">
        <Search @search-triggered="onSearch($event)" />
        <IconGrid :icons="FilteredIcons" />
    </div>
</template>

<script>
import Search from './components/Search.vue'
import IconGrid from './components/IconGrid.vue'
import icons from './icons.json'
import Fuse from 'fuse.js'

export default {
    name: 'RootPage',
    components: {
        Search,
        IconGrid,
    },
    data() {
        return {
            query: '',
        }
    },
    methods: {
        onSearch(searchTerm) {
            console.log('on Search', searchTerm)
            this.query = searchTerm
        },
    },
    computed: {
        FilteredIcons() {
            const fuse = new Fuse(icons.icons, {
                threshold: 0.2,
                keys: ['name'],
            })

            if (this.query.trim()) {
                return fuse.search(this.query.trim()).map(({ item }) => {
                    return {
                        name: item.name,
                        svg: item.svg,
                    }
                })
            } else {
                return icons.icons
            }
        },
    },
}
</script>