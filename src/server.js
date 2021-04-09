//"homepage": "http://www.samkravitz.github.io/cistar-frontend"
//"homepage": "https://engineering.purdue.edu/CISTAR/frontend-test"
const dev = 'http://localhost:5000'
const prod = 'https://cistar-backend.herokuapp.com'

export default process.env.NODE_ENV === 'development' ? dev : prod