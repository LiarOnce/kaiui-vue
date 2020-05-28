<template>
	<div
		tabindex="0"
		:class="itemCls"
		:style="style"
		@focus="handleFocusChange(true)"
		@blur="handleFocusChange(false)"
	>
		<div :class="buttonCls" v-if="buttonSide === 'left'">
			<input
				:class="inputCls"
				tabIndex="-1"
				type="radio"
			/>
		</div>

		<div :class="lineCls">
			<span :class="primaryCls">{{ primary }}</span>
			<span :class="secondaryCls">{{ secondary }}</span>
		</div>

		<div :class="buttonCls" v-if="buttonSide === 'right'">
			<input
				:class="inputCls"
				tabIndex="-1"
				type="radio"
			/>
		</div>

	</div>
</template>

<script>
    import colors from "!!../utils/less-loader!../themes/colors.less";

    const prefixCls = 'kai-rbl';

    export default {
        name: "RadioButtonListItem",
        props: {
            primary: {
                type: String,
								required: true
            },
						secondary: String,
            focusColor: {
                type: String,
                default: colors['defaultFocusColor']
            },
						buttonSide: {
                type: String,
								default: 'right',
								validator(value) {
                    return ['right', 'left'].includes(value);
								}
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
            itemCls() {
                return `${prefixCls}`;
            },
            buttonCls() {
                return `${prefixCls}-button`;
            },
            lineCls() {
                return `${prefixCls}-line ${this.buttonSide === 'right' ? 'right' : 'left'}`;
            },
            inputCls() {
                return `${prefixCls}-button-input-${this.isFocused ? 'focused' : 'unfocused'}`
            },
            primaryCls() {
                return `${prefixCls}-primary`;
            },
            secondaryCls() {
                return `${prefixCls}-secondary ${this.secondary ? '' : 'hidden'}`;
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
	@import "../styles/RadioButtonListItem.less";
</style>