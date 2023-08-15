/**
 * Create a new element of the Training File
 * @typedef {object} TrainingElementProps
 * @property {string} name
 * @property {string} [description]
 * @property {number} fortressID
 * @property {'Complete' | 'Incomplete' | 'Completed w/ Difficulty' | 'Completed w/o difficulty' | 'Exceeded Standard'} [assessmentStatus]
 * @property {'Participated' | 'Not Participated' | 'Cancelled' | 'Cancelled by CC/Sqn'} [participationStatus]
 * @property {string} fortressID
 * @property {string} trainingProgram
 */

export class LocalTraining {
    /**
     * Training Element Configuration
     * @param {TrainingElementProps[]} trainingElements 
     * 
     */
    constructor(trainingElements) {
        for (let i = 0; i < trainingElements.length; i++) {
            if (this[trainingElements[i].trainingProgram] === undefined) {
                this[trainingElements[i].trainingProgram] = {name: trainingElements[i].trainingProgram}
            }
            this[trainingElements[i].trainingProgram][trainingElements[i].fortressID] = trainingElements[i]        }
    }
}