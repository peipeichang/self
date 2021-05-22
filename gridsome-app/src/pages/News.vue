<template lang="pug">
  

  layout
   
    body.navbar_body
      
        #navbar
          .menu1
            g-link(to='/')
              h2.navbar_h2(style='font-family:IBM Plex Sans') IBM Q Hub at NTU
            g-link.navbar_a(to='/') Home
            div
    body.search
          h5 最新消息
          v-text-field.ml-8(prepend-inner-icon="mdi-magnify" 
                            placeholder='Search' 
                            outlined='' 
                            rounded='' 
                            dense='' 
                            hide-details='' 
                            style=' max-width:300px; max-height:50px')
          v-tabs(v-model="tab" grow style="margin-top:20px")
            v-tab 最新消息
            v-tab 活動
            v-tab 中心消息
          br
         
          v-card.mt-5(v-for="edge in news" :key="edge.node.id"
                          max-width='520')
            v-img.white--text.align-end(height='350px' :src="`http://localhost:1337${edge.node.photo}`")
            
            v-card-title
              | {{edge.node.title}}
            v-card-subtitle.pb-0
              | {{formatDate(edge.node.date)}}
              | 
          
            v-card-actions
              v-btn( color= '#691a15' text='')
                | Share
              v-btn(color='#691a15' text='')
                | Explore


          

</template>




<page-query>

query{
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



}

</page-query>


<script>
import moment from 'moment'




export default {
  metaInfo: {
    title:  "News"
  },
  data() {
    return {
      tab:0,
      news: []

    }
  },
  mounted(){
    this.news = this.$page.news.edges
  },
  watch:{
    tab(val){
      if(this.tab === 0){
        this.showAllNews()
      }else{
        this.showNewsByType( val )
      }
    }
  },
  methods:{
    showAllNews(){
      this.news = this.$page.news.edges
    },
    showNewsByType(val){
      this.news = this.$page.news.edges.filter((edge) =>{
        return edge.node.category.id === val
      })
    },
    formatDate(date){
      return moment(date).format('MMMM Do YYYY , h:mm a')
    }
  }
}
</script>

<style  scoped>
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
.search{
  position: absolute;
  top:12%;
  left:25%;
  
}
v-row{
  position: relative;
}

v-card-actions{
  position: absolute;
  bottom: 10000px;
}
v-card{
  margin:1000px !important;

}

</style>