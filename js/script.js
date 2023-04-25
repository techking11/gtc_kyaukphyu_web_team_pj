'use strict'
/* News & Announcement ----------------- */

let news_march = document.querySelector('.march')
let news_june = document.querySelector('.june')
let news_date = document.querySelectorAll('.news-date-catch a')

for (let date of news_date) {
    date.addEventListener('click', function() {
        if(this.textContent == 'March 2023') box_change(news_june, news_march)
        else box_change(news_march, news_june)
    })
}

let box_change = function (box1, box2) {
    box1.style.display = 'none'
    box2.style.display = 'block'
}

/////////////////////////////////////////
///// Frequently Asked Questions
////////////////////////////////////////

const questions = document.querySelectorAll('.question')
const answers = document.querySelectorAll('.answer')

for(let i = 0; i < questions.length; i ++) {
    questions[i].addEventListener('click', function() {
        if(answers[i].style.display == 'none') answers[i].style.display = 'block'
        else answers[i].style.display = 'none'
    }, 200)
}

/////////////////////////////////////////////////////////
///////////// Research - Collaboration
////////////////////////////////////////////////////////

let collaboration_navigations = document.querySelectorAll('.short-course-navigation ul li')

let collaboration_courses = document.querySelectorAll('.short-course')

collaboration_navigations.forEach(collaboration_navigation => {

    collaboration_navigation.addEventListener('click', e => {

        collaboration_courses.forEach(collaboration_course => {

            if(collaboration_course.id == e.target.dataset.panel) 
                collaboration_course.style.display = 'block'

            else collaboration_course.style.display = 'none'

            
        });
    });

});