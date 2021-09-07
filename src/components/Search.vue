<template>
    <div class="sticky top-0 border-b">
        <div class="absolute top-0 left-0 p-1">
            <div class="w-8 h-8 text-gray-800">
                <svg
                    viewBox="0 0 32 32"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    class="fill-current"
                >
                    <path
                        d="m20 15c0 2.7614-2.2386 5-5 5s-5-2.2386-5-5 2.2386-5 5-5 5 2.2386 5 5zm-1.1256 4.5815c-1.0453.8849-2.3975 1.4185-3.8744 1.4185-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6c0 1.4769-.5336 2.8291-1.4185 3.8744l4.2721 4.272-.7072.7072z"
                    />
                </svg>
            </div>
        </div>
        <input
            autofocus
            type="search"
            v-model="seach"
            placeholder="Search Icons"
            class="w-full h-10 pt-0 pr-4 pb-0 pl-8 text-xs border-none border-0 outline-none"
            @input="onInput()"
        />
    </div>
</template>

<script>
export default {
    name: 'SearchComponent',
    data() {
        return {
            seach: '',
        }
    },
    methods: {
        onInput() {
            this.$emit('search-triggered', this.seach)
        },
    },
}
</script>