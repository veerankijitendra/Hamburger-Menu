import Header from '../Header'

import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-con">
      <img
        alt="not found"
        className="not-found-image"
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      />
      <h1>Lost Your Way?</h1>
      <p>
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </>
)

export default NotFound
