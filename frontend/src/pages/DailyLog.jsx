//component
import PageLayout from "../UI/PageLayout"
import Card from "../UI/Card"
//style
import "./DailyLog.scss"

const DailyLog = () => {
  return (
    <PageLayout>
        <Card>
          <div className="greeting-container">
            <div className="title">
                Hi Korn
            </div>
          </div>
        </Card>
    </PageLayout>
  )
}

export default DailyLog