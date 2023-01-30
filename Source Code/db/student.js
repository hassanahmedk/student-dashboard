import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
    _id:{type:String,  unique:true},   //SID
    FirstName:{type:String,  },
    LastName:{type:String,  },
    Password:{type:String,   min:6},

    //University Information
    CollegeName:{type:String,  },
    ClassName:{type:String,  min:2},
    Rank:{type:String,  },
    SemesterNo:{type:Number,  },
    GPA: Number,
    CGPA: Array,
    Subject:{type:Array, max:7,min:4},
    CreditHour: Number,
    Attendance:Array,
    PreviousSubject:{type:Array},

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

    //Father Information
    FatherName:{type:String,  },
    FatherCNIC:{type:Number,  min:14,max:14},
    FatherContentNo:{type:String,  min:11,max:11},
    FatherEmail:{type:String,  lowercase:true},

    //Status
    InvioceStatus:Boolean,
    FeedbackStatus:Boolean
});

const studentModel = mongoose.model("Student", StudentSchema);
  
export default studentModel;