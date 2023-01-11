//1 - Get fetch
fetch("https://jsonplaceholder.typicode.com/todos")
.then((response) => response.json())
.then((data) => {
    console.log(data)
})
.catch((error)=>console.log(error))

//2 - Get Axios
axios.get("https://jsonplaceholder.typicode.com/todos")
.then((response)=>{
    console.log(response.data)
})
.catch((error)=>console.log(error))

//3- POST com Fetch
const data = {
    title:"Algum título",
    content:"Conteudo",
    userId:1
}
fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    headers:{
        "Content-Type": "application/json",
    },
    body:JSON.stringify(data)
})
.then((response) => response.json())
.then((data) => {
    console.log(data)
})
.catch((error)=>console.log(error))

//4-POST com axios
axios.post("https://jsonplaceholder.typicode.com/posts",data)
.then((response)=>{
    console.log(response.data)
})
.catch((error)=>console.log(error))
