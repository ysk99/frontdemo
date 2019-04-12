<template>
  <div id="app">
        <section class="item card-box" id="row-1">
                    <div class="container-fluid">
                      <div class="row">
                        <div class="item-tit">
                          <strong><i class="fa fa-video-camera"></i>精选在线观看</strong>
                        </div>
                        <!--获取内容列表-->
                        <div class="clearfix ">

                            <div class="col-md-3 col-sm-4 col-xs-6" v-for="arrOnline in arrOnlines">
                              <a :href="arrOnline.address" class="card-link" target="_blank"  v-b-popover.hover="arrOnline.desc">
                                <div class="card-tit"><img :data-original="'http://localhost/api/public/uploads/'+arrOnline.files_address" :src="'http://localhost/api/public/uploads/'+arrOnline.files_address" style="display: inline;">{{arrOnline.title}}</div>
                                <div class="card-desc">{{arrOnline.desc}}</div>
                              </a>
                            </div>

                            <!-- <div class="col-md-3 col-sm-4 col-xs-6">
                              <a href="http://www.jikexueyuan.com/" class="card-link" target="_blank">
                                <div class="card-tit"><img data-original="/upload/images/2018/3/842106729c4621e7.jpg" src="/upload/images/2018/3/842106729c4621e7.jpg" style="display: inline;">极客学院</div>
                                <div class="card-desc">一家很不错的IT职业在线教育平台，入门教程视频通俗易懂，很适合新手学习。</div>
                              </a>
                            </div> -->
                        </div>
                      </div>
                    </div>
                  </section>
                  <section class="item card-box" id="row-1">
                              <div class="container-fluid">
                                <div class="row">
                                  <div class="item-tit">
                                    <strong><i class="fa fa-video-camera"></i>高清影视下载</strong>
                                  </div>
                                  <!--获取内容列表-->
                                  <div class="clearfix ">

                                      <div class="col-md-3 col-sm-4 col-xs-6" v-for="arrDownload in arrDownloads" >
                                        <a :href="arrDownload.address" class="card-link" target="_blank" v-b-popover.hover="arrDownload.desc">
                                          <div class="card-tit"><img :data-original="'http://localhost/api/public/uploads/'+arrDownload.files_address" :src="'http://localhost/api/public/uploads/'+arrDownload.files_address" style="display: inline;">{{arrDownload.title}}</div>
                                          <div class="card-desc">{{arrDownload.desc}}</div>
                                        </a>
                                      </div>

                                  </div>
                                </div>
                              </div>
                            </section>
        <!-- <b-row>
          <b-tabs card>
            <b-tab title="电影" active>
              <b-row>
                <b-col>1 of 3</b-col>
                <b-col>2 of 3</b-col>
                <b-col>3 of 3</b-col>
                <b-col>3 of 3</b-col>
            </b-row>
            </b-tab>
            <b-tab title="电视剧" >

            </b-tab>
            <b-tab title="福利视频" >

            </b-tab>
          </b-tabs>
        </b-row> -->

  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import { getList } from '@/api/table'

export default {
  name: 'Dashboard',
  data() {
    return {
      slide: 0,
      list: null,
      arrOnlines: null,
      arrDownloads: null,
      listTemp: null,
      sliding: null
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  created() {
    this.fetchData()
  },
  methods: {
    onSlideStart (slide) {
     this.sliding = true
   },
   onSlideEnd (slide) {
     this.sliding = false
   },
   fetchData() {
     getList().then(response => {
                // this.list1s = response.data;
                // var list = response.data;
                // var arrTemp = [];
                // var index = 0;
                // var sectionCount = 7;
                // for (var i = 0; i < list.length; i++) {
                //     index = parseInt(i / sectionCount);
                //     if (arrTemp.length <= index) {
                //         arrTemp.push([]);
                //     }
                //     arrTemp[index].push(list[i]);
                // }
                // // return arrTemp;
                // this.listTemp = arrTemp
                // // console.log("arrTemp")
                // console.log(this.list1s)
                var i_movie = 0;
                var i_tv = 0;
                var arrOnlines = [];
                var arrDownloads = [];
                var list = response.data;
                console.log(list);
                for (var i = 0; i < list.length; i++) {
                  switch (list[i].leibie) {
                    case "online":
                      arrOnlines.push(list[i]);
                      i_movie++;
                      break;
                    case "download":
                      arrDownloads.push(list[i]);
                      i_tv++;
                      break;
                    default:

                  }
                    // if (arrTemp.length <= index) {
                    //     arrTemp[index].push(list[i]);
                    // }
                }
                // return arrOnlines;
                this.arrOnlines = arrOnlines;
                this.arrDownloads = arrDownloads;
                console.log(this.arrOnlines);
                console.log(this.arrDownloads);
                // this.list1s = arrOnlines;
      })
   }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
section{display:block;}
a{background:0 0;}
a:focus{outline:thin dotted;}
a:active,a:hover{outline:0;}
strong{font-weight:700;}
img{border:0;}
.clearfix:after,.clearfix:before,.container-fluid:after,.container-fluid:before,.row:after,.row:before{display:table;content:" ";}
.clearfix:after,.container-fluid:after,.row:after{clear:both;}
*,:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
a{color:#145ccd;text-decoration:none;-webkit-transition:all .4s cubic-bezier(.175,.885,.32,1);-o-transition:all .4s cubic-bezier(.175,.885,.32,1);transition:all .4s cubic-bezier(.175,.885,.32,1);}
a:focus,a:hover{color:#0d3d88;text-decoration:underline;}
a:focus{outline:thin dotted #333;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px;}
img{max-width:100%;vertical-align:middle;}
::-moz-selection{text-shadow:none;background:#b3d4fc;}
::selection{text-shadow:none;background:#b3d4fc;}
.container-fluid{padding-right:10px;padding-left:10px;margin-right:auto;margin-left:auto;}
.row{margin-right:-10px;margin-left:-10px;}
.col-md-3,.col-sm-4,.col-xs-6{position:relative;min-height:1px;padding-right:10px;padding-left:10px;}
.col-xs-6{float:left;}
.col-xs-6{width:50%;}
@media (min-width:768px){
.col-sm-4{float:left;}
.col-sm-4{width:33.33333333%;}
}
@media (min-width:992px){
.col-md-3{float:left;}
.col-md-3{width:25%;}
}
@media (min-width:768px){
::-webkit-scrollbar{width:10px;height:10px;}
::-webkit-scrollbar-button{width:0;height:0;}
::-webkit-scrollbar-thumb{min-height:28px;padding-top:100;background-color:rgba(0,0,0,.2);-webkit-background-clip:padding-box;background-clip:padding-box;border-radius:5px;-webkit-box-shadow:inset 1px 1px 0 rgba(0,0,0,.1),inset 0 -1px 0 rgba(0,0,0,.07);}
::-webkit-scrollbar-thumb:hover{background-color:rgba(0,0,0,.4);-webkit-box-shadow:inset 1px 1px 1px rgba(0,0,0,.25);}
::-webkit-scrollbar-thumb:active{background-color:rgba(0,0,0,.5);-webkit-box-shadow:inset 1px 1px 3px rgba(0,0,0,.35);}
::-webkit-scrollbar-track:hover{background-color:rgba(0,0,0,.05);-webkit-box-shadow:inset 1px 0 0 rgba(0,0,0,.1);}
::-webkit-scrollbar-track:active{background-color:rgba(0,0,0,.05);-webkit-box-shadow:inset 1px 0 0 rgba(0,0,0,.14),inset -1px -1px 0 rgba(0,0,0,.07);}
}
/*! CSS Used from: http://webjike.com/css/style.css?v=20181222 */
a:hover,a:active,a:focus{text-decoration:none;}
i.fa{margin-right:6px;}
.col-xs-6,.col-sm-4,.col-md-3{padding:0px 5px;}
.item{width:100%;}
.item > .container-fluid{padding-top:0;margin-top:0;}
.item > .container-fluid .row{padding:10px 5px;}
.item-tit > strong{color:#999;font-size:18px;font-weight:400;display:block;margin-bottom:10px;padding-left:5px;}
.item-tit > strong > i{margin-right:5px;font-size:18px;}
.card-link{display:block;padding:10px 10px;border-radius:5px;overflow:hidden;margin-bottom:10px;background:#fff;transition:all 0.2s ease-out;-moz-transition:all 0.2s ease-out;-webkit-transition:all 0.2s ease-out;-o-transition:all 0.2s ease-out;}
.card-link:hover{transform:translateY(-5px);-ms-transform:translateY(-5px);-moz-transform:translateY(-5px);-webkit-transform:translateY(-5px);-o-transform:translateY(-5px);box-shadow:4px 4px 10px rgba(204, 204, 204, 0.5);-moz-box-shadow:4px 4px 10px rgba(204, 204, 204, 0.5);}
.card-tit{height:40px;font-size:14px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:normal;}
.card-tit img{width:40px;height:40px;border-radius:50%;margin-right:5px;}
.card-desc{color:gray;font-size:12px;padding-top:10px;height:45px;overflow:hidden;text-overflow:ellipsis;white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;}
@media (min-width: 768px){
.col-xs-6,.col-sm-4,.col-md-3{padding:0 10px;}
.item-tit > strong{padding:5px 0 0 10px;margin-bottom:10px;}
}
@media (min-width: 992px){
.item > .container-fluid .row{padding:0;}
.card-box .col-md-3{padding:0 7.5px;}
.card-link{margin-bottom:15px;}
}
@media (min-width: 1200px){
.item > .container-fluid{padding:0;padding-top:91px;margin-top:-65px;}
}
@media (min-width: 1700px){
.col-md-3{width:20%;}
}
/*! CSS Used from: http://webjike.com/css/font-awesome.min.css */
.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
.fa-video-camera:before{content:"\f03d";}
/*! CSS Used fontfaces */
@font-face{font-family:'FontAwesome';src:url('http://webjike.com/fonts/fontawesome-webfont.eot');src:url('http://webjike.com/fonts/fontawesome-webfont.eot') format('embedded-opentype'),url('http://webjike.com/fonts/fontawesome-webfont.woff2') format('woff2'),url('http://webjike.com/fonts/fontawesome-webfont.woff') format('woff'),url('http://webjike.com/fonts/fontawesome-webfont.ttf') format('truetype'),url('http://webjike.com/fonts/fontawesome-webfont.svg') format('svg');font-weight:normal;font-style:normal;}
</style>
