Vue.component('item', {
    template : '<li><slot></slot></li>'
  })

  Vue.component('listitem', {
    template : '<div><item v-for="task in lstTask">{{task.name}}</item></div>',

    data(){
        return {
            lstTask:[
                {name:'go fishing', iscomplete:true},
                {name:'play game', iscomplete:true},
                {name:'fooooooooollllllball time', iscomplete:false},
                {name:'clean hourse', iscomplete:true},
                {name:'jelly fish feel', iscomplete:true},
                {name:'go shopping', iscomplete:true}
            ]
        }
    }
  })

var app = new Vue({
    el: "#vue-app",
    data: {
        lstTask:[
            {name:'go fishing', iscomplete:true},
            {name:'play game', iscomplete:true},
            {name:'fooooooooollllllball time', iscomplete:false},
            {name:'clean hourse', iscomplete:true},
            {name:'jelly fish feel', iscomplete:true},
            {name:'go shopping', iscomplete:true}
        ],
        newitem:{name:'', iscomplete:false}

    },
    methods:{
        toggleComplete(key){
            this.lstTask[key].iscomplete = this.lstTask[key].iscomplete ? false:true
        },

        addNewItem(){
            
            this.lstTask.push(this.newitem)
            this.newitem = {name:'', iscomplete:false}
        }

    },
    computed:{
        incomplatedTask(){
            return this.lstTask.filter(item => !item.iscomplete)
        }
    },
    mounted(){
        console.log('document is ready')
    }
})
