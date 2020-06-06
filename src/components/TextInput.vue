<template>
	<div :class="textinputCls">
		<label :class="labelCls">
			{{ label }}
			<input
				@focus="changeFocus"
				:class="inputCls"
				type="text"
				:ref="forwardedRef"
				:value="value"
				@input="$emit('input', $event.target.value)"
			>
		</label>
	</div>
</template>

<script>
    // import colors from '!!../utils/less-loader!../themes/colors.less';

    const prefixCls = 'kai-text-input';

    export default {
        name: "TextInput",
        props: {
            focusColor: {
                type: String
            },
            label: {
                type: String
            },
            index: {
                type: String
            },
            onFocusChange: {
                type: Function
            },
            forwardedRef: {
                type: String
            },
            onChange: {
                type: Function
            },
            enableTabSwitching: {
                type: Boolean
            },
            value: String
        },
        computed: {
            textinputCls() {
                return `${prefixCls}`
            },
            labelCls() {
                return `${prefixCls}-label`
            },
            inputCls() {
                return `${prefixCls}-input`
            }
        },
        methods: {
            changeFocus() {

            }
        }
    }
</script>

<style lang="less">
	@import "../styles/TextInput.less";
</style>