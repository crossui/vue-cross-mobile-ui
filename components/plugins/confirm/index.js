import objectAssign from 'object-assign'
import ConfirmComponent from '../../modal/confirm'
import { mergeOptions } from '../../libs/plugin_helper'

let $vm
let watcher

const plugin = {
    install(vue, pluginOptions = {}) {
        const Confirm = vue.extend(ConfirmComponent)

        if (!$vm) {
            $vm = new Confirm({
                el: document.createElement('div')
            })
            document.body.appendChild($vm.$el)
        }


        const confirm = {
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
                confirm
            }
        } else {
            vue.$vcu.confirm = confirm
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