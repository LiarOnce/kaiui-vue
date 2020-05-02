<template>
	<div
		tabindex="0"
		:class="wrapClasses"
		:style="style"
		:ref="forwardedRef"
		@focus="focus"
		@blur="unFocus"
	>
		<span :class="headerCls">{{ header }}</span>
		<label :class="bodyCls">{{ body }}</label>
	</div>
</template>
<script>
    import * as colors from '!!../utils/less-loader!../themes/colors.less'

    const prefixCls = 'kai-btl';

    export default {
        name: 'BodyTextListItem',
        props: {
            header: {
                type: String
            },
            body: {
                type: String
            },
            focusColor: {
                type: String,
                default: colors['defaultFocusColor']
            },
            forwardedRef: {
                type: String
            }
        },
        data() {
            return {
                isFocused: false
            }
        },
        computed: {
            style() {
                return {
                    backgroundColor: this.isFocused ? this.focusColor : null
                }
            },
            wrapClasses() {
                return `${prefixCls}`;
            },
            headerCls() {
                return `${prefixCls}-header`;
            },
            bodyCls() {
                return `${prefixCls}-body`;
            }
        },
        methods: {
            focus() {
                this.isFocused = true;
            },
            unFocus() {
                this.isFocused = false;
            }
        }
    }
</script>
<style lang="less">
	@import "../styles/BodyTextListItem";
</style>