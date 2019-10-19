// Importing libraries
const Activity = require('./Activity.js');
const MergeSort = require('./MergeSort');
const ActivitySelection = require('./ActivitySelection');

// Sorting algorithm to use: https://www.geeksforgeeks.org/merge-sort/ merge sort

function main() {
    const activities = initializeActivities();
    const resources = initializeResources(activities.length);
    let algorithm = new ActivitySelection(resources, activities);
    algorithm.actvitySelectionAlgorithm();
    //algorithm.mergeSort(0, activities.length - 1);
    //console.log(algorithm);
}

function initializeActivities() {
    return [
        new Activity(1, 4, 1),
        new Activity(3, 5, 2),
        new Activity(0, 6, 3),
        new Activity(5, 7, 4),
        new Activity(3, 9, 5),
        new Activity(5, 9, 6),
        new Activity(6, 10, 7),
        new Activity(8, 11, 8),
        new Activity(8, 12, 9),
        new Activity(2, 14, 10),
        new Activity(12, 16, 11)
    ]
}

function initializeResources(length) {
    return Array.from(Array(length).keys());
}

main();