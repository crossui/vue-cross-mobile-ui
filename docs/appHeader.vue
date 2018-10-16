<template>
    <header id='header'>
        <v-row>
            <v-col :span="4">
                <router-link to="/" id='logo'>
                    <div title="Vue Cross Mobile UI">
                        <img alt='logo' height='32' src='./assets/logo.png' />
                        <span> Vue CrossMobile Ui</span>
                    </div>
                </router-link>
            </v-col>
            <v-col :span="18">
                <div id='header-search-box' style='display: block;'>
                    <v-select ref="headerMenu" placeholder='搜索组件...' style='width: 200px' :showArrow="false" showSearch @select="onSelect">
                        <v-select-option :key="index" :value="child.name" v-for="(child,index) in routersed">
                            {{child.title}}
                        </v-select-option>
                    </v-select>
                </div>
            </v-col>
            <v-col :span="2">
                <v-button-group size="small" class="margin-top-20">
                    <v-button icon="scan" @click="handleShowEwm"></v-button>
                    <v-button icon="github-fill"></v-button>
                </v-button-group>
            </v-col>
        </v-row>

        <v-modal :visible="visible" :footer="null" @cancel="handleCancel">
            <p style="text-align: center;"><img src="./assets/qrcode.png" /></p>
        </v-modal>
    </header>
</template>
<script>
import { menuRouter } from './router/router';
export default {
    data() {
        return {
            visible: false
        }
    },
    computed: {
        routersed() {
            let _reouter = []
            menuRouter.forEach((item) => {
                item.children.forEach((child) => {
                    _reouter.push(child)
                })
            })
            return _reouter;
        }
    },
    methods: {
        onSelect(val) {
            this.$router.push({
                name: val
            });
        },
        handleShowEwm() {
            this.visible = true
        },
        handleCancel() {
            this.visible = false
        }
    }
}
</script>
<style lang="less">
@import "./style/appHeader.less";
</style>