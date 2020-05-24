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
    import * as colors from '!!../utils/less-loader.js!../themes/colors.less'; //todo: better way using webpack?
    const prefixCls = 'kai-header';

    export default {
        name: "Header",
        props: {
            backgroundColor: {
                type: String,
                default: colors['headerPurple']
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
	@import '../styles/Header.less';
</style>