const app= Vue.createApp({
    // template: '<h2>I am the template</h2>'
//creatig dynamic data:
data(){
    return{
        
showbook:true,
// tittle:'Change your thinking Change your life',
// author:'Brain Tracy',
// age:

//v for/array
books:[
    {tittle:'Change your thinking',author:'Brian Tracy',age:45, img: 'assets/1.jpg'},
    {tittle:'The choice',author:'John',age:50, img: 'assets/2.jpg'},
    {tittle:'The pathway to destiny',author:'Brian Tracy',age:45, img: 'assets/3.jpg'}
]
    }
},
methods: {
    toggleshowBooks (){
        this.showbook=!this.showbook
    } 

}
})
app.mount('#app')