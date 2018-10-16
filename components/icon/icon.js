export default {
    name: 'VIcon',
    props: {
        prefixCls: {
            default: 'vcuicon',
            type: String,
        },
        type: String,
        title: String,
        spin: Boolean,
        size: [Number, String],
        color: String
    },
    data() {
        return {}
    },
    computed: {
        classes() {
            const { prefixCls, type, spin } = this
            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-${type}`]: type,
                [`${prefixCls}-spin`]: !!spin || type === 'loading',
            }
        },
        styles() {
            let style = {};

            if (this.size) {
                style['font-size'] = `${this.size}px`;
            }

            if (this.color) {
                style.color = this.color;
            }

            return style;
        }
    },
    methods: {
        handleClick(event) {
            if (this.clicked) {
                return
            }

            this.clicked = true
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => (this.clicked = false), 500)
            this.$emit('click', event)
        },
    },
    render() {
        const { title, classes, handleClick, $listeners, styles } = this

        const iconProps = {
            attrs: {
                title
            },
            style: styles,
            class: classes,
            on: {
                ...$listeners,
                click: handleClick,
            },
        }
        return ( <
            i {...iconProps }
            />
        )
    },
    beforeDestroy() {
        if (this.timeout) {
            clearTimeout(this.timeout)
        }
    },
}