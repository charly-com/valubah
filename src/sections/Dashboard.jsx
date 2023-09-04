import Sidebar from "../components/Sidebar"
import DashboardNav from "../components/DashboardNav"
import Main from "../components/Main"

const Dashboard = () => {
  return (
    <div className="flex w-screen box-border h-auto">
        <div className="w-[20vw] h-screen">
            <Sidebar />
        </div>
         

        <div className="w-[80vw] min-h-screen">
            <DashboardNav />
            <Main />
        </div>
        
    </div>
  )
}

export default Dashboard