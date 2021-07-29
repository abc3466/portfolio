const vtSlideWrap = document.querySelector('.vt_slideWrap');
const vtSlideItem = document.querySelectorAll('.vt_slideItem');
const vtSlideCount = vtSlideItem.length/2;
const vtSLideY = 100/vtSlideCount;
const vtDelay =  3000;
let vtSlideNum = 0;
const vtSlide = ()=>{
    if(vtSlideNum==vtSlideCount){
        vtSlideWrap.style.transform=`translateY(-${vtSlideNum*100}%)`;
        vtSlideWrap.style.transition=`${0}ms`;
        setTimeout(()=>{
            vtSlideWrap.style.transform=`translateY(100%)`
        },100)
        setTimeout(()=>{
            vtSlideWrap.style.transition=`${1000}ms`;
            vtSlideWrap.style.transfrom='translateY(0%)';
        },200)
        vtSlideNum=0;
        return false;
    }
    vtSlideWrap.style.transition=`${1000}ms`
    vtSlideWrap.style.transform=`translateY(-${vtSlideNum*100}%)`;
    vtSlideNum++;
}


setInterval(()=>{vtSlide()},vtDelay);
