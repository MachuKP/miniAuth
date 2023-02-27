import PageLayout from "../UI/PageLayout"
import Card from "../UI/Card"
import "./Greeting.scss"

const Greeting = (props) => {
  return (
    <PageLayout>
        <Card>
          <div className="greeting-container">
            <div className="title">
                Greeting Korn
            </div>
            <div className="btn-container">
                <button className="btn-primary" onClick={props.handleLogout}>Logout</button>
            </div>
          </div>
        </Card>
    </PageLayout>
  )
}

export default Greeting