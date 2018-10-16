import objectAssign from 'object-assign'
import PromptComponent from '../../modal/prompt'
import { mergeOptions } from '../../libs/plugin_helper'

let $vm
let watcher

const plugin = {
    install(vue, pluginOptions = {}) {
        const Prompt = vue.extend(PromptComponent)

        if (!$vm) {
            $vm = new Prompt({
                el: document.createElement('div')
            })
            document.body.appendChild($vm.$el)
        }


        const prompt = {
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
                prompt
            }
        } else {
            vue.$vcu.prompt = prompt
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