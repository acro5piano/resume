import Vue from 'vue';

Vue.config.devtools = true;

new Vue({
    el: '#app',
    data: {
      name: "Ivan Shavliuga",
      geo:"Republic Belarus, Novopolotsk",
      prof:"junior Frontend developer",
      email:"iva.drakon.nov@gmail.com",
      github:"https://github.com/IvanShavliuga/",
      phone:"+375 ** *** ** 23",
      skills: [
        "html5","css3","scss","less","pug","Angular (beginners)","vue.js (2.x)","Vue-Router","Vuex","npm","Webpack",
        "Bootstrap (4.x)","EcmaScript (2015)","git","adaptive design"       
      ],
      education:[{
      	years: "2006-2011, 3.5 years",
      	caption: "Polotsk state University",
      	link:"psu.by",
      	desc:"information technology software"
      },{
      	years: "2018-2019",
      	caption: "INTUIT (Free courses)",
      	link:"intuit.ru",
      	desc:"basic JavaScript, HTML, CSS"
      },{
      	years: "2019 - now",
      	caption: "GeekBrains (Free courses)",
      	link:"geekbrains.ru",
      	desc:"advanced JavaScript, HTML, CSS"
      }],
      work: [{
         years:"09/2018 - Now",
         caption:"Table of Mendeleev",
         link:"https://mendel-info.usite.pro",
         desc:"Administrator"      
      },{
         years:"12/2019- Now",
         caption:"Maybebaby project",
         link:"https://www.geekbrains.ru",
         desc:"junior Vue.js developer"      
      }],
      portfolio:[{
         sitelink:"https://github.com/IvanShavliuga/vue-chat",
         sitetitle:"github.com/IvanShavliuga",
         title:"Chat",
         desc:" Multi-user Chat for exchanging short messages using some html tags",
         tech:["html5","css3","less","vue.js (2.x)","npm","Webpack","EcmaScript (2015)",
               "git","adaptive design","own design"]      
      },{
         sitelink:"https://github.com/IvanShavliuga/vuejsnews",
         sitetitle:"github.com/IvanShavliuga",
         title:"Example vue.js news portal",
         desc:"News portal using vue technologies .js and css, bootstrap. This project is a simple social news network. The project was created specifically for self- learning. Implemented groups, users, news feed, the ability to edit material and create groups, as well as send messages, put likes, comments and reposts. I will be happy if you find errors in the code.",
         tech:["html5","css3","scss","vue.js (2.x)","npm","Webpack","EcmaScript (2015)",
               "git","adaptive design","own design"]      
      },{
         sitelink:"https://github.com/IvanShavliuga/vuejstimer",
         sitetitle:"github.com/IvanShavliuga",
         title:"Example vue.js tasks list and timer",
         desc:"task list and timer vue component",
         tech:["html5","css3","scss","vue.js (2.x)","npm","Webpack","EcmaScript (2015)",
               "git","adaptive design","own design"]      
      },{
         sitelink:"https://github.com/IvanShavliuga/vuejs-mail-app",
         sitetitle:"github.com/IvanShavliuga",
         title:"Example vue.js mail app",
         desc:"Just a project for self-learning vue.js technology. Development of a multi-user mail application (only frontend parts) for your own needs and learning vue.js for further professional growth as a specialist. The project must switch between users and be able to add new ones). It should be possible to send messages to spam, and forward messages between users.",
         tech:["html5","css3","vue.js (2.x)","npm","Webpack","EcmaScript (2015)",
               "git","adaptive design"]      
      }],
      creative:[{
         category: "Literature",
         linkslist: [{
            name:"Author Today",
            link:"https://author.today/u/ischavliuga/works"
         },{
            name:"SamLib.ru",
            link:"https://samlib.ru/i/iwan_sergeewich_shawljuga/"
         },{
            name:"Personal web-site",
            link:"https://https://isschavliuga.ucoz.net"
         }]
      },{
         category: "Science",
         linkslist: [{
            name:"Table of Mendeleev",
            link:"https://mendel-info.usite.pro"
         },{
            name:"Telegram channel of science",
            link:"https://t.me/mendelinfo"
         },{
            name:"Telegram channel of framework vue.js",
            link:"https://www.t.me/vuejscodesru"
         }]
      }],
      social: [{
         name:"linkedin",
         link:"https://www.linkedin.com/in/%D0%B8%D0%B2%D0%B0%D0%BD-%D0%B8%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2-%D1%88%D0%B0%D0%B2%D0%BB%D1%8E%D0%B3%D0%B0-778540153/"
      },{
         name:"github",
         link:"https://www.github.com/IvanShavliuga"
      },{
         name:"telegram",
         link:"https://www.t.me/vuejscodesru"
      },{
         name:"VK",
         link:"https://www.vk.com/isshavluga"
      },{
         name:"sololearn",
         link:"https://www.sololearn.com/Profile/9620153/?ref=app"
      },{
         name:"codepen",
         link:"https://www.codepen.io/ivanshavliuga"
      }]   
    }
});
