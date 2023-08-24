import './index.css'

const TabItem = props => {
  const {tabDetails, activeTabId, clickActiveTab} = props
  const {tabId, displayText} = tabDetails
  const tabColor = activeTabId === tabId ? 'active-tab' : ''

  const onClickTab = () => {
    clickActiveTab(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-btn ${tabColor}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
