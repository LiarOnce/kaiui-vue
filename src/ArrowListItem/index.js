import '../themes/components/ArrowListItem.scss';
import ArrowListItem from './ArrowListItem';

ArrowListItem.install = function(vue) {
    Vue.component(ArrowListItem.name, ArrowListItem);
}

export default ArrowListItem;