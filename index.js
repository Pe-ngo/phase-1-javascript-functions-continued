// code your solution here
function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`) 
}
console.log(saturdayFun())

const mondayWork = function(activity = "go to the office"){
    return(`This Monday, I will ${activity}.`)
}
console.log(mondayWork())

const wrapAdjective = function(active = '*') {
    return function(soft = "a hard worker"){
        return(`You are ${active}${soft}${active}!`)
    }
    
}
console.log(wrapAdjective()())