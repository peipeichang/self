<template id="main-demo">
<Layout>
  
 


  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      
    </head>
    <body class="navbar_body">
      <div id="navbar">
        <div class="menu1">
          <h2 class="navbar_h2" style="font-family:IBM Plex Sans">IBM Q Hub at NTU</h2>
          <a class="navbar_a" href="elements.html">聯絡我們</a>
          <a class="navbar_a" href="#Qco">合作夥伴</a>
          <a class="navbar_a" href="#Qmember">成員</a>
          <g-link class="navbar_a" to="/Downloads" target="_blank">下載專區</g-link>
          <a class="navbar_a" href="#Qcompute">量子計算</a><a class="navbar_a" href="#center_news">最新消息</a>
          <a class="navbar_a" href="#center_intro">中心介紹</a><a class="navbar_a" href="#banner">首頁</a>
        </div>
      </div>
        <!-- 這是rwd版 -->
      <svg class="picbtn" id="picker" viewBox="-50 -50 100 100">
        <line x1="-20" y1="0" x2="20" y2="0"></line>
        <line x1="-20" y1="10" x2="20" y2="10"></line>
        <line x1="-20" y1="-10" x2="20" y2="-10"></line>
      </svg>
      <div id="Navigation">
        <div class="menu2">
          <li class="navigation_li_a"><a href="#banner">首頁</a></li>
          <li class="navigation_li_a" href="#center_intro">中心介紹</li>
          <li class="navigation_li_a" href="#center_news">最新消息</li>
          <li class="navigation_li_a" href="#Qcompute">量子計算</li>
          <li class="navigation_li_a" href="#Qmember">成員</li>
          <li class="navigation_li_a"><a href="/Downloads" target="_blank">下載專區</a></li>
          <li class="navigation_li_a" href="#Qco">合作夥伴</li>
          <li class="navigation_li_a" href="elements.html">聯絡我們</li>
        </div>
      </div>
    
    </body>
  </html>
  <html>
    <head>
      <title></title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="assets/css/main.css">
    </head>
    <body>
      <!-- Header-->
      <header id="header" class="needToDeal">
        <!--img.ntu_mark(src="https://i.postimg.cc/fT1kqbqK/logo.png", alt="")-->
        <div class="inner" id="disable">
          <nav id="nav"><a href="#center_intro">中心介紹</a>
          <a href="#center_news">最新消息</a>
          <a href="#Qcompute">量子計算</a>
          <g-link to="/Downloads" target="_blank">下載專區</g-link>
          <a href="#Qmember">成員</a><a href="#Qco">合作夥伴</a>
            <hre> </hre><a href="elements.html">English</a>
          </nav><a class="navPanelToggle" href="#navPanel"></a>
        </div><a class="logo" href="index.html"> 
          <div class="mark" id="disable"> <img class="ntu_mark" src="https://i.postimg.cc/fT1kqbqK/logo.png" alt=""><span class="fa fa-bars"></span></div></a>
      </header>
      <section id="tophead"></section>
      <!-- Banner-->
      <section id="banner">
        <h1 class="sponsor">科技部補助</h1>
        <h1 style="font-family:IBM Plex Sans">IBM Q Hub at NTU</h1>
        <h1>臺灣大學－IBM量子電腦中心</h1>
      </section>
      <!--quote-->
      <section class="wrapper style_quote special" id="two">
        <div class="inner">
          <header >
            <p class="quote quote_eng"> 
              {{$page.strapiQuote.p1}}        


              <br>
              {{$page.strapiQuote.p2}}
              <br>
              <br>
            </p>
            <p class="author_author_eng">――{{$page.strapiQuote.author}}――<br><br></p>
            <p class="quote">{{$page.strapiChineseQuote.p1}}<br></p>
            <p class="author">{{$page.strapiChineseQuote.author}}</p>
          </header>
        </div>
      </section>
      <!--intro-->
      <section class="wrapper style_intro special" id="center_intro">
        <div class="inner">
          <header> 
            <h2 class="intro">中心介紹</h2>
          </header>
          <div class="intro_i">
            <p> {{$page.strapiCenterIntroduction.introduction}} </p><br>
          </div>
        </div>
      </section>
      <!-- One-->
      

<!-- 卡片
            <v-row>
                <v-card
                  v-for="edge in $page.news.edges" :key="edge.node.id" 
                  class="mx-auto"
                  max-width="344"
                >s
                  <v-img
                    :src="`http://localhost:1337${edge.node.photo}`"
                    height="200px"
                  ></v-img>

                  <v-card-title>
                    {{edge.node.title}}
                  </v-card-title>
                  
                  <v-card-subtitle style="font-weight:bold ">
                    {{edge.node.newsClasses}}
                  </v-card-subtitle>

                  <v-card-subtitle>
                    {{edge.node.profile}}
                  </v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      color="orange lighten-2"
                      text
                    >
                      explore
                    </v-btn>
                    

                    <v-spacer></v-spacer>

                    <v-btn
                      icon
                      @click="show = !show"
                    >
                      <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                  </v-card-actions>

                  <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>

                      <v-card-text>

                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              
            </v-row>






          
            <v-row no-gutters> 
              <v-col v-for="n in 3" :key="n">
                <article style="position: relative">
                  <header>
                    <h3>Magna tempus sed amet<br/>
                        aliquam veroeros
                    </h3>
                  </header>
                  <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu.</p>
                  <footer class="footer_news"><a class="button special" href="#">More</a></footer>
                </article>
              </v-col>
            </v-row> -->
      










      <div id="area3">
  <section class="wrapper style_intro special" id="center_news">
    <div class="inner">
      <header class="news"> 
        <h2 class="intro">最新消息
          <table class="table_newsIcon">
            <tr>
              <th class="newstr"><a class="aicon" href="">活動</a></th>
              <th class="newstr"><a class="aicon" href="">中心消息</a></th>
            </tr>
          </table>
        </h2>
        <div class="flex flex-3">
          <article>
            <header>
              <h3><b>{{$page.newsLeft.newsClasses}}</b>
                <div class="underline"></div><br>
                {{$page.newsLeft.title}}
              </h3>
            </header>
            <p class="newtext">{{$page.newsLeft.profile}}</p>
            <footer><a class="button special" href="#">More</a></footer>
          </article>
          <article>
            <header>
              <h3><b>{{$page.newsCenter.newsClasses}}</b>
                <div class="underline2"></div><br>
                {{$page.newsCenter.title}}
              </h3>
            </header>
            <p class="newtext">
              {{$page.newsCenter.profile}}
            </p>
            <footer><a class="button special" href="#">More</a></footer>
          </article>
          <article>
            <header>
              <h3><b>{{$page.newsRight.newsClasses}}</b>
                <div class="underline"></div><br>
                {{$page.newsRight.title}}
              </h3>
            </header>
            <p class="newtext">{{$page.newsRight.profile}}</p>
            <footer><a class="button special" href="#">More</a></footer>
          </article>
        </div>
      </header>
    </div>
  </section>
  <!--量子計算-->
</div>








      
      <!--量子計算-->
      <section class="wrapper special" id="Qcompute">
        <div class="inner">
          <header class="align-center">
            <h2 style="font-weight:700">量子計算</h2>
            <p>臺灣大學-IBM量子電腦中心</p>
          </header>
          <div class="flex flex-2">
            <article>
              <div class="image fit"><img src="http://localhost:1337/uploads/S_25174043_4f383e2ba8.jpg" alt="Pic 01"></div>
              <header>
                <h3><b>學習資源</b>
                  <div class="underline2"></div>
                </h3>
              </header>
              <p class="computetext">{{$page.strapiQuantumCumputingLearning.discribe}}</p>
              <footer><a class="button special" href="/resource" target="_blank">More</a></footer>
            </article>
            <article>
              <div class="image fit"><img :src="`http://localhost:1337/uploads/S_8396803_d5a8437d07.jpg`" alt="Pic 02"></div>
              <header>
                <h3><b>台大量子計算與資訊學程</b>
                  <div class="underline1"></div>
                </h3>
              </header>
              <p class="computetext">
                {{$page.strapiQuantumComputingProgram.discribe}}
              </p>
              <footer><a class="button special" href="https://web.phys.ntu.edu.tw/qcip/" target=:_blank>More</a></footer>
            </article>
          </div>
        </div>
      </section>
      
      <!-- Two-->
      <section class="wrapper style1 special" id="Qmember">
        <div class="inner">
          <header>
            <h2 style="font-weight: 900">成員</h2>
            <p>臺灣大學-IBM量子電腦中心</p>
          </header>
          
          <div class="flex flex-4">
            <div class="box person">
              <div class="image round"><img src="http://localhost:1337/uploads/440px_NTU_Office_of_the_President_2017_06_cc3f89f609.jpg" alt="Person 1"></div>
              <h3>張慶瑞</h3>
              <p>首屆理事長</p>
            </div>
            <div class="box person">
              <div class="image round"><img src="https://cdn.decrypt.co/wp-content/uploads/2018/10/Jackson_palmer-gID_4.png" alt="Person 2"></div>
              <h3>葉光釗</h3>
              <p>常務理事</p>
            </div>
            <div class="box person">
              <div class="image round"><img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg" alt="Person 3"></div>
              <h3>于濂波</h3>
              <p>理事</p>
            </div>
            <div class="box person">
              <div class="image round"><img src="http://localhost:1337/uploads/440px_NTU_Office_of_the_President_2017_06_cc3f89f609.jpg" alt="Person 4"></div>
              <h3>管希聖</h3>
              <p>常務理事</p>
            </div>
            <div class="box person">
              <div class="image round"><img src="http://localhost:1337/uploads/440px_NTU_Office_of_the_President_2017_06_cc3f89f609.jpg" alt="Person 1"></div>
              <h3>廖世偉</h3>
              <p>教授</p>
            </div>
            <div class="box person">
              <div class="image round"><img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg" alt="Person 1"></div>
              <h3>ＸＸＸ</h3>
              <p>理事</p>
            </div>
            <div class="box person">
              <div class="image round"><img src="https://miro.medium.com/max/676/1*XEgA1TTwXa5AvAdw40GFow.png" alt="Person 1"></div>
              <h3>ＸＸＸ</h3>
              <p>理事</p>
            </div>
            <div class="box person">
              <div class="image round"><img src="https://miro.medium.com/max/676/1*XEgA1TTwXa5AvAdw40GFow.png" alt="Person 1"></div>
              <h3>ＸＸＸ</h3>
              <p>理事</p>
            </div>

          </div>
        </div>
      </section>
      <!-- Three-->
      
      <section id="Qco">
        
        <div class="inner"> 
          <v-container class="grey lighten-5">
            <v-row class="mb-6" no-gutters>
              <v-col cols="4">
                <h2 class="qco" style="font-size:40px">合作夥伴</h2>
              </v-col>
              <v-col cols="8" md="3">
                <a class="button1" href="https://www.ibm.com/quantum-computing/"> </a>
              </v-col>
              <v-col cols="8" md="3">
                <a class="button2" herf="https://www.iii.org.tw/default.aspx"></a>
              </v-col>
              <v-col cols="8" md="2">
                <a class="button3" herf="https://www.itri.org.tw/"></a>
              </v-col>
            </v-row>
          </v-container> 
        </div>
      </section>

      
  <!--聯絡我們-->
  <!-- Footer-->
<div id="area7">
  <footer id="footer">
    <div class="inner">
      <div class="flex">
        <div class="copyright">
          <h3>聯絡我們</h3>
          <h4 class="white_footer">協會會址：台北市大安區和平東路二段118巷59號之4</h4>
          <br>
          <h4>聯絡電話：02-3366-5095</h4>
          <br>
          <h4 class="white_footer">Email: taqcit@gmail.com</h4>
          <br>
          <hr>
          <h4 class="white_footer">電話：（02)3366-3366|</h4>
          <h4 class="white_footer">地址：臺北市羅斯福路四段一號|</h4>
            <a href="https://www.ntu.edu.tw" class="white-footer">臺灣大學.|</a>
            <a href="https://www.ibm.com/tw-zh" class="white_footer">IBM</a><h4 class="white_footer">.</h4>
            <img class="ntuibm" src="https://i.imgur.com/PdzRQsR.png">
        </div>
      </div>
    </div>
  </footer>
</div>
      <!-- Scripts-->
    
    </body>
  </html> 

</Layout>
</template>

<page-query>
  query {
      
    strapiCenterIntroduction(id:1){
        
        
            id
            introduction
            photo{
              name
            }
            
          }
   



      allStrapiMember {
        edges {
          node {
            id
						name
            photo {
              name
            }
            
            
   		}
    }
  }
  allStrapiChair {
        edges {
          node {
            id
						discribe
            photo{
              name
              id
            }
            
            
   		}
    }
  }

  strapiQuote(id:1){
        
        
            id
            author
            p1
            p2
          }
  strapiChineseQuote(id:1){
        
        
            id
            author
            p1
            
          }
  news: allNews {
        edges {
          node {
            id
            title
						discribe
         		photo
            date
        		profile
            category{
              id
            }
            newsClasses
            
           
            
            
   		}
    } 
  }  
  newsLeft: news(id:1) {
        
       
            id
            title
						discribe
         		photo
            date
        		profile
            category{
              id
            }
            newsClasses      
   		}
  newsCenter: news(id:2) {
        
       
            id
            title
						discribe
         		photo
            date
        		profile
            category{
              id
            }
            newsClasses      
   		}
  newsRight: news(id:3) {
        
       
            id
            title
						discribe
         		photo
            date
        		profile
            category{
              id
            }
            newsClasses      
   		}
  strapiQuantumComputingProgram(id:1){
        
            id
            discribe
            link
            photo{
              name
              id
            }
            
          }
  strapiQuantumCumputingLearning(id:1){
        
            id
            discribe
    				link
            photo{
              name
              id
            }
            
          }

}
</page-query>






<style>

  @charset "UTF-8";
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&display=swap');
  @import "https://fonts.googleapis.com/css?family=Raleway:100,300,600";
  /* *	Theory by TEMPLATED
  * *	templated.co @templatedco
  * *	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license) */
  /* Reset */
  * {
    /* border: solid 2px !important;  */
    transition-duration: 0.5s;
    z-index: 999;
  }

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after {
    content: "";
    content: none;
  }

  q:before, q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    -webkit-text-size-adjust: none;
  }

  /* Box Model */
  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  /* Containers */
  .container {
    margin-left: auto;
    margin-right: auto;
    width: 80em;
  }
  .container.\31 25\% {
    width: 100%;
    max-width: 100em;
    min-width: 80em;
  }
  .container.\37 5\% {
    width: 60em;
  }
  .container.\35 0\% {
    width: 40em;
  }
  .container.\32 5\% {
    width: 20em;
  }

  @media screen and (max-width: 1680px) {
    .container {
      width: 80em;
    }
    .container.\31 25\% {
      width: 100%;
      max-width: 100em;
      min-width: 80em;
    }
    .container.\37 5\% {
      width: 60em;
    }
    .container.\35 0\% {
      width: 40em;
    }
    .container.\32 5\% {
      width: 20em;
    }
  }
  @media screen and (max-width: 1280px) {
    .container {
      width: 65em;
    }
    .container.\31 25\% {
      width: 100%;
      max-width: 81.25em;
      min-width: 65em;
    }
    .container.\37 5\% {
      width: 48.75em;
    }
    .container.\35 0\% {
      width: 32.5em;
    }
    .container.\32 5\% {
      width: 16.25em;
    }
  }
  @media screen and (max-width: 980px) {
    .container {
      width: 90%;
    }
    .container.\31 25\% {
      width: 100%;
      max-width: 112.5%;
      min-width: 90%;
    }
    .container.\37 5\% {
      width: 67.5%;
    }
    .container.\35 0\% {
      width: 45%;
    }
    .container.\32 5\% {
      width: 22.5%;
    }
  }
  @media screen and (max-width: 736px) {
    .container {
      width: 90% !important;
    }
    .container.\31 25\% {
      width: 100%;
      max-width: 112.5%;
      min-width: 90%;
    }
    .container.\37 5\% {
      width: 67.5%;
    }
    .container.\35 0\% {
      width: 45%;
    }
    .container.\32 5\% {
      width: 22.5%;
    }
  }
  @media screen and (max-width: 480px) {
    .container {
      width: 90% !important;
    }
    .container.\31 25\% {
      width: 100%;
      max-width: 112.5%;
      min-width: 90%;
    }
    .container.\37 5\% {
      width: 67.5%;
    }
    .container.\35 0\% {
      width: 45%;
    }
    .container.\32 5\% {
      width: 22.5%;
    }
  }
  /* Grid */
  .row {
    border-bottom: solid 1px transparent;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 0 -1px -2em;
  }
  .row > * {
    float: left;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .row:after, .row:before {
    content: "";
    display: block;
    clear: both;
    height: 0;
  }
  .row.uniform > * > :first-child {
    margin-top: 0;
  }
  .row.uniform > * > :last-child {
    margin-bottom: 0;
  }
  .row.\30 \% {
    margin: 0 0 -1px 0em;
  }
  .row.\30 \% > * {
    padding: 0 0 0 0em;
  }
  .row.uniform {
    margin: -2em 0 -1px -2em;
  }
  .row.uniform.\30 \% {
    margin: 0em 0 -1px 0em;
  }
  .row.uniform.\30 \% > * {
    padding: 0em 0 0 0em;
  }
  .row.uniform > * {
    padding: 2em 0 0 2em;
  }
  .row > * {
    padding: 0 0 0 2em;
  }
  .row.\32 00\% {
    margin: 0 0 -1px -4em;
  }
  .row.\32 00\% > * {
    padding: 0 0 0 4em;
  }
  .row.uniform.\32 00\% {
    margin: -4em 0 -1px -4em;
  }
  .row.uniform.\32 00\% > * {
    padding: 4em 0 0 4em;
  }
  .row.\31 50\% {
    margin: 0 0 -1px -3em;
  }
  .row.\31 50\% > * {
    padding: 0 0 0 3em;
  }
  .row.uniform.\31 50\% {
    margin: -3em 0 -1px -3em;
  }
  .row.uniform.\31 50\% > * {
    padding: 3em 0 0 3em;
  }
  .row.\35 0\% {
    margin: 0 0 -1px -1em;
  }
  .row.\35 0\% > * {
    padding: 0 0 0 1em;
  }
  .row.uniform.\35 0\% {
    margin: -1em 0 -1px -1em;
  }
  .row.uniform.\35 0\% > * {
    padding: 1em 0 0 1em;
  }
  .row.\32 5\% {
    margin: 0 0 -1px -0.5em;
  }
  .row.\32 5\% > * {
    padding: 0 0 0 0.5em;
  }
  .row.uniform.\32 5\% {
    margin: -0.5em 0 -1px -0.5em;
  }
  .row.uniform.\32 5\% > * {
    padding: 0.5em 0 0 0.5em;
  }

  .\31 2u, .\31 2u\$ {
    width: 100%;
    clear: none;
    margin-left: 0;
  }

  .\31 1u, .\31 1u\$ {
    width: 91.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\31 0u, .\31 0u\$ {
    width: 83.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\39 u, .\39 u\$ {
    width: 75%;
    clear: none;
    margin-left: 0;
  }

  .\38 u, .\38 u\$ {
    width: 66.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\37 u, .\37 u\$ {
    width: 58.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\36 u, .\36 u\$ {
    width: 50%;
    clear: none;
    margin-left: 0;
  }

  .\35 u, .\35 u\$ {
    width: 41.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\34 u, .\34 u\$ {
    width: 33.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\33 u, .\33 u\$ {
    width: 25%;
    clear: none;
    margin-left: 0;
  }

  .\32 u, .\32 u\$ {
    width: 16.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\31 u, .\31 u\$ {
    width: 8.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\31 2u\$ + *, .\31 1u\$ + *, .\31 0u\$ + *, .\39 u\$ + *, .\38 u\$ + *, .\37 u\$ + *, .\36 u\$ + *, .\35 u\$ + *, .\34 u\$ + *, .\33 u\$ + *, .\32 u\$ + *, .\31 u\$ + * {
    clear: left;
  }

  .\-11u {
    margin-left: 91.66667%;
  }

  .\-10u {
    margin-left: 83.33333%;
  }

  .\-9u {
    margin-left: 75%;
  }

  .\-8u {
    margin-left: 66.66667%;
  }

  .\-7u {
    margin-left: 58.33333%;
  }

  .\-6u {
    margin-left: 50%;
  }

  .\-5u {
    margin-left: 41.66667%;
  }

  .\-4u {
    margin-left: 33.33333%;
  }

  .\-3u {
    margin-left: 25%;
  }

  .\-2u {
    margin-left: 16.66667%;
  }

  .\-1u {
    margin-left: 8.33333%;
  }

  @media screen and (max-width: 1680px) {
    .row {
      margin: 0 0 -1px -2em;
    }
    .row > * {
      padding: 0 0 0 2em;
    }
    .row.uniform {
      margin: -2em 0 -1px -2em;
    }
    .row.uniform > * {
      padding: 2em 0 0 2em;
    }
    .row.\32 00\% {
      margin: 0 0 -1px -4em;
    }
    .row.\32 00\% > * {
      padding: 0 0 0 4em;
    }
    .row.uniform.\32 00\% {
      margin: -4em 0 -1px -4em;
    }
    .row.uniform.\32 00\% > * {
      padding: 4em 0 0 4em;
    }
    .row.\31 50\% {
      margin: 0 0 -1px -3em;
    }
    .row.\31 50\% > * {
      padding: 0 0 0 3em;
    }
    .row.uniform.\31 50\% {
      margin: -3em 0 -1px -3em;
    }
    .row.uniform.\31 50\% > * {
      padding: 3em 0 0 3em;
    }
    .row.\35 0\% {
      margin: 0 0 -1px -1em;
    }
    .row.\35 0\% > * {
      padding: 0 0 0 1em;
    }
    .row.uniform.\35 0\% {
      margin: -1em 0 -1px -1em;
    }
    .row.uniform.\35 0\% > * {
      padding: 1em 0 0 1em;
    }
    .row.\32 5\% {
      margin: 0 0 -1px -0.5em;
    }
    .row.\32 5\% > * {
      padding: 0 0 0 0.5em;
    }
    .row.uniform.\32 5\% {
      margin: -0.5em 0 -1px -0.5em;
    }
    .row.uniform.\32 5\% > * {
      padding: 0.5em 0 0 0.5em;
    }

    .\31 2u\(xlarge\), .\31 2u\$\(xlarge\) {
      width: 100%;
      clear: none;
      margin-left: 0;
    }

    .\31 1u\(xlarge\), .\31 1u\$\(xlarge\) {
      width: 91.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\31 0u\(xlarge\), .\31 0u\$\(xlarge\) {
      width: 83.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\39 u\(xlarge\), .\39 u\$\(xlarge\) {
      width: 75%;
      clear: none;
      margin-left: 0;
    }

    .\38 u\(xlarge\), .\38 u\$\(xlarge\) {
      width: 66.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\37 u\(xlarge\), .\37 u\$\(xlarge\) {
      width: 58.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\36 u\(xlarge\), .\36 u\$\(xlarge\) {
      width: 50%;
      clear: none;
      margin-left: 0;
    }

    .\35 u\(xlarge\), .\35 u\$\(xlarge\) {
      width: 41.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\34 u\(xlarge\), .\34 u\$\(xlarge\) {
      width: 33.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\33 u\(xlarge\), .\33 u\$\(xlarge\) {
      width: 25%;
      clear: none;
      margin-left: 0;
    }

    .\32 u\(xlarge\), .\32 u\$\(xlarge\) {
      width: 16.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\31 u\(xlarge\), .\31 u\$\(xlarge\) {
      width: 8.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\31 2u\$\(xlarge\) + *, .\31 1u\$\(xlarge\) + *, .\31 0u\$\(xlarge\) + *, .\39 u\$\(xlarge\) + *, .\38 u\$\(xlarge\) + *, .\37 u\$\(xlarge\) + *, .\36 u\$\(xlarge\) + *, .\35 u\$\(xlarge\) + *, .\34 u\$\(xlarge\) + *, .\33 u\$\(xlarge\) + *, .\32 u\$\(xlarge\) + *, .\31 u\$\(xlarge\) + * {
      clear: left;
    }

    .\-11u\(xlarge\) {
      margin-left: 91.66667%;
    }

    .\-10u\(xlarge\) {
      margin-left: 83.33333%;
    }

    .\-9u\(xlarge\) {
      margin-left: 75%;
    }

    .\-8u\(xlarge\) {
      margin-left: 66.66667%;
    }

    .\-7u\(xlarge\) {
      margin-left: 58.33333%;
    }

    .\-6u\(xlarge\) {
      margin-left: 50%;
    }

    .\-5u\(xlarge\) {
      margin-left: 41.66667%;
    }

    .\-4u\(xlarge\) {
      margin-left: 33.33333%;
    }

    .\-3u\(xlarge\) {
      margin-left: 25%;
    }

    .\-2u\(xlarge\) {
      margin-left: 16.66667%;
    }

    .\-1u\(xlarge\) {
      margin-left: 8.33333%;
    }
  }
  @media screen and (max-width: 1280px) {
    .row {
      margin: 0 0 -1px -1.5em;
    }
    .row > * {
      padding: 0 0 0 1.5em;
    }
    .row.uniform {
      margin: -1.5em 0 -1px -1.5em;
    }
    .row.uniform > * {
      padding: 1.5em 0 0 1.5em;
    }
    .row.\32 00\% {
      margin: 0 0 -1px -3em;
    }
    .row.\32 00\% > * {
      padding: 0 0 0 3em;
    }
    .row.uniform.\32 00\% {
      margin: -3em 0 -1px -3em;
    }
    .row.uniform.\32 00\% > * {
      padding: 3em 0 0 3em;
    }
    .row.\31 50\% {
      margin: 0 0 -1px -2.25em;
    }
    .row.\31 50\% > * {
      padding: 0 0 0 2.25em;
    }
    .row.uniform.\31 50\% {
      margin: -2.25em 0 -1px -2.25em;
    }
    .row.uniform.\31 50\% > * {
      padding: 2.25em 0 0 2.25em;
    }
    .row.\35 0\% {
      margin: 0 0 -1px -0.75em;
    }
    .row.\35 0\% > * {
      padding: 0 0 0 0.75em;
    }
    .row.uniform.\35 0\% {
      margin: -0.75em 0 -1px -0.75em;
    }
    .row.uniform.\35 0\% > * {
      padding: 0.75em 0 0 0.75em;
    }
    .row.\32 5\% {
      margin: 0 0 -1px -0.375em;
    }
    .row.\32 5\% > * {
      padding: 0 0 0 0.375em;
    }
    .row.uniform.\32 5\% {
      margin: -0.375em 0 -1px -0.375em;
    }
    .row.uniform.\32 5\% > * {
      padding: 0.375em 0 0 0.375em;
    }

    .\31 2u\(large\), .\31 2u\$\(large\) {
      width: 100%;
      clear: none;
      margin-left: 0;
    }

    .\31 1u\(large\), .\31 1u\$\(large\) {
      width: 91.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\31 0u\(large\), .\31 0u\$\(large\) {
      width: 83.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\39 u\(large\), .\39 u\$\(large\) {
      width: 75%;
      clear: none;
      margin-left: 0;
    }

    .\38 u\(large\), .\38 u\$\(large\) {
      width: 66.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\37 u\(large\), .\37 u\$\(large\) {
      width: 58.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\36 u\(large\), .\36 u\$\(large\) {
      width: 50%;
      clear: none;
      margin-left: 0;
    }

    .\35 u\(large\), .\35 u\$\(large\) {
      width: 41.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\34 u\(large\), .\34 u\$\(large\) {
      width: 33.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\33 u\(large\), .\33 u\$\(large\) {
      width: 25%;
      clear: none;
      margin-left: 0;
    }

    .\32 u\(large\), .\32 u\$\(large\) {
      width: 16.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\31 u\(large\), .\31 u\$\(large\) {
      width: 8.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\31 2u\$\(large\) + *, .\31 1u\$\(large\) + *, .\31 0u\$\(large\) + *, .\39 u\$\(large\) + *, .\38 u\$\(large\) + *, .\37 u\$\(large\) + *, .\36 u\$\(large\) + *, .\35 u\$\(large\) + *, .\34 u\$\(large\) + *, .\33 u\$\(large\) + *, .\32 u\$\(large\) + *, .\31 u\$\(large\) + * {
      clear: left;
    }

    .\-11u\(large\) {
      margin-left: 91.66667%;
    }

    .\-10u\(large\) {
      margin-left: 83.33333%;
    }

    .\-9u\(large\) {
      margin-left: 75%;
    }

    .\-8u\(large\) {
      margin-left: 66.66667%;
    }

    .\-7u\(large\) {
      margin-left: 58.33333%;
    }

    .\-6u\(large\) {
      margin-left: 50%;
    }

    .\-5u\(large\) {
      margin-left: 41.66667%;
    }

    .\-4u\(large\) {
      margin-left: 33.33333%;
    }

    .\-3u\(large\) {
      margin-left: 25%;
    }

    .\-2u\(large\) {
      margin-left: 16.66667%;
    }

    .\-1u\(large\) {
      margin-left: 8.33333%;
    }
  }
  @media screen and (max-width: 980px) {
    .row {
      margin: 0 0 -1px -1.5em;
    }
    .row > * {
      padding: 0 0 0 1.5em;
    }
    .row.uniform {
      margin: -1.5em 0 -1px -1.5em;
    }
    .row.uniform > * {
      padding: 1.5em 0 0 1.5em;
    }
    .row.\32 00\% {
      margin: 0 0 -1px -3em;
    }
    .row.\32 00\% > * {
      padding: 0 0 0 3em;
    }
    .row.uniform.\32 00\% {
      margin: -3em 0 -1px -3em;
    }
    .row.uniform.\32 00\% > * {
      padding: 3em 0 0 3em;
    }
    .row.\31 50\% {
      margin: 0 0 -1px -2.25em;
    }
    .row.\31 50\% > * {
      padding: 0 0 0 2.25em;
    }
    .row.uniform.\31 50\% {
      margin: -2.25em 0 -1px -2.25em;
    }
    .row.uniform.\31 50\% > * {
      padding: 2.25em 0 0 2.25em;
    }
    .row.\35 0\% {
      margin: 0 0 -1px -0.75em;
    }
    .row.\35 0\% > * {
      padding: 0 0 0 0.75em;
    }
    .row.uniform.\35 0\% {
      margin: -0.75em 0 -1px -0.75em;
    }
    .row.uniform.\35 0\% > * {
      padding: 0.75em 0 0 0.75em;
    }
    .row.\32 5\% {
      margin: 0 0 -1px -0.375em;
    }
    .row.\32 5\% > * {
      padding: 0 0 0 0.375em;
    }
    .row.uniform.\32 5\% {
      margin: -0.375em 0 -1px -0.375em;
    }
    .row.uniform.\32 5\% > * {
      padding: 0.375em 0 0 0.375em;
    }

    .\31 2u\(medium\), .\31 2u\$\(medium\) {
      width: 100%;
      clear: none;
      margin-left: 0;
    }

    .\31 1u\(medium\), .\31 1u\$\(medium\) {
      width: 91.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\31 0u\(medium\), .\31 0u\$\(medium\) {
      width: 83.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\39 u\(medium\), .\39 u\$\(medium\) {
      width: 75%;
      clear: none;
      margin-left: 0;
    }

    .\38 u\(medium\), .\38 u\$\(medium\) {
      width: 66.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\37 u\(medium\), .\37 u\$\(medium\) {
      width: 58.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\36 u\(medium\), .\36 u\$\(medium\) {
      width: 50%;
      clear: none;
      margin-left: 0;
    }

    .\35 u\(medium\), .\35 u\$\(medium\) {
      width: 41.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\34 u\(medium\), .\34 u\$\(medium\) {
      width: 33.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\33 u\(medium\), .\33 u\$\(medium\) {
      width: 25%;
      clear: none;
      margin-left: 0;
    }

    .\32 u\(medium\), .\32 u\$\(medium\) {
      width: 16.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\31 u\(medium\), .\31 u\$\(medium\) {
      width: 8.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\31 2u\$\(medium\) + *, .\31 1u\$\(medium\) + *, .\31 0u\$\(medium\) + *, .\39 u\$\(medium\) + *, .\38 u\$\(medium\) + *, .\37 u\$\(medium\) + *, .\36 u\$\(medium\) + *, .\35 u\$\(medium\) + *, .\34 u\$\(medium\) + *, .\33 u\$\(medium\) + *, .\32 u\$\(medium\) + *, .\31 u\$\(medium\) + * {
      clear: left;
    }

    .\-11u\(medium\) {
      margin-left: 91.66667%;
    }

    .\-10u\(medium\) {
      margin-left: 83.33333%;
    }

    .\-9u\(medium\) {
      margin-left: 75%;
    }

    .\-8u\(medium\) {
      margin-left: 66.66667%;
    }

    .\-7u\(medium\) {
      margin-left: 58.33333%;
    }

    .\-6u\(medium\) {
      margin-left: 50%;
    }

    .\-5u\(medium\) {
      margin-left: 41.66667%;
    }

    .\-4u\(medium\) {
      margin-left: 33.33333%;
    }

    .\-3u\(medium\) {
      margin-left: 25%;
    }

    .\-2u\(medium\) {
      margin-left: 16.66667%;
    }

    .\-1u\(medium\) {
      margin-left: 8.33333%;
    }
  }
  @media screen and (max-width: 736px) {
    .row {
      margin: 0 0 -1px -1.25em;
    }
    .row > * {
      padding: 0 0 0 1.25em;
    }
    .row.uniform {
      margin: -1.25em 0 -1px -1.25em;
    }
    .row.uniform > * {
      padding: 1.25em 0 0 1.25em;
    }
    .row.\32 00\% {
      margin: 0 0 -1px -2.5em;
    }
    .row.\32 00\% > * {
      padding: 0 0 0 2.5em;
    }
    .row.uniform.\32 00\% {
      margin: -2.5em 0 -1px -2.5em;
    }
    .row.uniform.\32 00\% > * {
      padding: 2.5em 0 0 2.5em;
    }
    .row.\31 50\% {
      margin: 0 0 -1px -1.875em;
    }
    .row.\31 50\% > * {
      padding: 0 0 0 1.875em;
    }
    .row.uniform.\31 50\% {
      margin: -1.875em 0 -1px -1.875em;
    }
    .row.uniform.\31 50\% > * {
      padding: 1.875em 0 0 1.875em;
    }
    .row.\35 0\% {
      margin: 0 0 -1px -0.625em;
    }
    .row.\35 0\% > * {
      padding: 0 0 0 0.625em;
    }
    .row.uniform.\35 0\% {
      margin: -0.625em 0 -1px -0.625em;
    }
    .row.uniform.\35 0\% > * {
      padding: 0.625em 0 0 0.625em;
    }
    .row.\32 5\% {
      margin: 0 0 -1px -0.3125em;
    }
    .row.\32 5\% > * {
      padding: 0 0 0 0.3125em;
    }
    .row.uniform.\32 5\% {
      margin: -0.3125em 0 -1px -0.3125em;
    }
    .row.uniform.\32 5\% > * {
      padding: 0.3125em 0 0 0.3125em;
    }

    .\31 2u\(small\), .\31 2u\$\(small\) {
      width: 100%;
      clear: none;
      margin-left: 0;
    }

    .\31 1u\(small\), .\31 1u\$\(small\) {
      width: 91.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\31 0u\(small\), .\31 0u\$\(small\) {
      width: 83.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\39 u\(small\), .\39 u\$\(small\) {
      width: 75%;
      clear: none;
      margin-left: 0;
    }

    .\38 u\(small\), .\38 u\$\(small\) {
      width: 66.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\37 u\(small\), .\37 u\$\(small\) {
      width: 58.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\36 u\(small\), .\36 u\$\(small\) {
      width: 50%;
      clear: none;
      margin-left: 0;
    }

    .\35 u\(small\), .\35 u\$\(small\) {
      width: 41.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\34 u\(small\), .\34 u\$\(small\) {
      width: 33.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\33 u\(small\), .\33 u\$\(small\) {
      width: 25%;
      clear: none;
      margin-left: 0;
    }

    .\32 u\(small\), .\32 u\$\(small\) {
      width: 16.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\31 u\(small\), .\31 u\$\(small\) {
      width: 8.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\31 2u\$\(small\) + *, .\31 1u\$\(small\) + *, .\31 0u\$\(small\) + *, .\39 u\$\(small\) + *, .\38 u\$\(small\) + *, .\37 u\$\(small\) + *, .\36 u\$\(small\) + *, .\35 u\$\(small\) + *, .\34 u\$\(small\) + *, .\33 u\$\(small\) + *, .\32 u\$\(small\) + *, .\31 u\$\(small\) + * {
      clear: left;
    }

    .\-11u\(small\) {
      margin-left: 91.66667%;
    }

    .\-10u\(small\) {
      margin-left: 83.33333%;
    }

    .\-9u\(small\) {
      margin-left: 75%;
    }

    .\-8u\(small\) {
      margin-left: 66.66667%;
    }

    .\-7u\(small\) {
      margin-left: 58.33333%;
    }

    .\-6u\(small\) {
      margin-left: 50%;
    }

    .\-5u\(small\) {
      margin-left: 41.66667%;
    }

    .\-4u\(small\) {
      margin-left: 33.33333%;
    }

    .\-3u\(small\) {
      margin-left: 25%;
    }

    .\-2u\(small\) {
      margin-left: 16.66667%;
    }

    .\-1u\(small\) {
      margin-left: 8.33333%;
    }
  }
  @media screen and (max-width: 480px) {
    .row {
      margin: 0 0 -1px -1.25em;
    }
    .row > * {
      padding: 0 0 0 1.25em;
    }
    .row.uniform {
      margin: -1.25em 0 -1px -1.25em;
    }
    .row.uniform > * {
      padding: 1.25em 0 0 1.25em;
    }
    .row.\32 00\% {
      margin: 0 0 -1px -2.5em;
    }
    .row.\32 00\% > * {
      padding: 0 0 0 2.5em;
    }
    .row.uniform.\32 00\% {
      margin: -2.5em 0 -1px -2.5em;
    }
    .row.uniform.\32 00\% > * {
      padding: 2.5em 0 0 2.5em;
    }
    .row.\31 50\% {
      margin: 0 0 -1px -1.875em;
    }
    .row.\31 50\% > * {
      padding: 0 0 0 1.875em;
    }
    .row.uniform.\31 50\% {
      margin: -1.875em 0 -1px -1.875em;
    }
    .row.uniform.\31 50\% > * {
      padding: 1.875em 0 0 1.875em;
    }
    .row.\35 0\% {
      margin: 0 0 -1px -0.625em;
    }
    .row.\35 0\% > * {
      padding: 0 0 0 0.625em;
    }
    .row.uniform.\35 0\% {
      margin: -0.625em 0 -1px -0.625em;
    }
    .row.uniform.\35 0\% > * {
      padding: 0.625em 0 0 0.625em;
    }
    .row.\32 5\% {
      margin: 0 0 -1px -0.3125em;
    }
    .row.\32 5\% > * {
      padding: 0 0 0 0.3125em;
    }
    .row.uniform.\32 5\% {
      margin: -0.3125em 0 -1px -0.3125em;
    }
    .row.uniform.\32 5\% > * {
      padding: 0.3125em 0 0 0.3125em;
    }

    .\31 2u\(xsmall\), .\31 2u\$\(xsmall\) {
      width: 100%;
      clear: none;
      margin-left: 0;
    }

    .\31 1u\(xsmall\), .\31 1u\$\(xsmall\) {
      width: 91.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\31 0u\(xsmall\), .\31 0u\$\(xsmall\) {
      width: 83.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\39 u\(xsmall\), .\39 u\$\(xsmall\) {
      width: 75%;
      clear: none;
      margin-left: 0;
    }

    .\38 u\(xsmall\), .\38 u\$\(xsmall\) {
      width: 66.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\37 u\(xsmall\), .\37 u\$\(xsmall\) {
      width: 58.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\36 u\(xsmall\), .\36 u\$\(xsmall\) {
      width: 50%;
      clear: none;
      margin-left: 0;
    }

    .\35 u\(xsmall\), .\35 u\$\(xsmall\) {
      width: 41.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\34 u\(xsmall\), .\34 u\$\(xsmall\) {
      width: 33.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\33 u\(xsmall\), .\33 u\$\(xsmall\) {
      width: 25%;
      clear: none;
      margin-left: 0;
    }

    .\32 u\(xsmall\), .\32 u\$\(xsmall\) {
      width: 16.6666666667%;
      clear: none;
      margin-left: 0;
    }

    .\31 u\(xsmall\), .\31 u\$\(xsmall\) {
      width: 8.3333333333%;
      clear: none;
      margin-left: 0;
    }

    .\31 2u\$\(xsmall\) + *, .\31 1u\$\(xsmall\) + *, .\31 0u\$\(xsmall\) + *, .\39 u\$\(xsmall\) + *, .\38 u\$\(xsmall\) + *, .\37 u\$\(xsmall\) + *, .\36 u\$\(xsmall\) + *, .\35 u\$\(xsmall\) + *, .\34 u\$\(xsmall\) + *, .\33 u\$\(xsmall\) + *, .\32 u\$\(xsmall\) + *, .\31 u\$\(xsmall\) + * {
      clear: left;
    }

    .\-11u\(xsmall\) {
      margin-left: 91.66667%;
    }

    .\-10u\(xsmall\) {
      margin-left: 83.33333%;
    }

    .\-9u\(xsmall\) {
      margin-left: 75%;
    }

    .\-8u\(xsmall\) {
      margin-left: 66.66667%;
    }

    .\-7u\(xsmall\) {
      margin-left: 58.33333%;
    }

    .\-6u\(xsmall\) {
      margin-left: 50%;
    }

    .\-5u\(xsmall\) {
      margin-left: 41.66667%;
    }

    .\-4u\(xsmall\) {
      margin-left: 33.33333%;
    }

    .\-3u\(xsmall\) {
      margin-left: 25%;
    }

    .\-2u\(xsmall\) {
      margin-left: 16.66667%;
    }

    .\-1u\(xsmall\) {
      margin-left: 8.33333%;
    }
  }
  /* Basic */
  @-ms-viewport {
    width: device-width;
  }
  #Navigation {
    display: none;
    width: 50%;
    height: 700px;
    /*background-color: #660000;*/
    background-color: rgb(37, 6, 54);
    position: fixed;
    border-radius: 0 5% 5% 0;
    top: 5px;
    margin-top: 0;
    padding-top: 42px;
    overflow: hidden;
    z-index: 999999;
  }
  #Navigation .menu2 {
    color: #d9d9d9 rgba(0, 0, 0, 0.2);
    padding: 10px;
    font-size: 20px;
    letter-spacing: 1.65px;
    font-weight: 900;
    line-height: 42px;
    font-family: 微軟正黑體;
    z-index: 99999999999;
  }
  #Navigation .menu2 :hover {
    cursor: pointer;
    color: #f2f2f2;
    background-color: rgba(188, 158, 193, 0.8);
  }

  @media screen and (min-width: 900px) {
    #picker {
      display: none;
    }
  }
  @media screen and (max-width: 1080px) {
    .menu1 {
      display: none;
    }

    #tophead {
      display: none;
    }
  }
  body {
    -ms-overflow-style: scrollbar;
    background: #fff;
    color: #9a9a9a;
    font-family: "Raleway", Arial, Helvetica, sans-serif;
    font-size: 13pt;
    font-weight: 300;
    line-height: 1.65;
  }
  body.is-loading * {
    -moz-animation: none !important;
    -webkit-animation: none !important;
    -ms-animation: none !important;
    animation: none !important;
    -moz-transition: none !important;
    -webkit-transition: none !important;
    -ms-transition: none !important;
    transition: none !important;
  }
  body.is-loading *:before, body.is-loading *:after {
    -moz-animation: none !important;
    -webkit-animation: none !important;
    -ms-animation: none !important;
    animation: none !important;
    -moz-transition: none !important;
    -webkit-transition: none !important;
    -ms-transition: none !important;
    transition: none !important;
  }

  @media screen and (max-width: 480px) {
    html, body {
      min-width: 320px;
    }
  }
  /* Type */
  input, select, textarea {
    color: #9a9a9a;
    font-family: "Raleway", Arial, Helvetica, sans-serif;
    font-size: 13pt;
    font-weight: 300;
    line-height: 1.65;
  }

  @media screen and (max-width: 1680px) {
    body, input, select, textarea {
      font-size: 11pt;
    }
  }
  @media screen and (max-width: 1280px) {
    body, input, select, textarea {
      font-size: 11pt;
    }
  }
  @media screen and (max-width: 980px) {
    body, input, select, textarea {
      font-size: 12pt;
    }
  }
  @media screen and (max-width: 736px) {
    body, input, select, textarea {
      font-size: 12pt;
    }
  }
  @media screen and (max-width: 480px) {
    body, input, select, textarea {
      font-size: 12pt;
    }
  }
  a {
    color: #691a15;
    text-decoration: underline;
  }
  a:hover {
    text-decoration: none;
  }

  strong, b {
    color: #555;
    font-weight: 600;
  }

  em, i {
    font-style: italic;
  }

  p {
    margin: 0 0 2em 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #691a15;
    font-weight: 300;
    line-height: 1.5;
    margin: 0 0 1em 0;
  }

  h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
    color: inherit;
    text-decoration: none;
  }

  h2 {
    font-size: 1.75em;
    font-weight: 100;
  }

  h3 {
    font-size: 1.35em;
  }

  h4 {
    font-size: 1.1em;
  }

  h5 {
    font-size: 0.9em;
  }

  h6 {
    font-size: 0.7em;
  }

  sub {
    font-size: 0.8em;
    position: relative;
    top: 0.5em;
  }

  sup {
    font-size: 0.8em;
    position: relative;
    top: -0.5em;
  }

  blockquote {
    border-left: solid 4px #dbdbdb;
    font-style: italic;
    margin: 0 0 2em 0;
    padding: 0.5em 0 0.5em 2em;
  }

  code {
    background: rgba(144, 144, 144, 0.075);
    border-radius: 0;
    border: solid 1px #dbdbdb;
    font-family: "Courier New", monospace;
    font-size: 0.9em;
    margin: 0 0.25em;
    padding: 0.25em 0.65em;
  }

  pre {
    -webkit-overflow-scrolling: touch;
    font-family: "Courier New", monospace;
    font-size: 0.9em;
    margin: 0 0 2em 0;
  }
  pre code {
    display: block;
    line-height: 1.75;
    padding: 1em 1.5em;
    overflow-x: auto;
  }

  hr {
    border: 0;
    border-bottom: solid 1px #dbdbdb;
    margin: 2em 0;
  }
  hr.major {
    margin: 3em 0;
  }

  .align-left {
    text-align: left;
  }

  .align-center {
    text-align: center;
  }

  .align-right {
    text-align: right;
  }

  .inner {
    max-width: 75em;
    margin: 0 auto;
  }

  @media screen and (max-width: 1280px) {
    .inner {
      max-width: 90%;
    }
  }
  @media screen and (max-width: 480px) {
    .inner {
      max-width: 85%;
    }
  }
  /* Section/Article */
  section.special, article.special {
    text-align: center;
  }

  section.special article, article.special article {
    text-align: left;
  }

  section.wrapper, article.wrapper {
    padding: 6em 0;
  }

  section.wrapper header, article.wrapper header {
    margin-bottom: 4em;
  }

  section.wrapper header h2, article.wrapper header h2 {
    font-size: 2.75em;
    margin: 0 0 0.5em 0;
  }

  section.wrapper header p, article.wrapper header p {
    font-size: 1em;
  }

  section.wrapper article header, article.wrapper article header {
    margin: 0;
  }

  section.wrapper.style_intro {
    background-color: white;
    color: #691a15;
  }
  section.wrapper.style_intro h2 {
    font-weight: 500;
    letter-spacing: 15px;
  }

  section.wrapper.style1, article.wrapper.style1 {
    background: #691a15;
    color: #bacee6;
  }

  section.wrapper.style1 header h2, article.wrapper.style1 header h2 {
    color: #fff;
  }

  section.wrapper.style1 header p, article.wrapper.style1 header p {
    color: #bacee6;
  }

  section.wrapper.style1 h3, article.wrapper.style1 h3 {
    color: #fff;
  }

  @media screen and (max-width: 980px) {
    section.wrapper, article.wrapper {
      padding: 2em 0;
    }
  }
  @media screen and (max-width: 736px) {
    section.wrapper header, article.wrapper header {
      margin-bottom: 2em;
    }

    section.wrapper header h2, article.wrapper header h2 {
      font-size: 2em;
    }

    section.wrapper header p, article.wrapper header p {
      font-size: 0.9em;
    }
  }
  @media screen and (max-width: 480px) {
    section.wrapper, article.wrapper, section.wrapper article, article.wrapper article {
      text-align: center;
    }
  }
  header p {
    color: #bbb;
    position: relative;
    margin: 0 0 1.5em 0;
  }
  header h2 + p {
    font-size: 1.25em;
    margin-top: -1em;
  }
  header h3 + p {
    font-size: 1.1em;
    margin-top: -0.8em;
  }
  header h4 + p, header h5 + p, header h6 + p {
    font-size: 0.9em;
    margin-top: -0.6em;
  }

  /* Flex */
  .flex {
    display: -ms-flexbox;
    -ms-flex-wrap: wrap;
    -ms-flex-pack: justify;
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -moz-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -moz-justify-content: space-between;
    -webkit-justify-content: space-between;
    -ms-justify-content: space-between;
    justify-content: space-between;
  }
  .flex.flex-2 article {
    width: 47%;
  }
  .flex.flex-3 article {
    position: relative;
    width: 28%;
  }
  .flex.flex-3 article:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    right: -2em;
    top: 0;
    border-right: 1px solid #dbdbdb;
    pointer-events: none;
  }
  .flex.flex-3 article:last-child:before {
    border: none;
  }
  .flex.flex-4 .box {
    width: 21%;
  }

  @media screen and (max-width: 980px) {
    .flex.flex-2 article {
      width: 100%;
      margin-bottom: 3em;
    }
    .flex.flex-2 article:last-child {
      margin-bottom: 0;
    }
    .flex.flex-3 {
      -moz-flex-direction: column;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }
    .flex.flex-3 article {
      width: 100%;
      border-bottom: 1px solid #dbdbdb;
      padding-bottom: 2.5em;
      margin-bottom: 3em;
    }
    .flex.flex-3 article:last-child {
      border: none;
      padding-bottom: 0;
      margin: 0 0 1em 0;
    }
    .flex.flex-3 article:before {
      display: none;
    }
    .flex.flex-4 .box {
      width: 47%;
    }
  }
  @media screen and (max-width: 480px) {
    .flex.flex-4 .box {
      width: 100%;
    }
  }
  /* Form */
  form {
    margin: 0 0 2em 0;
  }

  label {
    color: #555;
    display: block;
    font-size: 0.9em;
    font-weight: 600;
    margin: 0 0 1em 0;
  }

  input[type=text], input[type=password], input[type=email], input[type=tel] {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background: rgba(144, 144, 144, 0.075);
    border-radius: 0;
    border: none;
    border: solid 1px #dbdbdb;
    color: inherit;
    display: block;
    outline: 0;
    padding: 0 1em;
    text-decoration: none;
    width: 100%;
  }

  select, textarea {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background: rgba(144, 144, 144, 0.075);
    border-radius: 0;
    border: none;
    border: solid 1px #dbdbdb;
    color: inherit;
    display: block;
    outline: 0;
    padding: 0 1em;
    text-decoration: none;
    width: 100%;
  }

  input[type=text]:invalid, input[type=password]:invalid, input[type=email]:invalid, input[type=tel]:invalid {
    box-shadow: none;
  }

  select:invalid, textarea:invalid {
    box-shadow: none;
  }

  input[type=text]:focus, input[type=password]:focus, input[type=email]:focus, input[type=tel]:focus {
    border-color: #691a15;
    box-shadow: 0 0 0 1px #691a15;
  }

  select:focus, textarea:focus {
    border-color: #691a15;
    box-shadow: 0 0 0 1px #691a15;
  }

  .select-wrapper {
    text-decoration: none;
    display: block;
    position: relative;
  }
  .select-wrapper:before {
    content: "";
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-transform: none !important;
    color: #dbdbdb;
    display: block;
    height: 2.75em;
    line-height: 2.75em;
    pointer-events: none;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    width: 2.75em;
  }
  .select-wrapper select::-ms-expand {
    display: none;
  }

  input[type=text], input[type=password], input[type=email] {
    height: 2.75em;
  }

  select {
    height: 2.75em;
  }

  textarea {
    padding: 0.75em 1em;
  }

  input[type=checkbox], input[type=radio] {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    display: block;
    float: left;
    margin-right: -2em;
    opacity: 0;
    width: 1em;
    z-index: -1;
  }
  input[type=checkbox] + label, input[type=radio] + label {
    text-decoration: none;
    color: #9a9a9a;
    cursor: pointer;
    display: inline-block;
    font-size: 1em;
    font-weight: 300;
    padding-left: 2.4em;
    padding-right: 0.75em;
    position: relative;
  }
  input[type=checkbox] + label:before, input[type=radio] + label:before {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-transform: none !important;
  }
  input[type=checkbox] + label:before, input[type=radio] + label:before {
    background: rgba(144, 144, 144, 0.075);
    border-radius: 0;
    border: solid 1px #dbdbdb;
    content: "";
    display: inline-block;
    height: 1.65em;
    left: 0;
    line-height: 1.58125em;
    position: absolute;
    text-align: center;
    top: 0;
    width: 1.65em;
  }
  input[type=checkbox]:checked + label:before, input[type=radio]:checked + label:before {
    background: #5a5a5a;
    border-color: #5a5a5a;
    color: #ffffff;
    content: "";
  }
  input[type=checkbox]:focus + label:before, input[type=radio]:focus + label:before {
    border-color: #691a15;
    box-shadow: 0 0 0 1px #691a15;
  }
  input[type=checkbox] + label:before {
    border-radius: 0;
  }
  input[type=radio] + label:before {
    border-radius: 100%;
  }

  ::-webkit-input-placeholder, :-moz-placeholder, ::-moz-placeholder, :-ms-input-placeholder, .formerize-placeholder {
    color: #bbb !important;
    opacity: 1;
  }

  /* Box */
  .box {
    border: solid 1px #dbdbdb;
    margin-bottom: 2em;
    padding: 1.5em;
  }
  .box > :last-child {
    margin-bottom: 0;
  }
  .box > :last-child > :last-child {
    margin-bottom: 0;
  }
  .box > :last-child > :last-child > :last-child {
    margin-bottom: 0;
  }
  .box.alt {
    border: 0;
    border-radius: 0;
    padding: 0;
  }
  .box.person {
    border: solid 1px rgba(255, 255, 255, 0.25);
    padding: 3em 1.5em;
  }
  .box.person h3 {
    margin: 0;
  }
  .box.person .image {
    margin-bottom: 1em;
  }
  .box.person .image img {
    max-width: 100%;
  }

  /* Icon */
  .icon {
    text-decoration: none;
    border-bottom: none;
    position: relative;
  }
  .icon:before {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-transform: none !important;
  }
  .icon > .label {
    display: none;
  }

  /* Image */
  .image {
    border-radius: 0;
    border: 0;
    display: inline-block;
    position: relative;
  }
  .image img {
    border-radius: 0;
    display: block;
  }
  .image.left, .image.right {
    max-width: 40%;
  }
  .image.left img, .image.right img {
    width: 100%;
  }
  .image.round img {
    border-radius: 100%;
  }
  .image.left {
    float: left;
    padding: 0 1.5em 1em 0;
    top: 0.25em;
  }
  .image.right {
    float: right;
    padding: 0 0 1em 1.5em;
    top: 0.25em;
  }
  .image.fit {
    display: block;
    margin: 0 0 2em 0;
    width: 100%;
  }
  .image.fit img {
    width: 100%;
  }
  .image.main {
    display: block;
    margin: 0 0 3em 0;
    width: 100%;
  }
  .image.main img {
    width: 100%;
  }

  /* List */
  ol {
    list-style: decimal;
    margin: 0 0 2em 0;
    padding-left: 1.25em;
  }
  ol li {
    padding-left: 0.25em;
  }

  ul {
    list-style: disc;
    margin: 0 0 2em 0;
    padding-left: 1em;
  }
  ul li {
    padding-left: 0.5em;
  }
  ul.alt {
    list-style: none;
    padding-left: 0;
  }
  ul.alt li {
    border-top: solid 1px #dbdbdb;
    padding: 0.5em 0;
  }
  ul.alt li:first-child {
    border-top: 0;
    padding-top: 0;
  }
  ul.icons {
    cursor: default;
    list-style: none;
    padding-left: 0;
  }
  ul.icons li {
    display: inline-block;
    padding: 0 1em 0 0;
  }
  ul.icons li:last-child {
    padding-right: 0;
  }
  ul.icons li .icon:before {
    font-size: 2em;
  }
  ul.actions {
    cursor: default;
    list-style: none;
    padding-left: 0;
  }
  ul.actions li {
    display: inline-block;
    padding: 0 1em 0 0;
    vertical-align: middle;
  }
  ul.actions li:last-child {
    padding-right: 0;
  }
  ul.actions.small li {
    padding: 0 0.5em 0 0;
  }
  ul.actions.vertical li {
    display: block;
    padding: 1em 0 0 0;
  }
  ul.actions.vertical li:first-child {
    padding-top: 0;
  }
  ul.actions.vertical li > * {
    margin-bottom: 0;
  }
  ul.actions.vertical.small li {
    padding: 0.5em 0 0 0;
  }
  ul.actions.vertical.small li:first-child {
    padding-top: 0;
  }
  ul.actions.fit {
    display: table;
    margin-left: -1em;
    padding: 0;
    table-layout: fixed;
    width: calc(100% + 1em);
  }
  ul.actions.fit li {
    display: table-cell;
    padding: 0 0 0 1em;
  }
  ul.actions.fit li > * {
    margin-bottom: 0;
  }
  ul.actions.fit.small {
    margin-left: -0.5em;
    width: calc(100% + 0.5em);
  }
  ul.actions.fit.small li {
    padding: 0 0 0 0.5em;
  }

  @media screen and (max-width: 480px) {
    ul.actions {
      margin: 0 0 2em 0;
    }
    ul.actions li {
      padding: 1em 0 0 0;
      display: block;
      text-align: center;
      width: 100%;
    }
    ul.actions li:first-child {
      padding-top: 0;
    }
    ul.actions li > * {
      width: 100%;
      margin: 0 !important;
    }
    ul.actions li > *.icon:before {
      margin-left: -2em;
    }
    ul.actions.small li {
      padding: 0.5em 0 0 0;
    }
    ul.actions.small li:first-child {
      padding-top: 0;
    }
  }
  dl {
    margin: 0 0 2em 0;
  }
  dl dt {
    display: block;
    font-weight: 600;
    margin: 0 0 1em 0;
  }
  dl dd {
    margin-left: 2em;
  }

  /* Table */
  .table-wrapper {
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
  }

  table {
    margin: 0 0 2em 0;
    width: 100%;
  }
  table tbody tr {
    border: solid 1px #dbdbdb;
    border-left: 0;
    border-right: 0;
  }
  table tbody tr:nth-child(2n+1) {
    background-color: rgba(144, 144, 144, 0.075);
  }
  table td {
    padding: 0.75em 0.75em;
  }
  table th {
    color: #555;
    font-size: 0.9em;
    font-weight: 600;
    padding: 0 0.75em 0.75em 0.75em;
    text-align: left;
  }
  table thead {
    border-bottom: solid 2px #dbdbdb;
  }
  table tfoot {
    border-top: solid 2px #dbdbdb;
  }
  table.alt {
    border-collapse: separate;
  }
  table.alt tbody tr td {
    border: solid 1px #dbdbdb;
    border-left-width: 0;
    border-top-width: 0;
  }
  table.alt tbody tr td:first-child {
    border-left-width: 1px;
  }
  table.alt tbody tr:first-child td {
    border-top-width: 1px;
  }
  table.alt thead {
    border-bottom: 0;
  }
  table.alt tfoot {
    border-top: 0;
  }

  /* Button */
  input[type=submit], input[type=reset], input[type=button] {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    -moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    -ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    background-color: #5a5a5a;
    border-radius: 0;
    border: 0;
    color: #ffffff !important;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    height: 2.85em;
    line-height: 2.95em;
    padding: 0 1.5em;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
  }

  button, .button {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    -moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    -ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    background-color: #F6F2FF;
    border-radius: 0;
    border: 0;
    color: black !important;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    height: 2.85em;
    line-height: 2.95em;
    padding: 0 1.5em;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
  }

  input[type=submit]:hover, input[type=reset]:hover, input[type=button]:hover {
    background-color: #676767;
  }

  button:hover, .button:hover {
    background-color: #676767;
  }

  input[type=submit]:active, input[type=reset]:active, input[type=button]:active {
    background-color: #4d4d4d;
  }

  button:active, .button:active {
    background-color: #4d4d4d;
  }

  input[type=submit].icon, input[type=reset].icon, input[type=button].icon {
    padding-left: 1.35em;
  }

  button.icon, .button.icon {
    padding-left: 1.35em;
  }

  input[type=submit].icon:before, input[type=reset].icon:before, input[type=button].icon:before {
    margin-right: 0.5em;
  }

  button.icon:before, .button.icon:before {
    margin-right: 0.5em;
  }

  input[type=submit].fit, input[type=reset].fit, input[type=button].fit {
    display: block;
    margin: 0 0 1em 0;
    width: 100%;
  }

  button.fit, .button.fit {
    display: block;
    margin: 0 0 1em 0;
    width: 100%;
  }

  input[type=submit].small, input[type=reset].small, input[type=button].small {
    font-size: 0.8em;
  }

  button.small, .button.small {
    font-size: 0.8em;
  }

  input[type=submit].big, input[type=reset].big, input[type=button].big {
    font-size: 1.35em;
  }

  button.big, .button.big {
    font-size: 1.35em;
  }

  input[type=submit].alt, input[type=reset].alt, input[type=button].alt {
    background-color: transparent;
    box-shadow: inset 0 0 0 2px #dbdbdb;
    color: #555 !important;
  }

  button.alt, .button.alt {
    background-color: transparent;
    box-shadow: inset 0 0 0 2px #dbdbdb;
    color: #555 !important;
  }

  input[type=submit].alt:hover, input[type=reset].alt:hover, input[type=button].alt:hover {
    background-color: rgba(144, 144, 144, 0.075);
  }

  button.alt:hover, .button.alt:hover {
    background-color: rgba(144, 144, 144, 0.075);
  }

  input[type=submit].alt:active, input[type=reset].alt:active, input[type=button].alt:active {
    background-color: rgba(144, 144, 144, 0.2);
  }

  button.alt:active, .button.alt:active {
    background-color: rgba(144, 144, 144, 0.2);
  }

  input[type=submit].alt.icon:before, input[type=reset].alt.icon:before, input[type=button].alt.icon:before {
    color: #bbb;
  }

  button.alt.icon:before, .button.alt.icon:before {
    color: #bbb;
  }

  input[type=submit].special, input[type=reset].special, input[type=button].special {
    background-color: #691a15;
    color: #ffffff !important;
  }

  button.special, .button.special {
    background-color: #691a15;
    color: #ffffff !important;
  }

  input[type=submit].special:hover, input[type=reset].special:hover, input[type=button].special:hover {
    background-color: #6692c8;
  }

  button.special:hover, .button.special:hover {
    background-color: #6692c8;
  }

  input[type=submit].special:active, input[type=reset].special:active, input[type=button].special:active {
    background-color: #4278b8;
  }

  button.special:active, .button.special:active {
    background-color: #4278b8;
  }

  input[type=submit].disabled, input[type=submit]:disabled {
    background-color: #9a9a9a !important;
    box-shadow: inset 0 -0.15em 0 0 rgba(0, 0, 0, 0.15);
    color: #fff !important;
    cursor: default;
    opacity: 0.25;
  }
  input[type=reset].disabled, input[type=reset]:disabled {
    background-color: #9a9a9a !important;
    box-shadow: inset 0 -0.15em 0 0 rgba(0, 0, 0, 0.15);
    color: #fff !important;
    cursor: default;
    opacity: 0.25;
  }
  input[type=button].disabled, input[type=button]:disabled {
    background-color: #9a9a9a !important;
    box-shadow: inset 0 -0.15em 0 0 rgba(0, 0, 0, 0.15);
    color: #fff !important;
    cursor: default;
    opacity: 0.25;
  }

  button.disabled, button:disabled {
    background-color: #9a9a9a !important;
    box-shadow: inset 0 -0.15em 0 0 rgba(0, 0, 0, 0.15);
    color: #fff !important;
    cursor: default;
    opacity: 0.25;
  }

  .button.disabled, .button:disabled {
    background-color: #9a9a9a !important;
    box-shadow: inset 0 -0.15em 0 0 rgba(0, 0, 0, 0.15);
    color: #fff !important;
    cursor: default;
    opacity: 0.25;
  }

  @media screen and (min-width: 975px) {
    .newtext {
      width: 82%;
      height: 70%;
    }
  }
  @media screen and (min-width: 975px) {
    .computetext {
      width: 82%;
      height: 20%;
    }
  }
  @media screen and (max-width: 480px) {
    input[type=submit], input[type=reset], input[type=button] {
      padding: 0;
      width: 100%;
    }

    button, .button {
      padding: 0;
      width: 100%;
    }
  }
  /* Header */
  .subpage {
    padding-top: 44px;
  }
  .subpage #header {
    background: #691a15;
    top: 0;
    height: 44px;
    line-height: 44px;
    position: fixed;
  }

  #header {
    color: #d4e0ef;
    cursor: default;
    height: 3.25em;
    left: 0;
    line-height: 3.25em;
    position: absolute;
    text-align: right;
    top: 4em;
    width: 100%;
    z-index: 100;
  }
  #header .inner {
    margin: 0 auto;
    position: relative;
  }
  #header .logo {
    color: #fff;
    display: inline-block;
    font-weight: 600;
    height: inherit;
    left: 0;
    line-height: inherit;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    font-size: 1em;
  }
  #header a {
    -moz-transition: color 0.2s ease-in-out;
    -webkit-transition: color 0.2s ease-in-out;
    -ms-transition: color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out;
    display: inline-block;
    padding: 0 0.75em;
    color: inherit;
    text-decoration: none;
    font-size: 0.8em;
  }
  #header a:hover {
    color: #ffffff;
  }
  #header a:last-child {
    padding-right: 0;
  }
  #header a.navPanelToggle {
    display: none;
    text-decoration: none;
    height: 4em;
    width: 4em;
    z-index: 10003;
  }
  #header a.navPanelToggle .fa {
    font-size: 1.25em;
  }

  @media screen and (max-width: 980px) {
    #header a.navPanelToggle {
      display: inline-block;
    }
  }
  @media screen and (max-width: 736px) {
    #header a {
      padding: 0 0.5em;
    }
  }
  @media screen and (max-width: 980px) {
    #header {
      top: 3em;
      height: 44px;
      line-height: 44px;
    }
  }
  @media screen and (max-width: 736px) {
    #header {
      top: 2em;
    }
  }
  @media screen and (max-width: 480px) {
    #header {
      top: 1em;
      min-width: 320px;
    }
  }
  /* Nav */
  @media screen and (max-width: 980px) {
    #nav {
      display: none;
      
    }
  }
  #navPanel {
    -moz-transform: translatex(20em);
    -webkit-transform: translatex(20em);
    -ms-transform: translatex(20em);
    transform: translatex(20em);
    -moz-transition: -moz-transform 0.2s ease-in-out, visibility 0.2s ease-in-out;
    -webkit-transition: -webkit-transform 0.2s ease-in-out, visibility 0.2s ease-in-out;
    -ms-transition: -ms-transform 0.2s ease-in-out, visibility 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out, visibility 0.2s ease-in-out;
    -webkit-overflow-scrolling: touch;
    visibility: hidden;
    overflow-y: auto;
    position: fixed;
    right: 0;
    top: 0;
    background: #691a15;
    color: #d4e0ef;
    height: 100%;
    max-width: 80%;
    width: 20em;
    padding: 0.5em 1.25em;
    z-index: 10003;
  }
  #navPanel.visible {
    -moz-transform: translatex(0);
    -webkit-transform: translatex(0);
    -ms-transform: translatex(0);
    transform: translatex(0);
    box-shadow: 0 0 1.5em 0 rgba(0, 0, 0, 0.2);
    visibility: visible;
  }
  #navPanel a:not(.close) {
    border-top: solid 1px rgba(255, 255, 255, 0.25);
    color: #d4e0ef;
    font-weight: 600;
    display: block;
    padding: 0.75em 0;
    text-decoration: none;
    font-weight: 300;
  }
  #navPanel a:not(.close):first-child {
    border: none;
  }
  #navPanel .close {
    text-decoration: none;
    -moz-transition: color 0.2s ease-in-out;
    -webkit-transition: color 0.2s ease-in-out;
    -ms-transition: color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out;
    -webkit-tap-highlight-color: transparent;
    border: 0;
    color: #d4e0ef;
    cursor: pointer;
    display: block;
    height: 4em;
    padding-right: 1.25em;
    position: absolute;
    right: 0;
    text-align: right;
    top: 0;
    
    width: 5em;
  }
  #navPanel .close:before {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-transform: none !important;
    content: "";
    width: 3em;
    height: 3em;
    line-height: 3em;
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
  }
  #navPanel .close:hover {
    color: inherit;
  }

  /* Banner */
  #banner {
    padding: 12em 0 10em 0;
    background-image: url("https://thumbs.gfycat.com/EvergreenGrimyIberianchiffchaff-size_restricted.gif");
    background-color: #fff;
    background-size: cover;
    background-position: 0px 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    text-align: center;
  }
  #banner h1 {
    font-size: 3.5em;
    font-weight: 100;
    color: #fff;
    line-height: 1em;
    margin: 0 0 0.5em 0;
    padding: 0;
  }
  #banner p {
    font-size: 1em;
    color: rgba(255, 255, 255, 0.55);
    margin-bottom: 1.75em;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    #banner {
      background-attachment: fixed;
      background-position: 0px 200%;
    }


  } 
  @media screen and (max-width: 1280px) {
    #banner {
      padding: 10em 2em 8em 2em;
    }
  }
  @media screen and (max-width: 980px) {
    #banner {
      background-attachment: scroll;
      background-position: 0px 200%;
    }
  }
  @media screen and (max-width: 736px) {
    #banner {
      padding: 8em 1.5em 6em 1.5em;
      background-position: 0px 110%;
    }
    #banner h1 {
      font-size: 2.5em;
    }
    #banner p {
      font-size: 0.9em;
    }
  }
  @media screen and (max-width: 480px) {
    #banner {
      padding: 6em 1.5em 4em 1.5em;
    }
  }
  /* Footer */
  #footer .inner {
    border-top: 1px solid #dbdbdb;
    padding-top: 3em;
  }
  #footer .copyright {
    color: #bbb;
    font-size: 0.8em;
    margin: 0 0 2em 0;
    padding: 0;
    letter-spacing: 1px;
  }
  #footer .copyright a {
    color: #bbb;
    text-decoration: none;
  }
  #footer .copyright a:hover {
    color: #bbb;
    text-decoration: underline;
  }
  #footer ul.icons li .icon {
    font-size: 0.58em;
  }

  @media screen and (max-width: 736px) {
    #footer .inner {
      padding-top: 2em;
    }
    #footer .copyright {
      -ms-flex-order: 2;
      -moz-order: 2;
      -webkit-order: 2;
      -ms-order: 2;
      order: 2;
    }
    #footer ul {
      -ms-flex-order: 1;
      -moz-order: 1;
      -webkit-order: 1;
      -ms-order: 1;
      order: 1;
    }
    #footer .flex {
      -moz-flex-direction: column;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      text-align: center;
    }
  }
  .mark {
    width: 70px;
    height: 90px;
    display: inline-block;
    position: absolute;
    margin: -35px 5em;
    top: 0;
    font-family: "IBM Plex Sans", sans-serif;
  }
  .mark .ntu_mark {
    width: 100%;
    height: 100%;
    background-color: #691a15;
    padding: 5px 10px;
  }

  #tophead {
    width: 100%;
    height: 2em;
    background-color: black;
  }

  ul.head {
    position: relativez;
    display: inline-block;
  }
  p {
    font-size: 微軟正黑體;
  }

  section#two.wrapper.style_intro.special {
    background-color: white;
  }

  header h2 {
    border-top: solid 1px rgba(105, 26, 21, 0.1);
    padding-top: 50px;
  }

  .intro_p {
    border-top: solid 0px;
    padding: 50px;
    margin-top: auto;
    margin-bottom: auto;
  }

  section#center_intro.wrapper.style_intro.special {
    width: 100%;
    height: 730px;
    background-color: black;
    margin-bottom: -5%;
  }
  section#center_intro.wrapper.style_intro.special .intro {
    color: #BC9EC1;
    font-weight: 500;
    margin-top: 3%;
  }

  .intro_i {
    padding: 12em 0 10em 0;
    letter-spacing: 2px;
    line-height: 1.68;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://i.imgur.com/7BH16yN.jpg);
    background-color: black;
    background-size: auto, cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
  }

  .intro_x {
    margin: 10px;
    margin-left: -0.075em;
    text-align: center;
    padding: 10px;
    background: #fff;
    box-shadow: 1px 2px 5px #c6c6c6;
    width: 100%;
    height: 100%;
  }

  .intro_i {
    padding: 10%;
    color: white;
    text-align: center;
    display: relative;
    margin-top: -13%;
    padding-top: 100px;
    border-bottom: solid 1px rgba(105, 26, 21, 0.1);
  }
  .intro_i img {
    width: 100%;
    height: 100%;
    padding: 0px;
    border-radius: 5pt;
    background: #fff;
    box-shadow: 1px 2px 5px #c6c6c6;
    position: relative;
    margin: 20px;
    margin-top: -2%;
    left: 60%;
    background-color: black;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 35%;
    height: 35%;
    padding-bottom: 0;
  }

  .intro_i1 {
    margin: 10px;
    padding: 10px;
    margin-top: -40%;
    justify-content: flex-start;
    position: relative;
    display: flex;
    width: 58%;
    height: 20%;
  }

  @media screen and (max-width: 900px) {
    .ntu_mark {
      display: none;
    }

    .intro_x {
      order: 0;
      width: 90%;
      height: 90%;
    }

    .intro_i {
      border-bottom: solid 1px rgba(105, 26, 21, 0.1);
    }
    .intro_i img {
      width: 70%;
      height: 70%;
      position: center;
      margin-top: 10%;
      margin-left: -51%;
      transform: translate(10%, 0%);
      padding-top: 0px;
    }

    .intro_i1 {
      position: center;
      margin-left: 22%;
      padding-top: 0px;
    }
  }
  .quote {
    letter-spacing: 5px;
  }

  .author {
    letter-spacing: 5px;
  }

  .sponsor {
    text-align: left;
    margin-left: 50%;
    padding-left: 35% !important;
    font-family: 微軟正黑體;
    font-weight: 900 !important;
    font-size: 20px !important;
    color: red;
  }

  .table_newsIcon {
    width: 40%;
    height: 10%;
    margin: 17px;
    margin-left: 50%;
    transform: translate(-50%, 0%);
  }
  .table_newsIcon tr th {
    width: 50%;
    height: 13%;
    text-align: center;
    vertical-align: middle !important;
    padding: 10px;
    cursor: pointer;
    font-weight: 300;
    letter-spacing: 5px;
    color: grey;
  }
  .table_newsIcon tr th:hover {
    background-color: rgba(144, 144, 144, 0.075);
  }

  .news {
    margin-bottom: 0px;
    padding-bottom: 0px !important;
  }

  .aicon {
    font-size: 22px;
  }
  .aicon:hover {
    background-color: #691a15;
    color: white;
    padding: 10px 20px 10px 20px;
    font-weight: 600;
  }
  @media screen and (max-width: 1080px){
    .aicon:hover {
      font-weight: 300;
    }
  }
  @media screen and (max-width: 520px) {
    .table_newsIcon {
      width: 79%;
      height: 8%;
    }
    .table_newsIcon .aicon {
      font-size: 18px;
    }
  }
  table.sampleNews tr th {
    text-align: center;
  }
  #Qco{
    position: relative;
  }
  #Qco .inner {
    
    margin-right: 0 auto;
    
    width: 100%;
    height: 30%;
    padding: 15px;
  }
  #Qco .inner .qco {
    margin: 15px;
    font-weight: 700;
    padding: 10px;
  }
  #Qco .inner .button1 {
    background-image: url(https://i.imgur.com/OPtG2UV.png);
  }
  #Qco .inner .button2 {
    background-image: url(https://i.imgur.com/rrHhRCF.jpg);
  }
  #Qco .inner .button3 {
    background-image: url(https://i.imgur.com/1Ue4bfQ.png);
  }
  #Qco .inner .button1, #Qco .inner .button2, #Qco .inner .button3 {
    border: solid 2px #004d99;
    border-radius: 2px;
    background-color: #fff;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
    width: 140px;
    height: 70px;
    padding: 5px;
    margin: 23px;
    display: inline-block;
  }

  .inner.co {
    width: 100%;
    height: 100%;
  }

  ul.con {
    margin-left: -40%;
  }

  @media (max-width: 1028px) {
    ul.con {
      margin-left: -30%;
    }
  }
  @media (max-width: 790px) {
    ul.con {
      margin-left: -20%;
    }
  }
  @media (max-width: 683px) {
    ul.con {
      margin-left: -10%;
    }
  }
  li.con {
    display: inline-block;
    vertical-align: middle;
    margin: 0 10%;
  }
  li.con .ti {
    margin-right: 0;
  }
  li.con h2 {
    margin-left: 0;
    padding-left: 0;
  }

  .x {
    width: 100px;
    height: 50px;
  }

  .underline {
    width: 40px;
    height: 2px;
    background-color: #660066;
  }

  .underline1 {
    width: 219px;
    height: 2px;
    background-color: #660066;
  }

  .underline2 {
    width: 80px;
    height: 2px;
    background-color: #660066;
  }

  @media screen and (max-width: 480px) {
    .underline, .underline1, .underline2 {
      margin-left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .computetext, .newtext {
    letter-spacing: 2px;
    line-height: 1.68;
    font-weight: 750;
    color:darkgray;
  }

  section#two.wrapper.style_quote.special .inner .quote.quote_eng {
    font-family: Bree Serif;
    color: #19324d;
    font-size: 18px;
    font-weight: 200;
    letter-spacing: 1.5px;
  }
  section#two.wrapper.style_quote.special .inner .author_author_eng {
    color: #8585ad;
    letter-spacing: 1.68px;
  }
  section#two.wrapper.style_quote.special .inner .quote {
    color: #19324d;
    font-weight: 600;
    font-size: 17px;
  }
  section#two.wrapper.style_quote.special .inner .author {
    color: #8585ad;
    font-weight: 400;
  }



  section#Qmember.wrapper.style1.special .box-person {
    width: 47%;
    height: 50%;
    display: inline-block;
  }

  svg {
    width: 45px;
    position: fixed;
    top: 5px;
  }

  #picker {
    stroke: #52527a;
    stroke-width: 4px;
    z-index: 9999999;
  }
  #picker:hover {
    background-color: #c1c1d7;
    border-radius: 0 15% 15% 0;
    cursor: pointer;
  }

  @media screen and (max-width: 672px) {
    #Qco .inner .qco {
      position: center;
      font-size: 18px;
      
    }
    #Qco .inner .button1, #Qco .inner .button2, #Qco .inner .button3 {
      width: 90px;
      height: 45px;
    }
  }
  .box.person {
    display: inline-block;
    background-color: #fff;
    border-radius: 5px;
    border: solid 2px black;
  }



  body.navbar_body{
    position: relative;
    z-index: 9999;
    margin: 0;
    background-color: #f1f1f1;
    font-family: Arial, Helvetica, sans-serif;
  }
  #navbar{
    z-index: 999999999;
    background-color: rgba(37, 6, 54, 0.98);
    position: fixed;
    top: -50px;
    width: 100%;
    display: block;
    transition: top 0.3s;
    font-weight: 900;
    margin-right: 20px;
    padding-right: 30px;
  }
  a.navbar_a{
    z-index: 99999;
    float: right;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 15px;
    text-decoration: none;
    font-size: 20px;
    
  }
  a.navbar_a:hover{
    z-index: 99999;
    background-color: #ddd;
    color: black;
  }
  h2.navbar_h2{
    z-index: 99999;
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 15px;
    padding-bottom: 0;
    text-decoration: none;
    font-size: 20px;
    font-weight: 900;
    margin-left: 20px;
  }
  .navigation_li_a{
    list-style: none;
    padding-left: 10px;
    text-align: center;
  }
  .content{
    z-index: 0;
  }
  .disable_inner{
    position: fixed;
    top:-100000px;
  }
  .needToDeal{
    position: relative;
    z-index: 0;
  }
  .ntuibm {
    width: 32%;
    margin-top: 30px;
    margin-left: 150px;
  }

  #footer {
    background-color: #b3b3b3;
  }

  @media screen and (max-width: 900px) {
    .ntuibm {
      display: inline-block;
      width: 45%;
      margin-left: auto;
      margin-top: 25px;
    }
  }
  @media screen and (max-width: 672px) {
    #Qco .inner .qco {
      
      font-size: 18px;
      font-weight: 400;
    }
    #Qco .inner .button1, #Qco .inner .button2, #Qco .inner .button3 {
      width: 90px;
      height: 45px;
    }
  }
  .IBMQ {
    font-family: Impact, fantasy;
    font-weight: 100;
  }
  .white_footer{
    color: white;
    font-weight: bolder;
  }
  @media screen and (max-width: 980px) {
    .inner {
      width: 63%;
    }
  }
  .box.box.person {
    color:black;
    
    

  }
  .box.box.person h3 {
    color:black;
    
    

  }
  .footer_news{
    position: absolute;
    bottom: 0px;
  }
  .layout{
    display:contents;
  }
</style>



<script>
      // When the user scrolls down 20px from the top of the document, slide down the navbar
      
      /* window.onscroll = function () {
        scrollFunction();
      };
      
      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          const newLocal='0';
          document.getElementById('navbar').style.top = newLocal;
        } else {
          document.getElementById('navbar').style.top = '-90px';
          
        }
      } */


    

    export default {
      data(){
        return{
          newsLeftOk:[],
          newsCenterOk:[],
          newsRightOk:[]
          
        }
      },
      name: 'Index',
      mounted() {
        /* 最新消息的過濾 */
        this.newsLeftOk = this.$page.news.edges
        //require our external library and load it in window
        
        /* window.$ = require('jquery')
     */
        // This works now
        $(document).ready(function(){
          $(".picbtn").click(function(){
            $("#Navigation").slideToggle("slow");
            
        });
        });
      },
      watch:{
    tab(val){
      if(this.tab === 4){
        
      }else{
        this.showNewsByType( val )
      }
    }
  },
  methods:{
    
    showNewsByType(val){
      this.news = this.$page.news.edges.filter((edge) =>{
        return edge.node.newsDisplay.id === val
      })
    },
    
  }
}
    
</script>




