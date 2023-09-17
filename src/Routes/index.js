import DK_Hoc_Lai from "../Pages/DK_Hoc_Lai";
import DK_Thi_Lai from "../Pages/DK_Thi_Lai";
const routes = [
    {
        path:'/', compoment:null
    },
    {
        path:'/thilai', compoment:DK_Thi_Lai
    },
    {
        path:"/hoclai", compoment:DK_Hoc_Lai,
    }
]
export default routes;