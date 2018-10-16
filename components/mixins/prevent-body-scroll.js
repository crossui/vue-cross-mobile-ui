import dom from '../libs/dom'

const BODY_CLASS_NAME = 'vcu-modal-open'
const CONTAINER_CLASS_NAME = 'vcu-modal-open-for-container'
const VCU_VIEW_BOX_ELEMENT = '#vcu_view_box_body'

export default {
    methods: {
        // some plugin may be imported before configPlugin, so we cannot get gloal config when component is created
        getLayout() {
            /* if (typeof window !== 'undefined') {
                if (window.VCU_CONFIG && window.VCU_CONFIG.$layout === 'VIEW_BOX') {
                    return 'VIEW_BOX'
                }
            } */
            return ''
        },
        addModalClassName() {
            if (typeof this.shouldPreventScroll === 'function' && this.shouldPreventScroll()) {
                return
            }
            if (this.getLayout() === 'VIEW_BOX') {
                dom.addClass(document.body, BODY_CLASS_NAME)
                dom.addClass(document.querySelector(VCU_VIEW_BOX_ELEMENT), CONTAINER_CLASS_NAME)
            }
        },
        removeModalClassName() {
            if (this.getLayout() === 'VIEW_BOX') {
                dom.removeClass(document.body, BODY_CLASS_NAME)
                dom.removeClass(document.querySelector(VCU_VIEW_BOX_ELEMENT), CONTAINER_CLASS_NAME)
            }
        }
    },
    beforeDestroy() {
        this.removeModalClassName()
    },
    deactivated() {
        this.removeModalClassName()
    }
}