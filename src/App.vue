<template>
	<div id="app">
		<Header>Hello there</Header>
		<TextInput label="Textové pole"></TextInput>
		<ArrowListItem primary="Oof" secondary="Hello"></ArrowListItem>
		<Button icon-side="right"></Button>
	</div>
</template>

<script>
    import Header from "./components/Header/Header";
    import TextInput from "./components/TextInput/TextInput";
    import ArrowListItem from "./components/ArrowListItem/ArrowListItem";
    import Button from "./components/Button/Button";

    export default {
        name: 'App',
        components: {
            Header,
						TextInput,
						ArrowListItem,
						Button
        }
    }
</script>

<style>

</style>
