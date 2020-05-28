<template>
	<div
		tabIndex="0"
		:class="prefixCls"
		:style="divStyle"
		:ref="forwardedRef"
		@focus="handleFocusChange(true)"
		@blur="handleFocusChange(false)"
	>
		<span :class="lineCls">{{ header }}</span>
		<div :class="barWrapperCls">
			<div
				:class="leftFillerCls"
				:style="leftStyle"
			/>
			<div
				:class="rightFillerCls"
				:style="rightStyle"
			/>
		</div>
	</div>
</template>

<script>
    import colors from "!!../utils/less-loader!../themes/colors.less";

    const prefixCls = "kai-pbar"

    export default {
        name: "ProgressBar",
        props: {
            header: {
                type: String,
								required: true
            },
						type: {
                type: String,
								required: true,
								validator(value) {
                    return ['download', 'buffer'].includes(value);
								}
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
                percentage: 0,
                prefixCls: prefixCls
            }
        },
        computed: {
            divStyle() {
                return {
                    backgroundColor: this.isFocused ? this.focusColor : null
                }
            },
            leftStyle() {
                return {
                    width: `${this.percentage}%`,
                    backgroundColor: this.isFocused ? colors['grayscale20'] : this.focusColor
                }
            },
            rightStyle() {
                return {
                    width: `${100 - this.percentage}%`
                }
            },
            lineCls() {
                return `${this.prefixCls}-line`;
            },
            barWrapperCls() {
                return `${this.prefixCls}-bar-wrapper`;
            },
            leftFillerCls() {
                return `${this.prefixCls}-left-filler-${this.isFocused ? 'focused' : 'unfocused'}`;
            },
            rightFillerCls() {
                return `${this.prefixCls}-right-filler-${this.type}-${this.isFocused ? 'focused' : 'unfocused'}`;
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
	@import "../styles/ProgressBar.less";
</style>