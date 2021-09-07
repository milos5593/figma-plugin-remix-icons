<template>
    <button
        :aria-label="icon.name"
        class="
            p-2
            text-gray-800
            bg-transparent
            rounded-sm
            appearance-none
            outline-none
            hover:bg-black hover:bg-opacity-5
            focus:ring
        "
        v-html="icon.svg"
        @click="postMessage()"
    ></button>
</template>

<script>
export default {
    name: '',
    props: {
        icon: {
            type: Object,
            required: true,
        },
    },
    methods: {
        postMessage() {
            parent.postMessage(
                {
                    pluginMessage: {
                        icon: this.icon,
                    },
                },
                '*'
            )
        },
    },
}
</script>