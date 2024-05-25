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
            ciao:true,
            findTask:'',
            newItem:'',
            addTaskQuestion:false,
            
        }

    },
    methods:{
        
        deleteItems(i){
           this.todoItems = this.todoItems.filter((_,index)   =>  index !== i)

        },

        addTask(){
            console.log('non esiste la task vuoi agginugerla')

            const newItem ={
                text:this.findTask,
                check:false
            }
            this.todoItems.push(newItem)


        },
        


        filterTask(){
            if(this.findTask){

                const taskFiltered= this.todoItems.filter((item)=>{
                    return item.text.toLowerCase().includes(this.findTask.toLowerCase());
                })
                console.log(taskFiltered.length)

                if (taskFiltered.length === 0){
                    this.addTaskQuestion =  true;
                }else{
                    this.addTaskQuestion =  false;

                    return taskFiltered

                }

            } else{
                this.addTaskQuestion =  false;
                

                return this.todoItems;
            }


        },
        


    }


}).mount('#app')