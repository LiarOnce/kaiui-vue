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
            :ref="ref"
            :onClick="onClick"
            :onFocus="onFocus"
            :onBlur="onBlur"
        >
            {{ iconSide === 'left' ? iconComp: null}}
            <div :class="lineCls">
                <span :class="textCls">{{ text }}</span>
            </div>
            {{ iconSide === 'right' ? iconComp: null}}
        </button>
    </div>
</template>
<script>
    import colors from '../../themes/colors.scss'
    const prefixCls = 'kai-button';
    const isFocused;

    export default {
        name: "Button",
        props: {
            text: {
                type: String
            },
            icon: {
                type: String
            },
            iconSrc: {
                type: String
            },
            onClick: {
                type: Function
            },
            iconSide: {
                validator (value) {
                    return oneOf(value, ['left', 'right'])
                }
            },
            focusColor: {
                type: String,
                default: colors.defaultFocusColor
            },
            form: {
                type: String
            },
            formAction: {
                type: String
            },
            formEncType: {
                validator (value) {
                    return oneOf(value, ['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain',])
                }
            },
            formMethod: {
                validator (value) {
                    return oneOf(value, ['get', 'post'])
                }
            },
            formNoValidate: {
                type: Boolean
            },
            formTarget: {
                validator (value) {
                    return oneOf(value, ['_blank', '_self', '_parent', '_top'])
                }
            },
            name: {
                type: String
            },
            type: {
                validator (value) {
                    return oneOf(value, ['button', 'reset', 'submit'])
                },
                default: 'button'
            },
            onFocusChange: {
                type: Function
            },
            index: {
                type: Number
            },
            softKeyText: {
                type: String,
                default: 'select'
            },
            softKeyIcon: {
                type: String
            }
        },
        data() {
            return {
                prefixCls = prefixCls
            };
        },
        computed: {
            buttonCls () {
                return `${prefixCls}`;
            },
            inputCls () {
                return `${prefixCls}-input`;
            },
            lineCls () {
                return `${prefixCls}-line ${
                    iconSide === 'left' ? 'right' : iconSide === 'right' ? 'left' : ''
                }`;
            },
            textCls () {
                return `${prefixCls}-text`;
            },
            iconCls () {
                return `${prefixCls}-icon-${isFocused ? 'focus' : 'unfocused'}`;
            },
            iconComp () {
                return `<div :class="iconCls">
                        <span :class="icon"></span>
                        <img :src="iconSrc" alt="" />
                    </div>`;
            }
        }
    }
</script>