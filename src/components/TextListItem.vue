<template>
	<div
		tabIndex="0"
		:class="itemCls"
		:style="style"
		:ref="forwardedRef"
		@focus="handleFocusChange(true)"
		@blur="handleFocusChange(false)"
	>
		<span :class="primaryCls">{{ primary }}</span>
		<label :class="secondaryCls">{{ secondary }}</label>
		<label :class="tertiaryCls">{{ tertiary }}</label>
	</div>
</template>

<script>
    import colors from "!!../utils/less-loader.js!../themes/colors.less";

    const prefixCls = 'kai-tl';

    export default {
        name: "TextListItem",
        props: {
            primary: String,
            secondary: String,
            tertiary: String,
            forwardedRef: String
        },
        data() {
            return {
                isFocused: false,
                prefixCls: prefixCls
            }
        },
        computed: {
            style() {
                return {
                    backgroundColor: this.isFocused ? colors['defaultFocusColor'] : null
                }
            },
            itemCls() {
                return `${prefixCls}`;
            },
            primaryCls() {
                return `${prefixCls}-primary`;
            },
            secondaryCls() {
                return `${prefixCls}-secondary`;
            },
            tertiaryCls() {
                return `${prefixCls}-tertiary`;
            }
        },
        methods: {
            handleFocusChange(focus) {
                this.isFocused = focus;
            }
        }
    }
</script>

<style lang="less">
	@import "../styles/TextListItem.less";
</style>