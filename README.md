# kaiui-vue

> KaiOS UI Component for Vue (developing, need help)

This project is port from [AdrianMachado/KaiUI](https://github.com/AdrianMachado/KaiUI) React library. After we develop similar features we will branch from it and work on custom components similar to components mentioned in this [style guide](https://developer.kaiostech.com/design-guide/ui-component).

This code is **NOT** production ready and is in early stages of development.

**Project development is slow, we need help.**

## Build Setup
You need vue-cli and some experience with nodejs.
``` bash
npm install
vue-cli-service serve
```

## TODO List

General:
- [x] Switch SASS/SCSS to LESS or change SASS package. (I don't like `node-sass` package)
- [x] LESS exporting variables to use dynamically in components. (maybe there is a better way using webpack, need help)
- [ ] Implement moving focus using hardware buttons
- [ ] Looking for alternatives to `react-swipeable-views`

Components which are complete but still need polish or heavy testing:
- [x] ArrowListItem
- [x] BodyTextListItem
- [x] Button
- [x] Header 
- [x] IconListItem
- [x] RadioButtonListItem
- [x] CheckboxListItem
- [x] Separator
- [x] Slider
- [x] SoftKey (need help)
- [x] Tabs (need help)
- [x] TextInput
- [x] TextListItem
- [x] ProgressBar

Views:
- [ ] ListView
- [ ] TabView
- [ ] GridView (Not provided in [AdrianMachado/KaiUI](https://github.com/AdrianMachado/KaiUI), need to write your own)

Toasts: 

- [ ] Toast
