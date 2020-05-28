<template>
	<div
		tabIndex="0"
		:class="prefixCls"
		:style="bgStyle"
		:ref="forwardedRef"
		@focus="handleFocusChange(true)"
		@blur="handleFocusChange(false)"
	>
		<div :class="lineCls">
			<span :class="headerCls">{{ header }}</span>
			<span :class="trackerCls">{{ `${value}/${max}` }}</span>
		</div>

		<div :class="sliderWrapperCls">
			<input
				:ref="forwardedRef"
				type="range"
				:min="min"
				:max="max"
				:step="stepSize"
				:value="value"
				:style="inputStyle"
				@input="$emit('input', $event.target.value)"
			/>
		</div>
	</div>
</template>

<script>
    import colors from '!!../utils/less-loader!../themes/colors.less';

    const prefixCls = 'kai-slider';

    export default {
        name: "Slider",
        props: {
            header: {
                type: String,
								required: true,
						},
            min: {
                type: Number,
								default: 0
						},
            max: {
                type: Number,
								default: 100
            },
            stepSize: {
                type: Number,
								default: 1
            },
						forwardedRef: String,
						focusColor: {
                type: String,
								default: colors['defaultFocusColor']
						},
						value: String,
        },
        data() {
            return {
                isFocused: false,
                prefixCls: prefixCls
            }
        },
        computed: {
            bgStyle() {
                return {
                    backgroundColor: this.isFocused ? this.focusColor : null
                }
            },
            inputStyle() {
                return {
                    '--min': this.min,
                    '--max': this.max,
                    '--val': this.value,
                    '--slider-left-filler-color': this.isFocused ? colors['white'] : this.focusColor,
                    '--slider-thumb-border-color': this.isFocused ? this.focusColor : colors['white']
                }
            },
            lineCls() {
                return `${this.prefixCls}-line`;
            },
            headerCls() {
                return `${this.prefixCls}-header`;
            },
            trackerCls() {
                return `${this.prefixCls}-tracker`;
            },
            sliderWrapperCls() {
                return `${this.prefixCls}-slider-wrapper`;
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
	@import "../styles/Slider.less";
</style>