import Vue from 'vue';

// 将在各处使用该事件中心
// 组件通过它来通信
const hub = new Vue();
export default hub;
