<template>
  <div>
    <div class="header">
      <img src="@/assets/images/logo_double.svg" alt="mizphses.com 寒中見舞いサイト" />
    </div>
    <div v-for="(data, index) in activities" :key="data.title">
      <div class="nakami-top" :style="{backgroundImage: `url(${data['image']})`, backgroundSize: 'cover'}" v-if="index == randomnum">
        <img src="@/assets/images/title.svg" alt="寒中お見舞い申し上げます" class="title_text" />
        <div class="nakami-setumei">
          <p class="titleline">{{data["title"]}}</p>
          <p>{{data["body"]}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const activities = [
  {"image": "/1-1.JPG", "title": "美保の松原", "body": "富士山が綺麗でした"},
  {"image": "/3-1.JPG", "title": "ブレードサーバー導入", "body": "長野県長野市（公有財産売却）から調達."},
  {"image": "/3-2.JPG", "title": "ナールMほか", "body": "書体讃歌さん(文字マニアの人)から譲っていただきました．本当に感謝．"},
  {"image": "/4-1.JPG", "title": "活版印刷", "body": "印刷博物館で活版印刷の体験を数年ぶりにしてきました．味がある．"},
  {"image": "/5-1.JPG", "title": "BLドラマの聖地", "body": "当時住んでた家の最寄りコインランドリーがBLドラマの聖地になりました．"},
  {"image": "/7-1.JPG", "title": "さわやか", "body": "1月以来時々食べに行きます．美味しいよね．"},
  {"image": "/9-1.JPG", "title": "ボストン研修（Global FLP）", "body": "ボストンに大学の研修で行ってきました．写真はエジプト人男性の阿部寛．"},
  {"image": "/9-2.JPG", "title": "引っ越し", "body": "旧居から引っ越しました．新居は防音性が高いです．"},
  {"image": "/11-1.JPG", "title": "トド岩", "body": "小春六花のヨーグルトを食べると島流しにされます．（札幌旅行で行ってきた）"},
  {"image": "/12.JPG", "title": "来年の抱負", "body": "写真のYogibo(1年半使った)のようにダラダラした1年でした．来年は色々作ります．"}
  ]
const randomnum = Math.floor( Math.random() * 10 );
</script>

<style lang="scss" scoped>
.header{
  box-sizing: border-box;
  padding-top: 100px;
  padding-left: 100px;
  position: absolute;
  top: 0;
  left: 0;
  background-size: 400% 400%;/*サイズを大きくひきのばす*/
  animation: bggradient 20s ease infinite;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  img{
    width: 100%;
    max-width: 400px;
  }
}
.nakami-top{
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 2em;
  // background: #ededed;
  .title_text{
    position: absolute;
    top: 10%;
    right: 10%;
    max-height: 80vh;
    max-width: 60vw;
    z-index: 200;
  }
  .nakami-setumei{
    position: absolute;
    bottom: 100px;
    left: 100px;
    width: 25em;
    padding: 1em 2em 1em 2em;
    background: white;
    font-size: 1.3em;
    line-height: 1;
    z-index: 200;
  }
  .timeline{
    font-weight: 700;
    font-size: 0.7em;
  }
  .titleline{
    font-weight: bold;
    font-size: 1.3em;
  }
}
  .nakami-top::before {
    content: '';
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
  }

</style>
<script setup lang="ts">
</script>