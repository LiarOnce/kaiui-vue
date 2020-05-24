<template>
	<div
		tabIndex="0"
		:class="itemCls"
		:ref="forwardedRef"
		:style="style"
		@focus="handleFocusChange(true)"
		@blur="handleFocusChange(false)"
	>
		<div :class="iconCls">
			<span :class="icon"/> :
			<img :src="iconSrc" alt=""/>;
		</div>
		<div :class="lineCls">
			<span :class="primaryCls">{{ primary }}</span>
			<label :class="secondaryCls">{{ secondary }}</label>
		</div>
	</div>
</template>

<script>
    import colors from '!!../utils/less-loader.js!../themes/colors.less';

    const prefixCls = "kai-il";

    export default {
        name: "IconListItem",
        props: {
            focusColor: {
                type: String,
                default: colors['defaultFocusColor']
            },
            iconSrc: String,
            icon: String, //todo what class is this?
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
                    backgroundColor: this.isFocused ? this.focusColor : null
                }
            },
            itemCls() {
                return `${prefixCls}`;
            },
            iconCls() {
                return `${prefixCls}-icon`;
            },
            lineCls() {
                return `${prefixCls}-line`;
            },
            primaryCls() {
                return `${prefixCls}-primary`;
            },
            secondaryCls() {
                return `${prefixCls}-secondary`;
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
	@import "../styles/IconListItem.less";
</style>