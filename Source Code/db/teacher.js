import mongoose from 'mongoose';

const TeacherSchema = new mongoose.Schema({
    _id:{type:String,  unique:true},   //SID
    FirstName:{type:String,  },
    LastName:{type:String,  },
    Password:{type:String,   min:6},

    //University Information
    CollegeName:{type:String,  },
    ClassName:{type:String,  min:2},
    Rank:{type:String,  },
    Subject:{type:Array,require:true,min:1},
    Publication:Array,
    Experience:Array,
    Conference:Array,
    Award:Array,
    
    //Personal Inforamtion
    CNIC:{type:Number,  min:14, max:14},
    Email:{type:String,  lowercase:true},
    PersonalContactNo:{type:String,  min:11,max:11},
    EmergencyContactNo:{type:String,  min:11,max:11},
    Gender:{type:String,  min:4,max:6},
    DateofBirth:{type:Date, },
    Domocile:{type:String,  },
    Nationality:{type:String,  },
    Religion:{type:String,  },
    PresentAddress:{type:String,  },
    PermanentAddress:{type:String,  },
    Covid19Vaccinated:{type:Boolean,  },
    MartialStatus:Boolean,
    BloodGroup:{type:Number,  min:2,max:2},
});

const teacherModel = mongoose.model("Teacher", TeacherSchema);
  
export default teacherModel;