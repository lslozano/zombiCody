const { model, Schema } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema (
  {
    username: {
      type: String, 
      required: true
    },
    birthday: {
      type: Date,
      required: true
    },
    photoUrl: {
      type: String,
      default: 'https://res.cloudinary.com/evilvic/image/upload/v1581298347/zombiCody/profile/zombi_qql1bo.png'
    }, 
    email: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['student', 'parent', 'teacher'],
      default: 'student'
    },
    status: {
      type: String,
      enum: ['pending', 'active'],
      default: 'pending'
    },
    confirmationCode: {
      type: String,
      unique:true
    },
    correctQuestions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Question'
      }
    ],
    incorrectQuestions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Question'
      }
    ],
    percentage: {
      type: Number,
      default: 0
    },
    medals: [
      {
        type:Schema.Types.ObjectId,
        ref: 'Medal'
      }
    ],
    classCode: {
      type: String,
      default: ''
    },
    parentCode: {
      type: String,
      default: ''
    },
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Course'
      }
    ]
  },
  {
    timestamps: true,
    versionKey:false
  }
)

userSchema.plugin(PLM, { usernameField: 'username' })
module.exports = model('User', userSchema)