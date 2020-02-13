const medals = [
  {
    name: 'Beginner zombi!',
    description: 'Haz contestado tu primera pregunta en zombiCody! No te detengas!',
    photoUrl: 'https://res.cloudinary.com/evilvic/image/upload/v1581611376/zombiCody/medals/beginner-zombi_ifejei.png',
    value: 1
  },
  {
    name: 'Give me 5!',
    description: 'Llevas 5 preguntas contestadas! Sigue así!',
    photoUrl: 'https://res.cloudinary.com/evilvic/image/upload/v1581611381/zombiCody/medals/give-me-5_afonyc.png',
    value: 5
  },
  {
    name: 'Give me 10!',
    description: 'Puedes contra todo problema! Haz contestado 10 preguntas!',
    photoUrl: 'https://res.cloudinary.com/evilvic/image/upload/v1581611386/zombiCody/medals/give-me-10_tmgmqi.png',
    value: 10
  },
  {
    name: 'Super Zombi!',
    description: '25 preguntas?! El estudio es lo tuyo!',
    photoUrl: 'https://res.cloudinary.com/evilvic/image/upload/v1581611394/zombiCody/medals/super-zombi_xn1iay.png',
    value: 25
  },
  {
    name: 'Unstoppable Zombi!',
    description: 'Contestate 50 preguntas correctamente! Eres imparable!',
    photoUrl: 'https://res.cloudinary.com/evilvic/image/upload/v1581611397/zombiCody/medals/unstoppable-zombi_josq7r.png',
    value: 50
  },
  {
    name: 'Brain eater!',
    description: 'Lo puedes todo y eres lo mejor! Haz contestado 100 preguntas!',
    photoUrl: 'https://res.cloudinary.com/evilvic/image/upload/v1581611402/zombiCody/medals/brain-eater_cbabgi.png',
    value: 100
  }
]
const kangorooQuestions = []

const mongoose = require('mongoose')
const Course = require('../models/Course')
const Question = require('../models/Question')


const kangoroo = {
    title: 'Kangoroo',
    image_URL: '',
    description: 'Math for fun and glory'
}

mongoose
  .connect('mongodb://localhost/zombicody', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(async x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    //await Course.create(kangoroo).then(res => console.log('DB Ready...'))
    //await Question.create(kangorooQuestions).then(res => console.log('DB Ready...'))
    const course = await Course.findById('5e41c741a6381e73a4aae92e')
    const questions = await Question.find()
    
    let questionsIdArr = []
    questions.forEach(question => {
        questionsIdArr.push(question._id)
    })

    console.log(questionsIdArr)

    course.questions = questionsIdArr

    course.save()


  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });