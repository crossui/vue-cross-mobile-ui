<style lang="less" scoped>
</style>
<template>
    <div>
        <v-menu mode="inline" :defaultOpenKeys="openKeys" :selectedKeys="[`${$route.name}`]" @click="handleClick">
            <v-menu-item key="getting-started">
                快速上手
            </v-menu-item>
            <v-menu-item key="themes">
                定制主题
            </v-menu-item>
            <v-menu-item key="directives">
                指令 Directives
            </v-menu-item>
            <v-sub-menu key="sub">
                <span slot="title">
                    <v-icon type="appstore" />
                    <span>组件</span>
                </span>
                <template v-for="item in routers">
                    <v-menu-item-group :key="item.name" :title="item.title">
                        <template v-for="child in item.children">
                            <v-menu-item :key="child.name">
                                {{child.title}}
                            </v-menu-item>
                        </template>
                    </v-menu-item-group>
                </template>
                <!--
                
                <a-menu-item-group key="Other" title="其他">
                    <a-menu-item key="LocaleProvider">
                        LocaleProvider 国际化
                    </a-menu-item>
                </a-menu-item-group> -->
            </v-sub-menu>
            <v-menu-item key="mores">
                更多组件
            </v-menu-item>
        </v-menu>
    </div>
</template>
<script>
import { menuRouter } from './router/router';
export default {
    data() {
        return {
            openKeys: ['sub'],
            routers: menuRouter
        }
    },
    computed: {
        current() {
            let _current = new Array;
            _current.push(this.$route.name)
            return _current
        }
    },
    methods: {
        handleClick(obj) {
            this.$router.push({
                name: obj.key
            });
        }
    },
    mounted() {
    }
}
</script>
