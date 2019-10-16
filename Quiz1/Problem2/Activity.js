class Activity {

    constructor(startTime, endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
    }

    getActivity() {
        return {startTime: this.startTime, endTime: this.endTime};
    }

    getTimeToCompleteEvent() {
        return this.endTime - this.startTime;
    }
};

module.exports = Activity;