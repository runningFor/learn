self.addEventListener("message",function(e){
    console.log(e.data)
    let sum = 0;
            for (let i = 0; i < 9999999; i++) {
                sum++
            }
    self.postMessage(sum)
    self.close()
})



self.addEventListener("error",function(e){
    console.log("error",e)
})