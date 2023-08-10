export const personalInformation = {
    1862211: {
        last_name: "Wong",
        first_name: "Arnold",
        preferred_language: "EN",
    },
    1876008: {
        last_name: "Yang",
        first_name: "Chris",
        preferred_language: "FR",
    },
    1869177: {
        last_name: "Willoughby",
        first_name: "Caleb",
        preferred_language: "EN",
    }
}

export const cadetInformation = {
    1869177: {
        rank: "",
        program: "",
    },
}

export const membershipHistory = {
    1869177: {
        corps_squadron: "",
        from: "",
        to: "",
    },
}

export const appointmentHistory = {
    1869177: {
        appointment: "",
        from: "",
        to: "",
    },
}

export const groupHistory = {
    1869177: {
        group: "",
        from: "",
        to: "",
        type: "",
    },
}

export const awardsHistory = {
    1869177: {
        award: "",
        date: "",
        type: "",
    },
}

export const qualifications = {
    1869177: {
        qualification: "",
        date: "",
        type: "",
    },
}

class LocalTrainingArmy {
    constructor(element, listOfAcquiredElm) {
        for (item in listOfAcquiredElm) {
            this.listOfQualifications[item] = true
        }
    }
    listOfQualifications = {
        
    }
}


export const localTrainingArmy = {
    army: {
        1869177: {
            qualification: "",
    }
}