'use strict'

/////////////////////////////////////////////////////////
///////////// Human Resource Student Total Animation
////////////////////////////////////////////////////////

let human_resource = document.querySelector('.human-resource .number')
let nums = document.querySelectorAll('.human-resource .number')

window.addEventListener('scroll', function() {

    const triggerBottom = Math.floor(window.innerHeight / 4 * 5) // 430
    const boxTop = Math.floor(human_resource.getBoundingClientRect().top) // 429
    const boxBottom = Math.floor(human_resource.getBoundingClientRect().bottom) // 328

    if(triggerBottom < boxBottom && triggerBottom > boxTop) {
    
        nums.forEach(function(data) {
            let val = 0
            let interval = setInterval(increaseNum, 10)
            let d = parseInt(data.textContent)
            
            function increaseNum() {
                if(val < d) val ++
                else clearInterval(interval)
                data.innerHTML = val
            }

        })

    }
})