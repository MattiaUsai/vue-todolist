const{ createApp }= Vue;


createApp({
    data(){
        return{
            todoItems:[
                {
                    text:'Fare la spesa',
                    check:false
                },
                {
                    text:'Portare in giro il cane',
                    check:false
                },
                {
                    text:"Finire l'esercizio todolist",
                    check:false
                },
                {
                    text:'Andare a scalare',
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
        },

        deleteItems(i){
           this.todoItems = this.todoItems.filter((_,index)   =>  index !== i)

        }


    }


}).mount('#app')