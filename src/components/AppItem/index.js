// Write your code here
import './index.css'

const AppItem = props => {
  const {appListDetails} = props
  const {id, appName, imageUrl} = appListDetails

  return (
    <li className="listContainer" key={id}>
      <img src={imageUrl} className="img-size" alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
