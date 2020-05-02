<template>
	<!--iconComp-->

	<!--iconComp-->
	<div :class="buttonCls">
		<button
			tabindex="0"
			:class="inputCls"
			:style="style"
			:form="form"
			:formAction="formAction"
			:formEncType="formEncType"
			:formMethod="formMethod"
			:formNoValidate="formNoValidate"
			:formTarget="formTarget"
			:name="name"
			:type="type"

			:on-click="onClick"
			@focus="handleFocusChange(true)"
			@blur="handleFocusChange(false)"
		>
			<!-- todo: change rendering of icons to better way -->
			<div :class="iconCls" v-if="iconSide === 'left'">
				<span :class="icon"></span>
				<img :src="iconSrc" alt=""/>
			</div>

			<div :class="lineCls">
				<span :class="textCls">{{ text }}</span>
			</div>

			<!-- todo: change rendering of icons to better way -->
			<div :class="iconCls" v-if="iconSide === 'right'">
				<span :class="icon"></span>
				<img :src="iconSrc" alt=""/>
			</div>
		</button>
	</div>
</template>
<script>
    import colors from '!!../utils/less-loader!../themes/colors.less'

    const prefixCls = 'kai-button';

    export default {
        name: "Button",
        props: {
            text: String,
            icon: String,
            iconSrc: String,
            onClick: Function,
            //onBlur: Function,
            //  onFocus: Function,
            iconSide: {
                type: String,
                validator(value) {
                    return ['left', 'right'].includes(value)
                },
                default: 'right'
            },
            focusColor: {
                type: String,
                default: colors['defaultFocusColor']
            },
            form: {
                type: String
            },
            formAction: {
                type: String
            },
            formEncType: {
                validator(value) {
                    return ['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'].includes(value)
                }
            },
            formMethod: {
                validator(value) {
                    return ['get', 'post'].includes(value)
                }
            },
            formNoValidate: Boolean,
            formTarget: {
                validator(value) {
                    return ['_blank', '_self', '_parent', '_top'].includes(value);
                }
            },
            name: String,
            type: {
                validator(value) {
                    return ['button', 'reset', 'submit'].includes(value);
                },
                default: 'button'
            },
            onFocusChange: Function,
            index: Number,
            softKeyText: {
                type: String,
                default: 'select'
            },
            softKeyIcon: String
        },
        data() {
            return {
                isFocused: false,
            }
        },
        computed: {
            style() {
                return {
                    backgroundColor: this.isFocused ? colors['defaultFocusColor'] : null
								}
						},
            buttonCls() {
                return `${prefixCls}`;
            },
            inputCls() {
                return `${prefixCls}-input`;
            },
            lineCls() {
                let direction;

                switch (this.iconSide) {
                    case 'left':
                        direction = 'right';
                        break;
                    case 'right':
                        direction = 'left';
                        break;
                    default:
                        direction = '';
                }

                return `${prefixCls}-line ${direction}`;
            },
            textCls() {
                return `${prefixCls}-text`;
            },
            iconCls() {
                return `${prefixCls}-icon-${this.isFocused ? 'focus' : 'unfocused'}`;
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
	@import "../styles/Button.less";
</style>