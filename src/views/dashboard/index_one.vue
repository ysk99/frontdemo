<template>
  <div id="app">
    <br>
    <b-row>
            <b-col cols="8">
              <b-carousel id="carousel1"
                            style="text-shadow: 1px 1px 2px #333;"
                            controls
                            indicators
                            background="#ababab"
                            :interval="4000"
                            img-width="1024"
                            img-height="480"
                            v-model="slide"
                            @sliding-start="onSlideStart"
                            @sliding-end="onSlideEnd"
                >

                  <!-- Text slides with image -->
                  <b-carousel-slide caption="First slide"
                                    text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                                    img-src="https://picsum.photos/1024/480/?image=52"
                  ></b-carousel-slide>

                  <!-- Slides with custom text -->
                  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                    <h1>Hello world!</h1>
                  </b-carousel-slide>

                  <!-- Slides with image only -->
                  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
                  </b-carousel-slide>

                  <!-- Slides with img slot -->
                  <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                  <b-carousel-slide>
                    <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                         src="https://picsum.photos/1024/480/?image=55" alt="image slot">
                  </b-carousel-slide>

                  <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                  <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
                      ut lacus vel interdum.
                    </p>
                  </b-carousel-slide>

                </b-carousel>
<!--
                <p class="mt-4">
                  Slide #: {{ slide }}<br>
                  Sliding: {{ sliding }}
                </p> -->
            </b-col>
            <b-col cols="4">热门排行</b-col>
        </b-row>
      </br>
        <div id="lx-movie" class="main-nav">
          <div class="tab clearfix">
            <div class="big-cat" style="height: 37px;">
              <span style="height: 38px; line-height: 38px;">
                <i class="icon-film"></i>影视欣赏</span>
            </div>
            <!-- <div class="small-cat clearfix">
              <ul>
                <li class="current">最新影视</li>
            </div> -->
          </div>
          <div class="lx-sites-details">
            <div class="content-container show">
              <div class="sites-content">
                <ul class="clearfix">
                  <li class="important heart" v-for="arrOnline in arrOnlines"><a :href="arrOnline.address" target="_blank">{{arrOnline.title}}</a></li>
                  <li class="important heart">
                    <a href="http://ifkdy.com/" target="_blank">疯狂影视搜索</a></li>
                  <li class="important">
                    <a href="http://czjx8.com/" target="_blank">vip视频解析</a></li>
                  <li>
                    <a href="http://www.pniao.com/" target="_blank">胖鸟电影</a></li>
                  <li>
                    <a href="http://www.mp4ba.com/" target="_blank">高清MP4吧</a></li>
                  <li>
                    <a href="http://www.xunyingwang.com/" target="_blank">迅影网</a></li>
                  <li>
                    <a href="https://neets.cc/" target="_blank">neets</a></li>
                  <li>
                    <a href="https://www.dygod.net/" target="_blank">电影天堂</a></li>
                </ul>
              </div>
            </div>
            </div>
        </div>
        <div id="lx-movie" class="main-nav">
          <div class="tab clearfix">
            <div class="big-cat" style="height: 37px;">
              <span style="height: 38px; line-height: 38px;">
                <i class="icon-film"></i>TV欣赏</span>
            </div>
            <!-- <div class="small-cat clearfix">
              <ul>
                <li class="current">最新影视</li>
            </div> -->
          </div>
          <div class="lx-sites-details">
            <div class="content-container show">
              <div class="sites-content">
                <ul class="clearfix">
                  <li class=" heart" v-for="arrDownload in arrDownloads"><a :href="'http://'+arrDownload.address" target="_blank">{{arrDownload.title}}</a></li>
                  <li class="important heart">
                    <a href="http://ifkdy.com/" target="_blank">疯狂影视搜索</a></li>
                  <li class="important">
                    <a href="http://czjx8.com/" target="_blank">vip视频解析</a></li>
                  <li>
                    <a href="http://www.pniao.com/" target="_blank">胖鸟电影</a></li>
                  <li>
                    <a href="http://www.mp4ba.com/" target="_blank">高清MP4吧</a></li>
                  <li>
                    <a href="http://www.xunyingwang.com/" target="_blank">迅影网</a></li>
                  <li>
                    <a href="https://neets.cc/" target="_blank">neets</a></li>
                  <li>
                    <a href="https://www.dygod.net/" target="_blank">电影天堂</a></li>
                </ul>
              </div>
            </div>
            </div>
        </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getList, getIp } from '@/api/table'

export default {
  name: 'index_one',
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
    this.fetchData(),
    this.fetchIp()
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
                    case "movie":
                      arrOnlines.push(list[i]);
                      i_movie++;
                      break;
                    case "tv":
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
   },
   fetchIp(){
     getIp().then(response=>{
       console.log(response.data);
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
[class^="icon-"]{font-family:FontAwesome;font-weight:normal;font-style:normal;text-decoration:inherit;-webkit-font-smoothing:antialiased;*margin-right:.3em;}
[class^="icon-"]:before{text-decoration:inherit;display:inline-block;speak:none;}
[class^="icon-"]{display:inline;width:auto;height:auto;line-height:normal;vertical-align:baseline;background-image:none;background-position:0% 0%;background-repeat:repeat;margin-top:0;}
.icon-film:before{content:"\f008";}
/*! CSS Used from: http://ilxdh.com/css/style.css?v=4564624 */
li{list-style:none;}
a{text-decoration:none;}
.clearfix:after{content:"";display:block;clear:both;}
.clearfix{zoom:1;padding:0;}
a{color:#F8FBEF;text-decoration:none;transition:all 0.15s;}
.main-nav{margin:20px auto;background-color:#fff;margin:0;padding:0;}
.main-nav .tab{border-bottom:1px solid #E9E9E9;margin:0;padding:0;}
.main-nav .tab .big-cat{float:left;width:100px;min-height:37px;}
.main-nav .tab .big-cat span{display:block;text-align:center;font-size:15px;background-color:#088A08;color:#fff;letter-spacing:1px;}
.main-nav .tab .small-cat{float:left;min-height:37px;width:900px;}
.main-nav .tab .small-cat ul li{float:left;height:37px;padding:0 15px;line-height:37px;font-size:14px;color:#000;cursor:pointer;letter-spacing:1px;}
.main-nav .tab .small-cat ul li.current{margin-bottom:-1px;color:#E54348;border-bottom:1px solid #E54348;}
.main-nav .lx-sites-details .content-container{display:none;margin:0;padding:0;}
.main-nav .lx-sites-details .content-container.show{display:block;margin:0;padding:0;}
.main-nav .lx-sites-details .content-container .tags-content{padding:10px;}
.main-nav .lx-sites-details .content-container .tags-content ul{text-align:center;font-size:0;}
.main-nav .lx-sites-details .content-container .tags-content ul li{display:inline-block;height:22px;font-size:13px;line-height:22px;color:#000;padding:2px 10px;letter-spacing:1px;cursor:pointer;border-radius:13px;margin-right:10px;}
.main-nav .lx-sites-details .content-container .tags-content ul li.active{color:#fff;background:rgba(0,0,0,.45);}
.main-nav .lx-sites-details .content-container .sites-content ul li{background:rgba(0,0,0,.35);color:#FFF;float:left;width:12.5%;height:36px;line-height:36px;text-align:center;font-size:14px;border-left:1px solid #E9E9E9;border-right:1px solid #E9E9E9;border-top:1px solid #E9E9E9;border-bottom:1px solid #E9E9E9;margin-top:-1px;}
.main-nav .lx-sites-details .content-container .sites-content ul li:nth-of-type(7n){margin-right:-1px;}
.main-nav .lx-sites-details .content-container .sites-content ul li a{display:block;}
.main-nav .lx-sites-details .content-container .sites-content ul li a:hover{font-size:15px;color:#088A08;background-color:#ECEFF2;}
// .main-nav .lx-sites-details .content-container .sites-content ul li.important a{color:#088A08;}
// .main-nav .lx-sites-details .content-container .sites-content ul li.important a:hover{color:#088A08;font-size:15px;background-color:#ECEFF2;}
// .main-nav .lx-sites-details .content-container .sites-content ul li.heart a{background:url("../../assets/tuijian.png") no-repeat;background-size:15px;background-position:124px 13px;}
// .main-nav .lx-sites-details .content-container .sites-content ul li.heart a:hover{background:url("../../assets/tuijian.png") no-repeat;font-size:15px;color:#088A08;background-color:#ECEFF2;background-size:15px;background-position:124px 13px;}
/*! CSS Used fontfaces */
@font-face{font-family:'FontAwesome';src:url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1/font/fontawesome-webfont.eot?v=3.2.1');src:url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1/font/fontawesome-webfont.eot#iefix&v=3.2.1') format('embedded-opentype'),url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1/font/fontawesome-webfont.woff?v=3.2.1') format('woff'),url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1/font/fontawesome-webfont.ttf?v=3.2.1') format('truetype'),url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1/font/fontawesome-webfont.svg#fontawesomeregular?v=3.2.1') format('svg');font-weight:normal;font-style:normal;}
</style>
