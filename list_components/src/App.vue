<template>
  <section>
    <ul class="users-list">
      <li v-for="user in getUsersList" :key="user.id" class="user">
        <span class="user__id">{{user.id}})</span>
        <img :src="user.avatar" alt="" class="user__avatar">
        <p class="user__name">{{user.first_name}} {{user.last_name}}</p>
      </li>
    </ul>
  </section>
</template>

<script>
import store from './store';
import { mapGetters, mapActions } from 'vuex';
export default {
  store,
  name: 'userList',
  computed: mapGetters(['getUsersList']),
  methods: {
    ...mapActions(['loadList'])
  },
  async mounted() {
    this.loadList();
  }
}
</script>

<style lang="scss">
  .users-list {
    list-style: none;
    width: 100%;
    background: rgba(153, 153, 153, 0.1);
    margin: 0;
    padding: 15px 30px;
    box-sizing: border-box;
  }
  .user {
    display: flex;
    align-items: center;
    transition: .2s;
    cursor: pointer;
    border-top: 1px #333;
    &:hover {
      background: #999;
    }
    .user__id {
      font-weight: bold;
      margin-right: 10px;
    }
    .user__avatar {
      height: 36px;
      width: 36px;
      margin-right: 15px;
    }
  }
</style>