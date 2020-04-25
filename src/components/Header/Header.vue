<template>
	<header
		:class="headerCls"
		:style="style"
	>
		<h1 class="h1">
			<slot></slot>
		</h1>
	</header>
</template>

<script>
    //import colors from '../../themes/colors.less'; fixme
    const prefixCls = 'kai-header';

    export default {
        name: "Header",
        props: {
            backgroundColor: {
                type: String,
                default: "#320374"//fixme: colors.headerPurple
            }
        },
        computed: {
            headerCls() {
                return prefixCls;
            }
        },
        data() {
            return {
                style: {
                    backgroundColor: this.backgroundColor
                }
            }
        }
    }
</script>

<style lang="less">
	@import '../../styles/Header.less';
</style>