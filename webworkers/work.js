

self.onmessage=function(event){
    console.log(event.data)
    if(event.data&&event.data.type&&event.data.type==='work'){
        console.log("close work")
        self.close()
    }
}