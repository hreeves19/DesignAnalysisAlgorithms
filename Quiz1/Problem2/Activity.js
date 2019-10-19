class Activity {

    constructor(startTime, endTime, value) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.value = value;
    }

    getActivity() {
        return {startTime: this.startTime, endTime: this.endTime, value: this.value};
    }

    getTimeToCompleteEvent() {
        return this.endTime - this.startTime;
    }
};

module.exports = Activity;