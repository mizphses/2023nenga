<template>
  <div>

    <div class="sizing-message">
      <p>本WEBサイトは1024px以上の環境でご覧ください．</p>
    </div>
    <div class="cover-message">
      <div class="scrollable">
      <h2>喪中に関するお知らせ</h2>
      <p>平素よりお世話になっております。</p>
      <p>本年は喪中につき、年賀状としてのコンテンツの公開を自粛させていただきます。</p>
      <p>シンプルなご挨拶となりますが、ご理解の程よろしくお願いいたします。</p>
      <hr />
      <p class="ga">
        が、何も作らないのはつまんないので<br>
        <span class="ga ga2">寒中見舞いを公開いたします。</span>
      </p>
      <p class="sign">みずさわ</p>

      <p style="font-size: 0.6em; opacity: 0.3;">なお，年賀状につきましては喜んでお受け取りいたします!! 送付先等についてはTwitter @mizphsesにお問い合わせください．</p>
      </div>
      <a href="/index2" class="close-button">寒中見舞いを見る</a>
    </div>
  </div>
</template>
<style>
  body{
      margin: 0;
  }
</style>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Shippori+Mincho&family=Yuji+Boku&display=swap');
  body, p, h1, h2, h3, h4, h5{
    font-family: 'Noto Sans JP', sans-serif;
  }

  .sizing-message {
    display: none;
  }
  @media (max-width:1024px) {
    .sizing-message {
      z-index: 100000;
      color: white;
      background-image: linear-gradient(to bottom right, rgb(18, 24, 26), rgb(27, 40, 47), rgb(13, 32, 42), rgb(0, 0, 0));
      box-sizing: border-box;
      height: 100vh;
      width: 100vw;
      padding: 2em;
      position: absolute;
      top: 0;
      left: 0;
      background-size: 400% 400%;/*サイズを大きくひきのばす*/
      animation: bggradient 20s ease infinite;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .cover-message {
    z-index: 10000;
    color: white;
    background-image: linear-gradient(to bottom right, rgb(18, 24, 26), rgb(27, 40, 47), rgb(13, 32, 42), rgb(0, 0, 0));
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    padding: 2em;
    position: absolute;
    top: 0;
    left: 0;
    background-size: 400% 400%;/*サイズを大きくひきのばす*/
    animation: bggradient 20s ease infinite;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 1.5rem;
      margin: 0;
      margin-bottom: 0.5rem;
    }
    hr{
      margin-top: 3rem;
      margin-bottom: 3rem;
      width: 30%;
      border: 1px solid #e5e5e5;
    }
    .sign{
      font-family: 'yuji boku', cursive;
      opacity: 0;
      animation: 7s ga 5s ease forwards;
    }
    .scrollable{
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .close-button{
      margin-top: auto;
      margin-left: auto;
      position: absolute;
      bottom: 2rem;
      right: 2rem;
      letter-spacing: 0.2rem;
      background-image: linear-gradient(to bottom right, rgb(25, 50, 64), rgb(18, 106, 99), rgb(25, 150, 112));
      color: white;
      font-weight: 700;
      border: 1px solid #e5e5e5;
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      cursor: pointer;
    }
    .ga{
      font-family: 'Shippori Mincho', serif;
      font-weight: 700;
      font-size: 1.3em;
      animation: ga 5s ease forwards;
      opacity: 0;
    }
    .ga2{
      animation-delay: 2s !important;
    }
    .close-button:hover{
      background-image: linear-gradient(to top left, rgb(21, 128, 119), rgb(90, 229, 176));
    }
    @keyframes bggradient{
      0% {
        background-position: 0% 100%;
      }
      25% {
        background-position: 25% 50%;
      }
      50% {
        background-position: 50% 0%;
      }
      75% {
        background-position: 25% 50%;
      }
      100% {
        background-position: 0% 100%;
      }
    }
    @keyframes ga{
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
</style>