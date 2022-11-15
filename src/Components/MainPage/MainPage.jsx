import { Link } from "react-router-dom"

const MainPage = () => {
  const schedule = '/schedule'
  return (
    <>
      <Link to={schedule}>schedule</Link>
    </>
  )
};

export default MainPage;