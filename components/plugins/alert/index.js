import objectAssign from 'object-assign'
import AlertComponent from '../../modal/alert'
import { mergeOptions } from '../../libs/plugin_helper'

let $vm
let watcher

const plugin = {
    install(vue, pluginOptions = {}) {
        const Alert = vue.extend(AlertComponent)

        if (!$vm) {
            $vm = new Alert({
                el: document.createElement('div')
            })
            document.body.appendChild($vm.$el)
        }


        const alert = {
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
                alert
            }
        } else {
            vue.$vcu.alert = alert
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