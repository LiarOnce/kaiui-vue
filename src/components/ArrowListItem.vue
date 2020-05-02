<template>
	<div
		tabIndex="0"
		:class="wrapClasses"
		:ref="forwardedRef"
		:style="style"
		@focus="focus"
		@blur="unFocus"
	>
		<div :class="lineClasses">
			<span :class="primaryClasses">{{ primary }}</span>
			<label :class="secondaryClasses">{{ secondary }}</label>
		</div>
		<div :class="iconClasses">
			<span class="kai-icon-arrow"></span>
		</div>
	</div>
</template>
<script>
    import colors from '!!../utils/less-loader!../themes/colors.less';

    const prefixCls = 'kai-al';

    export default {
        name: 'ArrowListItem',
        props: {
            primary: {
                type: String
            },
            secondary: {
                type: String
            },
            focusColor: {
                type: String,
                default: colors['defaultFocusColor']
            },
            forwardedRef: String
        },
        data() {
            return {
                isFocused: false,
                prefixCls: prefixCls
            };
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
            lineClasses() {
                return `${prefixCls}-line`;
            },
            iconClasses() {
                return `${prefixCls}-icon-${this.isFocused ? 'focused' : 'unfocused'}`;
            },
            primaryClasses() {
                return `${prefixCls}-primary`;
            },
            secondaryClasses() {
                return `${prefixCls}-secondary`;
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
	@import '../styles/ArrowListItem.less';
</style>
