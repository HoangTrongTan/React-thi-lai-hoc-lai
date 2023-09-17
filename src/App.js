import "./Globalstyle/Globalstyle.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./Compoments/Layout/DefaultLayout";
import routes from "./Routes";
// anh em chú ý nếu đọc được lỗi  react-dom.development.js:86 Warning: validateDOMNesting(...): <a> cannot appear as a descendant of <a>. 
// thì đọc ở <MenuItem /> nhé, tôi ghi lỗi ở đó mặc dù lỗi nhỏ thôi chỉ ở phần menu thôi nhưng nếu có lỗi gì xảy ra thì anh em 
//  có thể đọc ở <MenuItem /> để sửa nhé.
function App() {
  return (
    <Router>
      <Routes>
        {
          routes.map( (obj,index) => {
            let Comp = obj.compoment;
            return (
              <Route
                key={index}
                path={obj.path}
                element={
                  <DefaultLayout>
                    {Comp && <Comp />}
                  </DefaultLayout>
                }
              ></Route>
            )
          } )
        }
      </Routes>
    </Router>
  );
}

export default App;
