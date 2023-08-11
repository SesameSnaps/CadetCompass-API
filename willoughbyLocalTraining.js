import { LocalTraining } from "./dataObjects.js";

const test = [
    
    {
        name: '',
        fortressID: '',
        assessmentStatus: 'Complete',
        trainingProgram: 'Master Cadet',
    },
      
    ]
const willoughbyLocalTraining = new LocalTraining([
    {
        name: '(PHASE) - Promoting Healthy and Safe Experiences',
        fortressID: '100',
        trainingProgram: 'Green Star',
        participationStatus: 'Participated'
      },
      {
        name: 'Leadership',
        fortressID: '103',
        participationStatus: 'Participated',
        trainingProgram: 'Green Star',
      },
      {
        name: 'Air Rifle Marksmanship',
        fortressID: '106',
        participationStatus: 'Participated',
        trainingProgram: 'Green Star',
      },
      {
        name: 'General Cadet Knowledge',
        fortressID: '107',
        participationStatus: 'Participated',
        trainingProgram: 'Green Star',
      },    
      {
          name: 'Drill and Ceremonial',
          fortressID: '108',
          participationStatus: 'Participated',
          trainingProgram: 'Green Star',
      },    
      {
          name: 'Field Training',
          fortressID: '121',
          participationStatus: 'Participated',
          trainingProgram: 'Green Star',
      },    
      {
          name: 'Navigation',
          fortressID: '122',
          participationStatus: 'Participated',
          trainingProgram: 'Green Star',
      },    
      {
          name: 'Trekking',
          fortressID: '123',
          participationStatus: 'Participated',
          trainingProgram: 'Green Star',
      },    
      {
          name: 'Citizenship',
          fortressID: 'X01',
          participationStatus: 'Participated',
          trainingProgram: 'Green Star',
      },    
      {
          name: 'Community Service',
          fortressID: 'X02',
          participationStatus: 'Participated',
          trainingProgram: 'Green Star',
      },    
      {
          name: 'Personal Fitness and Healthy Living',
          fortressID: 'X04',
          participationStatus: 'Participated',
          trainingProgram: 'Green Star',
      },    
      {
          name: 'Physical Activities',
          fortressID: 'X05',
          participationStatus: 'Participated',
          trainingProgram: 'Green Star',
      },    
      {
          name: 'CAF Familiarization',
          fortressID: 'X20',
          participationStatus: 'Participated',
          trainingProgram: 'Green Star',
      },


      {
        name: 'Leadership',
        fortressID: '203',
        participationStatus: 'Participated',
        trainingProgram: 'Red Star',
      },
      {
        name: 'Air Rifle Marksmanship',
        fortressID: '206',
        participationStatus: 'Participated',
        trainingProgram: 'Red Star',
      },
      {
        name: 'General Cadet Knowledge',
        fortressID: '207',
        participationStatus: 'Participated',
        trainingProgram: 'Red Star',
      },    
      {
          name: 'Drill and Ceremonial',
          fortressID: '208',
          participationStatus: 'Participated',
          trainingProgram: 'Red Star',
      },    
      {
          name: 'Field Training',
          fortressID: '221',
          participationStatus: 'Participated',
          trainingProgram: 'Red Star',
      },    
      {
          name: 'Navigation',
          fortressID: '222',
          participationStatus: 'Participated',
          trainingProgram: 'Red Star',
      },    
      {
          name: 'Trekking',
          fortressID: '223',
          participationStatus: 'Participated',
          trainingProgram: 'Red Star',
      },    
      {
          name: 'Citizenship',
          fortressID: 'X01',
          participationStatus: 'Participated',
          trainingProgram: 'Red Star',
      },    
      {
          name: 'Community Service',
          fortressID: 'X02',
          participationStatus: 'Participated',
          trainingProgram: 'Red Star',
      },    
      {
          name: 'Personal Fitness and Healthy Living',
          fortressID: 'X04',
          participationStatus: 'Participated',
          trainingProgram: 'Red Star',
      },    
      {
          name: 'Physical Activities',
          fortressID: 'X05',
          participationStatus: 'Participated',
          trainingProgram: 'Red Star',
      },    
      {
          name: 'CAF Familiarization',
          fortressID: 'X20',
          participationStatus: 'Participated',
          trainingProgram: 'Red Star',
      },    
// Gold Star
      {
        name: 'Leadership',
        fortressID: '303',
        trainingProgram: 'Silver Star',
        assessmentStatus: "Completed w/o difficulty"
      },
      {
        name: 'Air Rifle Marksmanship',
        fortressID: '306',
        assessmentStatus: 'Complete',
        trainingProgram: 'Silver Star',
      },
      {
        name: 'General Cadet Knowledge',
        fortressID: '307',
        assessmentStatus: 'Complete',
        trainingProgram: 'Silver Star',
      },    
      {
          name: 'Drill and Ceremonial',
          fortressID: '308',
          participationStatus: 'Cancelled by CC/Sqn',
          trainingProgram: 'Silver Star',
      },    
      {
        name: 'Instructional Techniques',
        fortressID: '309',
        assessmentStatus: "Completed w/o difficulty",
        trainingProgram: 'Silver Star',
      },  
      {
          name: 'Field Training',
          fortressID: '321',
          assessmentStatus: 'Complete',
          trainingProgram: 'Silver Star',
      },    
      {
          name: 'Navigation',
          fortressID: '322',
          assessmentStatus: 'Exceeded Standard',
          trainingProgram: 'Silver Star',
      },        
      {
          name: 'Wilderness Survival',
          fortressID: '324',
          assessmentStatus: 'Exceeded Standard',
          trainingProgram: 'Silver Star',
      },    
      {
          name: 'Outdoor Leadership',
          fortressID: '325',
          assessmentStatus: 'Complete',
          trainingProgram: 'Silver Star',
      },    
      {
          name: 'Expedition',
          fortressID: '326',
          assessmentStatus: 'Completed w/o difficulty',
          trainingProgram: 'Silver Star',
      },
      
      {
          name: 'Citizenship',
          fortressID: 'X01',
          assessmentStatus: 'Complete',
          trainingProgram: 'Silver Star',
      },    
      {
          name: 'Community Service',
          fortressID: 'X02',
          assessmentStatus: 'Complete',
          trainingProgram: 'Silver Star',
      },    
      {
          name: 'Personal Fitness and Healthy Living',
          fortressID: 'X04',
          assessmentStatus: 'Completed w/o difficulty',
          trainingProgram: 'Silver Star',
      },    
      {
          name: 'Physical Activities',
          fortressID: 'X05',
          assessmentStatus: 'Complete',
          trainingProgram: 'Silver Star',
          
      },    
      {
          name: 'CAF Familiarization',
          fortressID: 'X20',
          assessmentStatus: 'Complete',
          trainingProgram: 'Silver Star',
        
      },    

      // Gold Star
      {
        name: '(PHASE) - Promoting Healthy and Safe Experiences',
        fortressID: '400',
        trainingProgram: 'Gold Star',
        participationStatus: 'Participated'
      },
      {
        name: 'Leadership',
        fortressID: '403',
        trainingProgram: 'Gold Star',
        assessmentStatus: "Exceeded Standard"
      },
      {
        name: 'Air Rifle Marksmanship',
        fortressID: '406',
        assessmentStatus: 'Complete',
        trainingProgram: 'Gold Star',
      },
      {
        name: 'General Cadet Knowledge',
        fortressID: '407',
        assessmentStatus: 'Complete',
        trainingProgram: 'Gold Star',
      },    
      {
          name: 'Drill and Ceremonial',
          fortressID: '408',
          assessmentStatus: 'Exceeded Standard',
          trainingProgram: 'Gold Star',
      },    
      {
        name: 'Instructional Techniques',
        fortressID: '409',
        assessmentStatus: "Exceeded Standard",
        trainingProgram: 'Gold Star',
      },  
      {
          name: 'Navigation',
          fortressID: '422',
          assessmentStatus: 'Exceeded Standard',
          trainingProgram: 'Gold Star',
      },        
      {
          name: 'Wilderness Survival',
          fortressID: '424',
          assessmentStatus: 'Exceeded Standard',
          trainingProgram: 'Gold Star',
      },    
      {
          name: 'Outdoor Leadership',
          fortressID: '425',
          assessmentStatus: 'Complete',
          trainingProgram: 'Gold Star',
      },    
      {
          name: 'Expedition',
          fortressID: '426',
          assessmentStatus: 'Completed w/ Difficulty',
          trainingProgram: 'Gold Star',
      },
      
      {
          name: 'Citizenship',
          fortressID: 'X01',
          assessmentStatus: 'Complete',
          trainingProgram: 'Gold Star',
      },    
      {
          name: 'Community Service',
          fortressID: 'X02',
          assessmentStatus: 'Complete',
          trainingProgram: 'Gold Star',
      },    
      {
          name: 'Personal Fitness and Healthy Living',
          fortressID: 'X04',
          assessmentStatus: 'Exceeded Standard',
          trainingProgram: 'Gold Star',
      },    
      {
          name: 'Physical Activities',
          fortressID: 'X05',
          assessmentStatus: 'Complete',
          trainingProgram: 'Gold Star',
          
      },    
      {
          name: 'CAF Familiarization',
          fortressID: 'X20',
          assessmentStatus: 'Complete',
          trainingProgram: 'Gold Star',
        
      },          

      // Master Cadet
    
      {
        name: 'Community Service',
        fortressID: '502',
        assessmentStatus: 'Incomplete',
        trainingProgram: 'Master Cadet',
    },    
    {
        name: 'Leadership',
        fortressID: '503',
        assessmentStatus: 'Completed w/o difficulty',
        trainingProgram: 'Master Cadet',
    },    
    {
        name: 'Personal Fitness and Healthy Living',
        fortressID: '504',
        assessmentStatus: 'Incomplete',
        trainingProgram: 'Master Cadet',
    },    
    {
        name: 'General Cadet Knowledge',
        fortressID: '507',
        assessmentStatus: 'Incomplete',
        trainingProgram: 'Master Cadet',
    },    
    {
        name: 'Instructional Techniques',
        fortressID: '509',
        assessmentStatus: 'Completed w/o difficulty',
        trainingProgram: 'Master Cadet',
    },    
    {
        name: 'Personal Development (Workshops)',
        fortressID: '513',
        assessmentStatus: 'Incomplete',
        trainingProgram: 'Master Cadet',
    },    
    {
        name: 'Personal Development (Individual Learning)',
        fortressID: '514',
        assessmentStatus: 'Incomplete',
        trainingProgram: 'Master Cadet',
    },
])


export default willoughbyLocalTraining