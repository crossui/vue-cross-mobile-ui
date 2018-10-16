import objectAssign from 'object-assign'
import ToastComponent from '../../modal/modal'
import { mergeOptions } from '../../libs/plugin_helper'

let $vm
let watcher

const plugin = {
    install(vue, pluginOptions = {}) {
        const Modal = vue.extend(ToastComponent)

        if (!$vm) {
            $vm = new Modal({
                el: document.createElement('div')
            })
            document.body.appendChild($vm.$el)
        }


        const modal = {
            show(options = {}) {
                // destroy watcher
                watcher && watcher()
                if (typeof options === 'object') {
                    mergeOptions($vm, options)
                }
                $vm.show = true
            },
            hide() {
                $vm.show = false
            },
            isVisible() {
                return $vm.show
            }
        }

        if (!vue.$vcu) {
            vue.$vcu = {
                modal
            }
        } else {
            vue.$vcu.modal = modal
        }

        vue.mixin({
            created: function() {
                this.$vcu = vue.$vcu
            }
        })
    }
}

export default plugin
export const install = plugin.install