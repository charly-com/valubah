import Sidebar from "../components/Sidebar"
import DashboardNav from "../components/DashboardNav"

const Dashboard = () => {
  return (
    <div className="flex w-screen box-border h-auto">
        <div className="w-[20vw] h-screen">
            <Sidebar />
        </div>
         

        <div className="w-[80vw] min-h-screen">
            <DashboardNav />
        </div>
        
    </div>
  )
}

export default Dashboard