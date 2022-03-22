let currentPage= 1
const maxPages=11
const right= document.querySelector('.right')
const left= document.querySelector('.left')


$('.right').click(()=>{
    if(currentPage<maxPages){
        currentPage++
        // $(`.page${currentPage}`).css("display","flex")
        $(`.page${currentPage}`).css("right",0)
        if(currentPage>1) $('.left').show()
        if(currentPage==maxPages) $('.right').hide()
        
    }else{
        $('.right').hide()
    }
})
$('.left').click(()=>{
    if(currentPage>1){
        $(`.page${currentPage}`).css("right","100vw")
        currentPage--
        if(currentPage==1) $('.left').hide()
        if(currentPage<maxPages) $('.right').show() 
    }
})

$('.info').click(()=>{
    $('.details').toggle(1000)
    $('.transparent').show(800)
})
$('.transparent').click(()=>{
    $('.details').toggle(800)
    $('.transparent').hide(800)
})
// right.addEventListener('click',()=>{
//     currentPage++
//     document.querySelector(`.page${currentPage}`).style.left=0
//     if(currentPage>1){
//         left.style.display= "block"
//     }
// })

// left.addEventListener('click', ()=>{
//     document.querySelector(`.page${currentPage}`).style.left="100vw"
//     currentPage--
//     if(currentPage==1){
//         left.style.display= "none"
//     }
// })