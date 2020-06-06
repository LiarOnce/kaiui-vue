<template>
	<div className={`${prefixCls} visible`}>
		<Button pos="left" text={leftText} handleClick={leftCallback}/>
		<Button
			pos="center"
			text={centerText}
			icon={centerIcon}
			handleClick={centerCallback}
		/>
		<Button pos="right" text={rightText} handleClick={rightCallback}/>
	</div>
</template>

<script>
		const prefixCls = 'kat-softkey';

    export default {
        name: "SoftKey",
				props: {

				},
				data() {
            return {
                prefixCls: prefixCls
						}
				},
				computed: {

				}
    }
</script>

<style lang="less">
	@import "../styles/SoftKey.less";
</style>