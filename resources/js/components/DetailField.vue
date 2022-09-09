<template>
    <PanelItem :field="field">
        <template #value>
            <span id="onspan" name="onspan" class="dot_on" v-if="field.value === 1" :style="trueStyles()"></span>
            <span id="offspan" name="offspan" class="dot_off" v-else-if="field.value === 0" :style="falseStyles()"></span>
        </template>
    </PanelItem>
</template>

<script>
export default {
    props: ['resource', 'resourceName', 'resourceId', 'field'],
    data() {
        return [];
    },
    computed: {},
    methods: {
        trueStyles() {
            if (typeof this.field.on_color != 'undefined') {
                return {
                    "background-color": this.field.on_color
                };
            } else {
                return {
                    "background-color": "#ffe",
                };
            }
        },
        falseStyles() {
            if (typeof this.field.off_color != 'undefined') {
                return {
                    "background-color": this.field.off_color
                };
            } else {
                return {
                    "background-color": "#000",
                };
            }
        }
    },
    created() {

    }
}
</script>
