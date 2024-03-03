// Class:: 24 switch statement

const day=new Date()

const today=day.getDay()

switch(today){
    case 0:
        console.log("Sun")
        break;
    case 1:
        console.log("Mon")
        break;
    case 2:
        console.log("Tue")
        break;
    case 3:
        console.log("Wed")
        break;
    case 4:
        console.log("Thu")
        break;
    case 5:
        console.log("Fri")
        break;
    case 6:
        console.log("Sat")
        break;
    default:
        console.log("Invalid")
}