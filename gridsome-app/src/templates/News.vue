<template lang="pug">
  Layout
    
   
    body.navbar_body
      
        #navbar
          .menu1
            g-link(to='/')
              h2.navbar_h2(style='font-family:IBM Plex Sans') IBM Q Hub at NTU
            g-link.navbar_a(to='/') Home
    body.content
      div.article
        
        h1 {{$page.news.title}}
        h4.profile {{$page.news.profile}}
        
        br
        div.event_photo
          img(:src="`http://localhost:1337${$page.news.photo}`" style="width: 600px ")
        #area7
          footer#footer
            .inner
              .flex
                .copyright
                  br
                  h3 {{$page.news.discribe}}
                  br
                  | 聯絡電話：02-3366-5095
                  br
                  | Email: taqcit@gmail.com
                  br
                  hr
                  | 電話：（02)3366-3366|
                  | 地址：臺北市羅斯福路四段一號|
                  a(href="https://www.ntu.edu.tw") 臺灣大學.|
                  |
                  a(href="https://www.ibm.com/tw-zh") IBM
                 
</template>




<page-query>
query{
  news(id:"2"){
    id
    title
    discribe
    photo
    profile
    category{
      id
      
    }
    newsClasses
						
  }
}
 

</page-query>

<script>
export default {

  metaInfo(){
    return{
      title: this.$page.news.title
    }
  },


  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
  
};
</script>

<style>
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
  top: 0px;
  width: 100%;
  display: block;
  transition: top 0.3s;
  padding-top: 10px;
}
a.navbar_a{
  z-index: 99999;
  float: right;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 15px;
  text-decoration: none;
  font-size: 17px;
  margin-right: 100px;
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
  font-size: 17px;
}
body.content{
  position: absolute;
  top:100px;
  padding: 150px;
  padding-right: 150px;
}
.profile{
  color: grey;
  font-weight: 500;
}
</style>