const input1 = [
    {startTime: 1, endTime: 3},
    {startTime: 2, endTime: 5},
    {startTime: 4, endTime: 6},
    {startTime: 7, endTime: 9},
    {startTime: 8, endTime: 12}
];

console.log(scheduleLectures(input1));

function scheduleLectures(activities) {
    let lectureHalls = [];
    let hallPos = 0;
    let index = 0;

    for(let i = 0; i < activities.length; i++) {
        // Put first activity in lecture hall
        if(i === 0) {
            lectureHalls[hallPos] = new Array();
            lectureHalls[hallPos].push(activities[i]);
        } else if(lectureHalls[hallPos][index].endTime <= activities[i].startTime) {
            // Put in this lecture hall
            lectureHalls[hallPos].push(activities[i]);
            index++;
        } else {
            // Create new lecture hall and insert there
            lectureHalls[hallPos + 1] = new Array();
            hallPos++;
            index = 0;
            lectureHalls[hallPos].push(activities[i]);
        }
    }

    return lectureHalls;
}