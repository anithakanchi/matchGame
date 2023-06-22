import './index.css'

const TabItem = props => {
  const {eachTab, updatedId, onChangeTab} = props
  const {tabId, displayText} = eachTab
  const changeTab = () => {
    onChangeTab(tabId)
  }
  const activeButton = updatedId === tabId ? 'active-tab-id' : ''

  return (
    <li>
      <button
        className={`button ${activeButton}`}
        type="button"
        onClick={changeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
