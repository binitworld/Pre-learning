
const s = 'electronic item';
switch (s) {
    case 'electronic item':
        console.log("electronic item is 30 types");
        break;
    case 'fan':
    case 'bulb':
        console.log('Fan and bulb are more types of electric item');
        break;
    default:
        console.log(`Sorry, we are out of ${s}`);
}

// _______________________________________________________________________________________
const day = "Monday";

switch (day) {
    case "Monday":
        console.log("It's Monday!");
        break;
    case "Tuesday":
        console.log("It's Tuesday!");
        break;
    case "Wednesday":
        console.log("It's Wednesday!");
        break;
    case "Thursday":
        console.log("It's Thursday!");
        break;
    case "Friday":
        console.log("It's Friday!");
        break;
    default:
        console.log("It's the weekend!");
}
