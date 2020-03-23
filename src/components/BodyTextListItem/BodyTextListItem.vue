<template>
    <div 
        tabindex="0"
        :class="wrapClasses"
        :style="style"
        :ref="ref"
    >
        <span :class="headerCls">{{ header }}</span>
        <label :class="bodyCls">{{ body }}</label>
    </div>
</template>
<script>
    import colors from '../../themes/colors.scss'
    const prefixCls = 'kai-btl';
    const isFocused;

    export default {
        name: 'BodyTextListItem',
        props: {
            header: {
                type: String
            },
            body: {
                type: String
            },
            focusColor: {
                type: String,
                default: colors.defaultFocusColor
            }
        },
        data () {
            return {
                prefixCls = prefixCls
            };
        },
        computed: {
            wrapClasses () {
                return `${prefixCls}`;
            },
            headerCls () {
                return `${prefixCls}-header`;
            },
            bodyCls () {
                return `${prefixCls}-body`;
            }
        }
    }
</script>