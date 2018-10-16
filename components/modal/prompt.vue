<template>
    <modal :click-overlay-close="false" v-model="show" :title="title">
        <div class="vcu-prompt-content">
            <div class="vcu-prompt-text">{{msg}}</div>
            <div class="vcu-prompt-text-field" :class="{'focus-state': focus, 'not-empty-state': input}">
                <input type="text" @focus="focus = true" @blur="focus = false" class="vcu-prompt-input" v-model="input">
            </div>
        </div>
        <a href="javascript:;" slot="footer" class="vcu-modal-footer__btn vcu-modal-footer__btn_default" @click="cancel">取消</a>
        <a href="javascript:;" slot="footer" class="vcu-modal-footer__btn vcu-modal-footer__btn_primary" @click="sure">确定</a>
    </modal>
</template>

<script>
import modal from './modal'
export default {
    name: "v-prompt",
    components: {
        modal,
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
        onSure: {
            type: Function
        }
    },
    data() {
        return {
            input: '',
            focus: false,
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
            this.$emit('cancel')
            this.$emit('input', false)
        },
        sure() {
            this.show = false
            if (this.onSure) this.onSure(this.input)
            this.$emit('sure', this.input)
            this.$emit('input', false)
        }
    },
    mounted() {

    }
}
</script>