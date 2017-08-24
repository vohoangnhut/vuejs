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
                tab.isActive = (tab.name == selectedTab.name)
            });
        }
    },
    computed: {
        href() {
            return 'foor'
        }
    }
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

    mounted() {
        this.isActive = this.selected
    }
})

var app = new Vue({
    el : '#vueapp',
    data : {
        isshow : false
    }
})