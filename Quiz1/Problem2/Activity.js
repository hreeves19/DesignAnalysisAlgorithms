class Activity {

    constructor(startTime, endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
    }

    getActivity() {
        return {startTime: this.startTime, endTime: this.endTime};
    }
};

module.exports = Activity;