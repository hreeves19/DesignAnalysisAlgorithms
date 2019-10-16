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
        // Looping through all activities
        for(let i = 1; i < this.activities.length; i++) {

        }
    }
}

module.exports = ActivitySelection;