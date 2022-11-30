let text = 'Something wicked this way come'

arr = text.split('')
let flag = false
let i = 0
setInterval(function(){
    if(flag === false){        
        let span =document.createElement('span')
        span.innerText = arr[i++]
        p.appendChild(span)
        if(arr.length + 1 === i){
            i = 0
            flag = true
        }
    }
    if(flag === true){       
        arr.pop()
        console.log(arr)
        p.innerHTML = ''
        arr.forEach((item) =>{
            let span =document.createElement('span')
            span.innerText = item
            p.appendChild(span)
        })
        if(arr.length === 0){
            arr = text.split('')
            flag = false
        }
    }
},200)