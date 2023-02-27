import "./PageLayout.scss"

const PageLayout = (props) => {
  return (
    <div className="page-layout">{props.children}</div>
  )
}

export default PageLayout