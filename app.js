const app= Vue.createApp({
    // template: '<h2>I am the template</h2>'
//creatig dynamic data:
data(){
    return{
        
showbook:true,
tittle:'Change your thinking Change your life',
author:'Brain Tracy',
age:50

    }
},
methods: {
    toggleshowBooks (){
        this.showbook=!this.showbook
    } 

}
})
app.mount('#app')