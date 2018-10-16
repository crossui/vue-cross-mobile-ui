<template>
    <modal v-model="show" :title="title">
        <div class="vcu-alert-content" :class="{'info': type === 'info',
                                        'warning': type === 'warning',
                                        'success': type === 'success',
                                        'error': type === 'error'}">
            <icon :type="typeval" v-if="type" :size="32"></icon>
            <span class="vcu-alert-text">{{msg}}</span>
        </div>
        <a slot="footer" href="javascript:;" class="vcu-modal-footer__btn" @click="sure">确定</a>
    </modal>
</template>

<script>
import modal from './modal'
import icon from '../icon/icon'
export default {
    name: "v-alert",
    props: {
        value: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        msg: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: '' // 'info', 'success', 'warning', 'error'
        },
        onSure: {
            type: Function
        }
    },
    data() {
        return {
            show: this.value
        }
    },
    computed: {
        typeval() {
            let _val = ''
            switch (this.type) {
                case 'info':
                    _val = 'info';
                    break;
                case 'success':
                    _val = 'check';
                    break;
                case 'warning':
                    _val = 'warnfill';
                    break;
                case 'error':
                    _val = 'roundclosefill';
                    break;
                default:
                    _val = 'check';
                    break;
            }
            return _val;
        }
    },
    watch: {
        value(val) {
            this.show = val
        }
    },
    methods: {
        sure() {
            this.show = false
            if (this.onSure) this.onSure()
            this.$emit('sure')
            this.$emit('input', false)
        }
    },
    components: {
        modal,
        icon
    }
}
</script>