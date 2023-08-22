import Header from '../Header'
import './index.css'

const notFoundImage =
  'https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-container">
      <div className="not-found-image-container">
        <img className="not-found-image" src={notFoundImage} alt="not found" />
      </div>
      <hi className="not-found-heading">Page Not Found</hi>
      <p className="not-found-paragraph">We are Sorry! page not found</p>
    </div>
  </>
)

export default NotFound
