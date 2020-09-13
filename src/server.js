const dev = 'http://localhost:5000'
const prod = 'https://cistar-backend.herokuapp.com'

export default process.env.NODE_ENV === 'development' ? prod : prod