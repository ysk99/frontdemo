<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <!-- <b-navbar-brand href="#">
      <img width="35" height="35" src="@/assets/logo.png">
    </b-navbar-brand>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#">爱影聚合<b-badge>.online</b-badge></b-navbar-brand> -->
    <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav>
      <b-nav-item href="/#/">首页0</b-nav-item>
      <b-nav-item href="/#/1">首页1</b-nav-item>
      <b-nav-item href="/#/example">在线影城</b-nav-item>
      <b-nav-item href="/#/form">免费会员</b-nav-item>
      <b-nav-item href="/#/login">最近热门</b-nav-item>
    </b-navbar-nav>
  <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
    <b-nav-form>
      <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="输入关键词"/>
      <b-button size="sm" class="my-2 my-sm-0" type="submit">搜索</b-button>
    </b-nav-form>

    <!-- <b-nav-item-dropdown text="Lang" right>
      <b-dropdown-item href="#">EN</b-dropdown-item>
      <b-dropdown-item href="#">ES</b-dropdown-item>
      <b-dropdown-item href="#">RU</b-dropdown-item>
      <b-dropdown-item href="#">FA</b-dropdown-item>
    </b-nav-item-dropdown> -->

    <!-- <b-nav-item-dropdown right> -->
      <!-- Using button-content slot -->
      <!-- <template slot="button-content">
        <em>User</em>
      </template>
      <b-dropdown-item href="#">Profile</b-dropdown-item>
      <b-dropdown-item href="#">Signout</b-dropdown-item>
    </b-nav-item-dropdown> -->
  </b-navbar-nav>

</b-collapse>
</b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
