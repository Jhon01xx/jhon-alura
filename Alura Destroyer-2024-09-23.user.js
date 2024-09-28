// ==UserScript==
// @name         Alura Destroyer
// @namespace    https://cursos.alura.com.br/
// @version      2024-09-23
// @description  nuh uh i dont want to do alura nomore :sob:
// @author       jhon01xx
// @match        https://cursos.alura.com.br/course/*/task/*
// @icon         https://i.imgur.com/gP1LZq9.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("--- ALURA DESTROYER byjhon01xx ---");

    const water_mark = document.querySelector('.formattedText');
    water_mark.innerHTML = 'feito pelo jhon01xx ez';

    let cookies = document.cookie;

    let actual_url = window.location.href;

    let next_lesson_button = document.getElementsByClassName("bootcamp-next-button")[0];

    if (next_lesson_button){
        let next_lesson_link = next_lesson_button.getAttribute('href');
        let parts = actual_url.split('/');
        let lessonName = parts[4];
        let lessonId = parts[6];
        console.log(`[DEBUG] Lesson_Name: ${lessonName} Lesson_Id: ${lessonId} `);

        fetch(`https://cursos.alura.com.br/course/${lessonName}/task/${lessonId}/mark-video`, {
          method: 'POST',
          credentials: 'include',
          headers: {
             'Content-Type': 'application/json',
             'Cookie': cookies
          }}).then(data => {
          console.log("[DEBUG] Lesson Done!")
          })

        next_lesson_button.click();

    } else {
        alert("Next Lesson Button not found :( are u sure that u are on the correct page?");
    }
})();