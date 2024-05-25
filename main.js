const{ createApp }= Vue;


createApp({
    data(){
        return{
            todoItems:[
                {
                    text:'fare la spesa',
                    check:false
                },
                {
                    text:'portare in giro il cane',
                    check:false
                },
                {
                    text:"finire l'esercizio todolist",
                    check:false
                },
                {
                    text:'andare a scalare',
                    check:false
                }
                

            ],
            ciao:true
            
        }

    },
    methods:{
        changeCheck(index){
            console.log(this.todoItems[index].check)
            this.todoItems[index].check = !this.todoItems[index].check
            console.log(this.todoItems[index].check)

        }


    }


}).mount('#app')