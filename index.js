
function start(){
    let firstAnswer  = window.prompt('Do you head LEFT, or RIGHT?')
    if(firstAnswer === 'left'){
       goLeft()
    } else if(firstAnswer === 'right') {
        goRight()
    }
}
// left
function goLeft(){
    let secondAnswer = window.prompt(`You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you FOLLOW it, or CONTINUE on your path?`)
    if(secondAnswer === 'follow'){
        follow()
    } else if(secondAnswer === 'continue'){
        continueOn()
    }
    if(secondAnswer === 'back'){
        start()
    }
}
// Right
function goRight(){
    let secondAnswer = window.prompt(`You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure BEHIND THE DRAGON. Another path would lead you AWAY FROM THE DRAGON all together. Which do you take?`)
    if(secondAnswer === 'behind the dragon'){
        pastTheDragon()
    } else if(secondAnswer === 'away from the dragon'){
        awayFromTheDragon()
    }
    if(secondAnswer === 'back'){
        start()
    }
}
// Follow
function follow(){
    let thirdAnswer = window.prompt(`You follow the cat to a colony of cats, snuggled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you STAYing, but you wonder if you should SPREAD THE WORD to this magical safe haven.`)
    if(thirdAnswer === 'stay'){
        window.alert(`You live happily amongst the cats for the rest of your days.`)
        start()
    } else if(thirdAnswer === 'spread the word'){
        window.alert(`After leaving the cat colony, you are never able to find it again. Without proof, no one believes your story, which passes into legend nonetheless.`)
        start()
    }
    if(thirdAnswer === 'back'){
        goLeft()
    }
}
// Continue
function continueOn(){
    let thirdAnswer = window.prompt(`You come across a chamber that extends upward to a shining light above. There is a long, winding STAIRCASE and a much quicker, but rickety-looking, LADDER that lead up towards the light. Which do you take?`)
    if(thirdAnswer === 'ladder'){
        window.alert(`After ascending a few feet up the ladder, one of its rungs snaps and you fall comedically through each of the rungs below. Sheepish, you return home.`)
        start()
    } else if(thirdAnswer === 'staircase'){
        window.alert(`After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.`)
        start()
    }
    if(thirdAnswer === 'back'){
        goLeft()
    }    
}
// Past the dragon
function pastTheDragon(){
    let thirdAnswer = window.prompt(`The dragon awakes and sits upright. You only have a moment to respond, to STAY or to RUN:`)
    if(thirdAnswer === 'stay'){
        window.alert(`You and the dragon have an uplifting conversation about local politics and become lifelong friends.`)
        start()
    } else if(thirdAnswer === 'run'){
        window.alert(`Quickly, you run back to the cave's entrance. Sheepish, you return home.`)
        start()
    }
    if(thirdAnswer === 'back'){
        goRight()
    }
}
// Away from the dragon
function awayFromTheDragon(){
    let thirdAnswer = window.prompt(`After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either DRAW IT or PICK IT. Which do you do?`)
    if(thirdAnswer === 'draw it'){
        window.alert(`You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time discover joy in sharing the drawing with your friends and family, recounting the story of your days as a sorcerer with the aide of the sketch.`)
        start()
    } else if(thirdAnswer === 'pick it'){
        window.alert(`You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.`)
        start()
    }
    if(thirdAnswer === 'back'){
        goRight()
    }   
     
}
start()


// let firstAnswer  = window.prompt('Do you head left, or right?')
// if(firstAnswer === 'left'){
//     let secondAnswer = window.prompt(`You come across a stray cat. 
// It scampers off down a small hole, just large enough for you to crawl through. 
// Do you follow it, or continue on your path?`)

// } else if(firstAnswer === 'right') {
//     let secondAnswer = window.prompt(`You come across a snoring dragon. 
// On the other side of him, you see a shiny chest of treasure. Another path would 
// lead you away from the dragon all together. Which do you take?`)

// }
