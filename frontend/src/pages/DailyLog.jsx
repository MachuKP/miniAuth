import PageLayout from "../UI/PageLayout"
import Card from "../UI/Card"
import "./DailyLog.scss"

const DailyLog = (props) => {
  return (
    <PageLayout>
        <Card>
          <div className="greeting-container">
            <div className="title">
                Hi Korn
            </div>
            <div className="btn-container">
                <button className="btn-primary" onClick={props.handleLogout}>Logout</button>
            </div>
          </div>
        </Card>
    </PageLayout>
  )
}

export default DailyLog