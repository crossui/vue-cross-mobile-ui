<template>
  <div class="vcu-panel vcu-panel_access">
    <div class="vcu-panel__hd" v-if="header" @click="onClickHeader" v-html="header">
      <slot name="header"></slot>
    </div>
    <div class="vcu-panel__bd">
      <slot name="body">
        <!--type==='1'-->
        <template v-if="type === '1'">
          <a :href="getUrl(item.url)" v-for="item in list" @click.prevent="onItemClick(item)" class="vcu-media-box vcu-media-box_appmsg">
            <div class="vcu-media-box__hd" v-if="item.src">
              <img class="vcu-media-box__thumb" :src="item.src" @error="onImgError(item, $event)" alt="">
            </div>
            <div class="vcu-media-box__bd">
              <h4 class="vcu-media-box__title" v-html="item.title"></h4>
              <div class="vcu-media-box__desc" v-html="item.desc"></div>
            </div>
          </a>
        </template>
        <!--type==='2'-->
        <template v-if="type === '2'">
          <div class="vcu-media-box vcu-media-box_text" v-for="item in list" @click.prevent="onItemClick(item)">
            <h4 class="vcu-media-box__title" v-html="item.title"></h4>
            <div class="vcu-media-box__desc" v-html="item.desc"></div>
          </div>
        </template>
        <!--type==='3'-->
        <template v-if="type === '3'">
          <div class="vcu-media-box vcu-media-box_small-appmsg">
            <div class="vcu-cells">
              <a class="vcu-cell vcu-cell_access" :href="getUrl(item.url)" v-for="item in list" @click.prevent="onItemClick(item)">
                <div class="vcu-cell__hd">
                  <img :src="item.src" alt="" @error="onImgError(item, $event)" style="width:20px;margin-right:5px;display:block">
                </div>
                <div class="vcu-cell__bd">
                  <div v-html="item.title"></div>
                </div>
                <span class="vcu-cell__ft"></span>
              </a>
            </div>
          </div>
        </template>
        <!--type==='4'-->
        <template v-if="type === '4'">
          <div class="vcu-media-box vcu-media-box_text" v-for="item in list" @click.prevent="onItemClick(item)">
            <h4 class="vcu-media-box__title" v-html="item.title"></h4>
            <div class="vcu-media-box__desc" v-html="item.desc"></div>
            <ul class="vcu-media-box__info" v-if="item.meta">
              <li class="vcu-media-box__info__meta" v-html="item.meta.source"></li>
              <li class="vcu-media-box__info__meta" v-html="item.meta.date"></li>
              <li class="vcu-media-box__info__meta vcu-media-box__info__meta_extra" v-html="item.meta.other"></li>
            </ul>
          </div>
        </template>
        <!--type==='5'-->
        <template v-if="type === '5'">
          <div class="vcu-media-box vcu-media-box_text" v-for="item in list" @click.prevent="onItemClick(item)">
            <div class="vcu-media-box_appmsg">
              <div class="vcu-media-box__hd" v-if="item.src">
                <img class="vcu-media-box__thumb" @error="onImgError(item, $event)" :src="item.src" alt="">
              </div>
              <div class="vcu-media-box__bd">
                <h4 class="vcu-media-box__title" v-html="item.title"></h4>
                <div class="vcu-media-box__desc" v-html="item.desc"></div>
              </div>
            </div>
            <ul class="vcu-media-box__info" v-if="item.meta">
              <li class="vcu-media-box__info__meta" v-html="item.meta.source"></li>
              <li class="vcu-media-box__info__meta" v-html="item.meta.date"></li>
              <li class="vcu-media-box__info__meta vcu-media-box__info__meta_extra" v-html="item.meta.other"></li>
            </ul>
          </div>
        </template>
        <!--type==='6'-->
        <template v-if="type === '6'">
          <a :href="getUrl(item.url)" v-for="item in list" @click.prevent="onItemClick(item)" class="vcu-media-box vcu-media-box_appmsg">
            <div class="vcu-media-box__hd" v-if="item.label">
              <div class="vcu-media-box__label" v-html="item.label"></div>
            </div>
            <div class="vcu-media-box__bd">
              <h4 class="vcu-media-box__title" v-html="item.title"></h4>
              <div class="vcu-media-box__desc" v-html="item.desc"></div>
            </div>
          </a>
        </template>
      </slot>
    </div>
    <div class="vcu-panel__ft">
      <a class="vcu-cell vcu-cell_access vcu-cell_link" :href="getUrl(footer.url)" v-if="footer && footer.title && type !== '3'" @click.prevent="onClickFooter">
        <div class="vcu-cell__bd" v-html="footer.title"></div>
      </a>
    </div>
  </div>
</template>

<script>
import { go, getUrl } from '../libs/router'

export default {
  name: 'VPanel',
  props: {
    header: String,
    footer: Object,
    list: Array,
    type: {
      type: String,
      default: '1'
    }
  },
  methods: {
    onImgError(item, $event) {
      this.$emit('on-img-error', JSON.parse(JSON.stringify(item)), $event)
      if (item.fallbackSrc) {
        $event.target.src = item.fallbackSrc
      }
    },
    getUrl(url) {
      return getUrl(url, this.$router)
    },
    onClickFooter() {
      this.$emit('on-click-footer')
      go(this.footer.url, this.$router)
    },
    onClickHeader() {
      this.$emit('on-click-header')
    },
    onItemClick(item) {
      this.$emit('on-click-item', item)
      go(item.url, this.$router)
    }
  }
}
</script>
