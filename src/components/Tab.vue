<template>
	<div
		tabindex="0"
		@click="handleClick"
		:class="actPrefixCls"
		:style="styleDiv"
	>
		<div :class="labelCls">{{ label }}</div>
	</div>
</template>

<script>
    import colors from "!!../utils/less-loader!../styles/Tab.less";

    const prefixCls = 'kai-tab';

    export default {
        name: "Tab",
        props: {
            label: {
                type: String,
								required: true
						},
            isActive: Boolean,
            focusColor: {
                type: String,
                default: colors['defaultFocusColor']
            },
						handleClick: Function
        },
        computed: {
            styleDiv() {
                return {
                    "--tab-underline-color": this.focusColor
                }
            },
            actPrefixCls() {
                return `${prefixCls}-${this.isActive ? 'active' : 'inactive'}`;
            },
            labelCls() {
                return `${prefixCls}-${this.isActive ? 'active' : 'inactive'}-label`;
            }
        }
    }
</script>

<style lang="less">
	@import "../styles/Tab.less";
</style>