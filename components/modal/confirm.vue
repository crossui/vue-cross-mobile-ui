<template>
    <modal :click-overlay-close="false" v-model="show" :title="title">
        <div class="vcu-confirm-content">
            <icon type="question" v-if="showIcon" :size="36"></icon>
            <span class="vcu-confirm-text">{{msg}}</span>
        </div>
        <a href="javascript:;" slot="footer" class="vcu-modal-footer__btn vcu-modal-footer__btn_default" @click="cancel">取消</a>
        <a href="javascript:;" slot="footer" class="vcu-modal-footer__btn vcu-modal-footer__btn_primary" @click="sure">确定</a>

    </modal>
</template>

<script>
import modal from './modal'
import icon from '../icon/icon'
export default {
    name: "v-confirm",
    components: {
        modal,
        icon
    },
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
        showIcon: {
            type: Boolean,
            default: true
        },
        onSure: {
            type: Function
        },
        onCancel: {
            type: Function
        }
    },
    data() {
        return {
            show: this.value
        }
    },
    watch: {
        value(val) {
            this.show = val
        }
    },
    methods: {
        cancel() {
            this.show = false
            if (this.onCancel) this.onCancel()
            this.$emit('cancel')
            this.$emit('input', false)
        },
        sure() {
            this.show = false
            if (this.onSure) this.onSure()
            this.$emit('sure')
            this.$emit('input', false)
        }
    }
}
</script>