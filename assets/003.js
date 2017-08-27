Vue.component('messager',{
    template : `
    <article class="message" v-show="isVisiable">
        <div class="message-header">{{title}}<button class="delete" @click="isVisiable = false" aria-label="delete"></button></div>
        <div class="message-body">{{content}}</div>
    </article>
    `, 

    data(){
        return {
            isVisiable : true
        }
    },
    props:['title','content'],

    methods : {
    }

})

Vue.component('modal',{
    template:`
    <div class="modal is-active">
        <div class="modal-background" @click="$emit('close')"></div>
        <div class="modal-content">
            <div class="box">
                <slot></slot>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
    `,
})

Vue.component('tabs',{
    template:`
    <div>
        <div class="tabs">
            <ul>
               <li v-for="tab in tabs" :class="{'is-active':tab.isActive}">
                <a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>
                </li>
            </ul>
        </div>

        <div class="tab-details">
            <slot></slot>
        </div>
    </div>
    `,

    // mounted(){
    //     console.log(this.$children);
    // }

    created() {
        this.tabs = this.$children
    },

    data (){
        return {tabs:[]}
    },

    methods: {
        selectTab(selectedTab){
            this.tabs.forEach(tab=>{
                tab.isActive = (tab == selectedTab)
            });
        }
    },
    
})

Vue.component('tab',{
    template:`
        <div v-show="isActive">
            <slot></slot>
        </div>
    `,

    props: {
        name : {required:true},
        selected: {default:false}
    },

    data() {
        return {isActive: false}
    },
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g,'-');
        }
    },

    mounted() {
        this.isActive = this.selected
    }
})
data = { counter: 0 };
Vue.component('simple-counter', {
    template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    // data is technically a function, so Vue won't
    // complain, but we return the same object
    // reference for each component instance
    data: function () {
      return data;
    }
  })

var app = new Vue({
    el : '#vueapp',
    data : {
        isshow : false,
        isChkBox : false,
        //selected: 'A',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
          ],

          items: [1,2,3,4,5,6,7,8,9],
          nextNum: 10
    },

    methods: {
        randomIndex: function () {
          return Math.floor(Math.random() * this.items.length)
        },
        add: function () {
          this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove: function () {
          this.items.splice(this.randomIndex(), 1)
        },
        shuffle: function () {
          this.items = _.shuffle(this.items)
        },
        sort(){
            this.items.sort(function(a, b){return a-b});
        }
      }
})