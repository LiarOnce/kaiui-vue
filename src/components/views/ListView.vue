<template>
    <div :class="prefixCls">
        <slot></slot>
    </div>
</template>

<script>
const prefixCls = 'kai-list-view';
export default {
    name: "ListView",
    props: {
        children: String,
        onChangeIndex: String,
        isActive: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        
    }
}
</script>

<style lang="less">
	@import "../../styles/views/ListView.less";
</style>