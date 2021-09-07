<template>
    <div class="p-2">
        <div class="grid grid-cols-6 gap-1">
            <IconButton v-for="icon in icons" :key="icon.name" :icon="icon" />
        </div>
    </div>
</template>

<script>

import IconButton from './IconButton.vue'

export default {
    name: 'IconGridComponent',
    components: { IconButton },
    props: {
        icons: {
            type: Array,
            required: true
        }
    },
    
}
</script>