import './themes/theme.scss';
import ArrowListItem from './components/ArrowListItem';
import BodyTextListItem from './components/BodyTextListItem';
import Button from './components/Button';
import CheckboxListItem from './components/CheckboxListItem';
import Header from './components/Header';
import IconListItem from './components/IconListItem';
import ProgressBar from './components/ProgressBar';
import RadioButtonListItem from './components/RadioButtonListItem';
import Separator from './components/Separator';
import Slider from './components/Slider';
import Softkey from './components/SoftKey';
import Tab from './components/Tab';
import Tabs from './components/Tabs';
import TextInput from './components/TextInput';
import TextListItem from './components/TextListItem';

const components = {
    ArrowListItem,
    BodyTextListItem,
    Button,
    CheckboxListItem,
    Header,
    IconListItem,
    ProgressBar,
    RadioButtonListItem,
    Separator,
    Slider,
    Softkey,
    Tab,
    Tabs,
    TextInput,
    TextListItem
};

const install = function(Vue, options= {} ) {
    components.map(component => {
        Vue.component(component.name, component)
    })
};

module.exports = {
    version: '1.0.0',
    install,
    ArrowListItem,
    BodyTextListItem,
    Button,
    CheckboxListItem,
    Header,
    IconListItem,
    ProgressBar,
    RadioButtonListItem,
    Separator,
    Slider,
    Softkey,
    Tab,
    Tabs,
    TextInput,
    TextListItem
};

module.exports.default = module.exports;