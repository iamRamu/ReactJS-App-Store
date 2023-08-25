// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItemDetails, onChangeActiveTabId, isActive} = props
  const {tabId, displayText} = tabItemDetails
  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''
  const onClickButton = () => {
    onChangeActiveTabId(tabId)
  }
  return (
    <li className="tabListItem" key={tabId}>
      <button
        type="button"
        className={`custom-button ${activeTabBtnClassName}`}
        key={tabId}
        onClick={onClickButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
