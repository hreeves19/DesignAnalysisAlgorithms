class ActivitySelection {
    constructor(resources, activities) {
        this.resources = resources;
        this.activities = activities;
        this.solutions = new Array();
    }

    findDiff(activityOne, activityTwo) {
        if(activityTwo.startTime >= activityTwo.endTime) {
            return activityTwo.endTime - activityOne.startTime;
        } else {
            return false;
        }
    }

    actvitySelectionAlgorithm() {
        let solPosition = 0;
        let max = 0;

        // Looping through all activities
        for(let i = 0; i < this.activities.length; i++) {
            this.solutions[i] = [] // Allocating space
            this.solutions[i].push(this.activities[i]); // Initialize first activity
            max += this.solutions[i][solPosition].value;
            for(let x = 0; x < this.activities.length; x++) {
                if(x === i) {
                    continue; // Skip
                } else if(this.solutions[i][solPosition].endTime <= this.activities[x].startTime) {
                    this.solutions[i].push(this.activities[x]);
                    max += this.solutions[i][solPosition + 1].value;
                    solPosition++;
                } else {

                }
            }
            this.solutions[i].push(max);
            max = 0;
            solPosition = 0;
        }

        //console.log(this.solutions);
        //this.printSolutions();
        console.log(this.findSolutionValue());
    }

    printSolutions() {
        for(let i = 0; i < this.solutions.length; i++) {
            for(let x = 0; x < this.solutions[i].length - 1; x++) {
                console.log(this.solutions[i][x].getActivity());
            }
        }
    }

    findSolutionValue() {
        let max = -1;
        let solPosition = 0;

        for(let i = 0; i < this.solutions.length; i++) {
            if(max < this.solutions[i][this.solutions[i].length - 1]) {
                max = this.solutions[i][this.solutions[i].length - 1];
                solPosition = i;
            }
        }

        return this.solutions[solPosition];
    }
}

module.exports = ActivitySelection;