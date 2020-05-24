<template>
	<div :class="prefixCls">
		<span :class="textCls">{{ text }}</span>
	</div>
</template>

<script>
		const prefixCls = 'kai-separator';

    export default {
        name: "Separator",
				props: {
            text: String
				},
				data() {
            return {
                prefixCls: prefixCls
						}
				},
				computed: {
            textCls() {
                return `${prefixCls}-text`;
						}
				}
    }
</script>

<style lang="less">
	@import "../styles/Separator.less";
</style>