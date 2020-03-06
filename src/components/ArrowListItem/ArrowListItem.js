import colors from '../themes/colors.scss';
import '../themes/components/ArrowListItem.scss';

export default {
    name: "kui-al",
    mixins: [colors],
    props: {
        primary: String,
        secondary: String,
        focusColor: String,
        forwardedRef: Function,
        index: Number,
        onFocusChange: Function
    },
    render(l) {
        
    }
}