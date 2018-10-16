import Datetime from '../../datetime/datetimepicker'
import ObjectAssign from 'object-assign'
/* just for importing style and avoid less-loader issue */
import DatetimeComponent from '../../datetime/index.vue' // eslint-disable-line

const libs = {
    show: function(options = {}) {
        options = ObjectAssign({
            destroyOnHide: true,
            isOneInstance: true
        }, options)
        const datetime = libs.datetime = new Datetime(options)
        datetime.show()
    },
    hide: function() {
        libs.datetime && libs.datetime.hide()
    }
}

export default {
    install(Vue) {
        // inject style
        const _Datetime = Vue.extend(DatetimeComponent)
        const div = document.createElement('div')
        if (typeof document !== 'undefined') {
            let $vm = new _Datetime({
                el: div
            })
            $vm.$el.style.display = 'none'
            $vm.$el.className += ' vcu-datetime-style-inject'
            document.body.appendChild($vm.$el)
        }

        if (!Vue.$vcu) {
            Vue.$vcu = {
                datetime: libs
            }
        } else {
            Vue.$vcu.datetime = libs
        }

        Vue.mixin({
            created: function() {
                this.$vcu = Vue.$vcu
            }
        })
    }
}