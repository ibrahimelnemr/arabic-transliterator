<template>
    <div>
        <h1>
            Arabic Transliterator
        </h1>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'HomePage',
    props: {
        msg: String,
    },
});
</script>

<style lang="css">
@import "@/../../index.css";
</style>