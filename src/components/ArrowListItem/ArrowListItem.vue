<template>
    <div 
        tabIndex="0" 
        :class="wrapClasses" 
        :style="style" 
        :ref="ref"
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
    import colors from '../../themes/colors.scss'
    const prefixCls = 'kai-al';
    const isFocused;

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
                default: colors.defaultFocusColor
            }
        },
        data () {
            return {
                prefixCls: prefixCls
            };
        },
        computed: {
            wrapClasses () {
                return `${prefixCls}`;
            },
            lineClasses () {
                return `${prefixCls}-line`;
            },
            iconClasses () {
                return `${prefixCls}-icon-${isFocused ? 'focused' : 'unfocused'}`;
            },
            primaryClasses () {
                return `${prefixCls}-primary`;
            },
            secondaryClasses () {
                return `${prefixCls}-secondary`;
            }
        }
    }
</script>