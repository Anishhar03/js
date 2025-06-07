const promisei=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("async h yeh")
        resolve()
    },1000)
}).then(()=>{
    console.log("promise h yeh")
})

const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("async h yeh")
        resolve({name:"ANISH"})
    },1000)
}).then((NAME)=>{
    console.log(NAME)
})


//callback hell bachane ke liye
const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false
        if(!error){
            console.log("async h yeh")
        resolve({name:"ANISH",roll:"1"})
        }
        else{
            reject("error hai bhai")
        }
    },1000)
}).then((user)=>{
    console.log(user.name)
    return user.name
}).then((name)=>{
    console.log(name)
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("it is fully executed")
})



