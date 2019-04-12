<template>
    <!-- <sidebar class="sidebar-container"/> -->
    <!-- <div class="main-container"> -->

        <b-container>
            <b-row>
              <p>爱影搜索</P>
            </b-row>
            <b-row class="text-center">
            <b-col>1 of 3</b-col>
            <b-col cols="8">
              <b-input-group  class="mt-3">
                <b-form-input />
                <b-input-group-append>
                  <b-button variant="outline-success">Button</b-button>
                </b-input-group-append>
              </b-input-group>
            </b-col>
            <b-col>3 of 3</b-col>
          </b-row>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">Button</button>
              <button class="btn btn-outline-secondary" type="button">Button</button>
            </div>
          </div>
        </b-container>
    <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
/*! CSS Used from: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1/css/font-awesome.min.css */
[class^="icon-"]{font-family:FontAwesome;font-weight:normal;font-style:normal;text-decoration:inherit;-webkit-font-smoothing:antialiased;*margin-right:.3em;}
[class^="icon-"]:before{text-decoration:inherit;display:inline-block;speak:none;}
[class^="icon-"]{display:inline;width:auto;height:auto;line-height:normal;vertical-align:baseline;background-image:none;background-position:0% 0%;background-repeat:repeat;margin-top:0;}
.icon-film:before{content:"\f008";}
/*! CSS Used from: http://ilxdh.com/css/style.css?v=4564624 */
div,li,ul{margin:0;padding:0;}
li{list-style:none;}
a{text-decoration:none;}
.clearfix:after{content:"";display:block;clear:both;}
.clearfix{zoom:1;}
a{color:#504343;text-decoration:none;transition:all 0.15s;}
.main-nav{width:1000px;margin:20px auto;background-color:#fff;}
.main-nav .tab{border-bottom:1px solid #E9E9E9;}
.main-nav .tab .big-cat{float:left;width:100px;min-height:37px;}
.main-nav .tab .big-cat span{display:block;text-align:center;font-size:15px;background-color:#E54348;color:#fff;letter-spacing:1px;}
.main-nav .tab .small-cat{float:left;min-height:37px;width:900px;}
.main-nav .tab .small-cat ul li{float:left;height:37px;padding:0 15px;line-height:37px;font-size:14px;color:#000;cursor:pointer;letter-spacing:1px;}
.main-nav .tab .small-cat ul li.current{margin-bottom:-1px;color:#E54348;border-bottom:1px solid #E54348;}
.main-nav .lx-sites-details .content-container{display:none;}
.main-nav .lx-sites-details .content-container.show{display:block;}
.main-nav .lx-sites-details .content-container .tags-content{padding:10px;}
.main-nav .lx-sites-details .content-container .tags-content ul{text-align:center;font-size:0;}
.main-nav .lx-sites-details .content-container .tags-content ul li{display:inline-block;height:22px;font-size:13px;line-height:22px;color:#000;padding:2px 14px;letter-spacing:1px;cursor:pointer;border-radius:13px;margin-right:10px;}
.main-nav .lx-sites-details .content-container .tags-content ul li.active{color:#fff;background-color:#E54348;}
.main-nav .lx-sites-details .content-container .sites-content ul li{float:left;width:142px;height:36px;line-height:36px;text-align:center;font-size:14px;border-right:1px solid #E9E9E9;border-top:1px solid #E9E9E9;border-bottom:1px solid #E9E9E9;margin-top:-1px;}
.main-nav .lx-sites-details .content-container .sites-content ul li:nth-of-type(7n){margin-right:-1px;}
.main-nav .lx-sites-details .content-container .sites-content ul li a{display:block;}
.main-nav .lx-sites-details .content-container .sites-content ul li a:hover{color:#E54348;background-color:#FBFBFB;}
.main-nav .lx-sites-details .content-container .sites-content ul li.important a{color:#d81e06;}
.main-nav .lx-sites-details .content-container .sites-content ul li.important a:hover{color:#E54348;background-color:#FBFBFB;}
.main-nav .lx-sites-details .content-container .sites-content ul li.heart a{background:url("http://ilxdh.com/images/tuijian.png") no-repeat;background-size:15px;background-position:124px 13px;}
/*! CSS Used fontfaces */
@font-face{font-family:'FontAwesome';src:url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1/font/fontawesome-webfont.eot?v=3.2.1');src:url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1/font/fontawesome-webfont.eot#iefix&v=3.2.1') format('embedded-opentype'),url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1/font/fontawesome-webfont.woff?v=3.2.1') format('woff'),url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1/font/fontawesome-webfont.ttf?v=3.2.1') format('truetype'),url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1/font/fontawesome-webfont.svg#fontawesomeregular?v=3.2.1') format('svg');font-weight:normal;font-style:normal;}
</style>
