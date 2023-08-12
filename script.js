const img = document.querySelector('.image')
const buttonLeft = document.querySelector('.left')
const buttonRight = document.querySelector('.right')
const dot1 = document.querySelector('.dot1')
const dot2 = document.querySelector('.dot2')
const dot3 = document.querySelector('.dot3')
const array = ['horses.jpg', 'lake.jpg','nature.jpg', 'tiger.jpg', 'tiger2.jpeg', 'waterfall.jpeg', 
'waterfall_2.jpeg', 'waterfall_3.jpeg','wolfs.jpg']
let index = 1
buttonRight.addEventListener('click', function(){
    if(index<array.length){
        img.src=array[index]
        index+=1
    } else{
        index=0
        img.src=array[index]
        index+=1
    }
    
    }
)
buttonLeft.addEventListener('click', function(){
    if(index>0){
        img.src=array[index]
        index-=1
    } else{
        index=array.length-1
        img.src=array[index]
        index-=1
    }
    
    }
)
dot1.addEventListener('click', function(){
    if(index>0){
        img.src=array[index]
        index-=1
    } else{
        index=array.length-1
        img.src=array[index]
        index-=1
    }
    setTimeout(()=>dot2.checked = true, 500)
    }
)
dot3.addEventListener('click', function(){
    if(index<array.length){
        img.src=array[index]
        index+=1
    } else{
        index=0
        img.src=array[index]
        index+=1
    }
    setTimeout(()=>dot2.checked = true, 500)
    }
)


document.addEventListener('keydown', function(event) {
    if(event.code == 'ArrowRight'){
        if(index<array.length){
            img.src=array[index]
            index+=1
        } else{
            index=0
            img.src=array[index]
            index+=1
        }
        setTimeout(()=>dot2.checked = true, 500)
    }
})
document.addEventListener('keydown', function(event) {
    if(event.code == 'ArrowLeft'){
        if(index>0){
            img.src=array[index]
            index-=1
        } else{
            index=array.length-1
            img.src=array[index]
            index-=1
        }
        setTimeout(()=>dot2.checked = true, 500)
    }
})
