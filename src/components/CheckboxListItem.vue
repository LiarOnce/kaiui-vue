<template>
	<div
		tabIndex="0"
		:class="itemCls"
		:style="style"
		:ref=forwardedRef
		@focus="handleFocusChange(true)"
		@blur="handleFocusChange(false)"
	>
		<!-- todo: intentional code duplication to find better way to render this -->
		<div :class="boxCls" v-if="checkboxSide === 'left'">
			<input
				:class="inputCls"
				tabIndex="-1"
				type="checkbox"
				v-model="checked"
			/>
		</div>

		<div :class="lineCls">
			<span :class="primaryCls">{{ primary }}</span>
			<label :class="secondaryCls">{{ secondary }}</label>
		</div>

		<!-- todo: intentional code duplication to find better way to render this -->
		<div :class="boxCls" v-if="checkboxSide === 'right'">
			<input
				:class="inputCls"
				tabIndex="-1"
				type="checkbox"
				v-model="checked"
			/>
		</div>
	</div>
</template>

<script>
    import colors from '!!../utils/less-loader!../themes/colors.less';

    const prefixCls = "kai-cbl";

    export default {
        name: "CheckboxListItem",
        props: {
            primary: String,
            secondary: String,
            focusColor: {
                type: String,
                default: colors['defaultFocusColor']
            },
            forwardedRef: String,
            checkboxSide: {
                type: String,
                validator(value) {
                    return ['left', 'right'].includes(value)
                },
                default: 'right'
            },
        },
        data() {
            return {
                prefixCls: prefixCls,
                isFocused: false,
								checked: false
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
						lineCls() {
                return `${prefixCls}-line ${ this.checkboxSide === 'left' ? 'left' : 'right' }`;
						},
						primaryCls() {
                return `${prefixCls}-primary`;
						},
						secondaryCls() {
                return `${prefixCls}-secondary ${ this.secondary ? '' : 'hidden'}`;
						},
						boxCls() {
                return `${prefixCls}-box`;
						},
						inputCls() {
                return `${prefixCls}-input-${ this.isFocused ? 'focused' : 'unfocused' }`
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
	@import "../styles/CheckboxListItem.less";
</style>