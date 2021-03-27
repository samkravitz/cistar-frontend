//"homepage": "http://www.samkravitz.github.io/cistar-frontend",
const dev = 'http://localhost:5000'
const prod = 'https://cistar-backend.herokuapp.com'

export default process.env.NODE_ENV === 'development' ? dev : prod