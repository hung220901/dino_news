import React, {  useCallback, useEffect, useReducer } from 'react';
import Footer from './components/Footer'
import Header from './components/Header';
import TopNews from './components/HomePage/TopNews';
import LatestNews from './components/HomePage/LatestNews';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppReducer from './reducers/AppReducers';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import NewsDetail from './components/NewsDetail';
import License from './components/License';
import AppContext from './components/AppContext'
import NewsList from './components/HomePage/NewsList';
import DashBoard from './components/Admin/DashBoard'
import axios from 'axios';
import NewsAdmin from './components/Admin/NewsAdmin';
import UserAdmin from './components/Admin/UserAdmin';
import CategoryAdmin from './components/Admin/CategoryAdmin';
import EditNews from './components/Admin/NewsManage/EditNews';
import DeleteNews from './components/Admin/NewsManage/DeleteNews';
import CreateNews from './components/Admin/NewsManage/CreateNews';

function App() {
  const initialState = {user: null, posts: []}
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const checkCurrentUser = useCallback(async ()=> {
    try{
      const token = localStorage.getItem("token");
      const option = {
        method: "get",
        url: "/api/v1/auth",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios(option);
      if(response.data.data.user){
        const {userName} = response.data.data.user;
        dispatch({ type: "CURRENT_USER", payload: {userName} });
      }
    }catch(error){
      console.log(error);
    }
  }, [dispatch]);
  useEffect(() => {
  
    checkCurrentUser();
  }, [checkCurrentUser]);
  
  return (
    <div>
    <Router>
      <AppContext.Provider value={{ state, dispatch}} >
      <Switch>
        <Route exact path="/" >
          <Header/>
          <TopNews/>
          <LatestNews/>
          <NewsList/>
          <Footer/>
        </Route>
        <Route exact path="/login" >
          <Login/>
        </Route>
        <Route exact path="/register" >
          <Register/>
        </Route>
        <Route exact path="/news-detail/:id" >
          <NewsDetail/>
        </Route>
        <Route exact path="/license" >
          <Header />
          <License/>
          <Footer />
        </Route>
        <Route exact path="/admin/dashboard"  >
          <DashBoard  />
          <div>
          <h1 style={{textAlign:'center',transform:'translate(-50%,-50%)', top:'20%',left:'50%',position:'absolute'}}>Welcome to admin page !</h1>
          </div>
        </Route>
        <Route exact path="/admin/news"  >
          <DashBoard  />
          <NewsAdmin  />
        </Route>
        <Route exact path="/admin/news/edit/:id">
          <DashBoard  />
          <EditNews />
        </Route>
        <Route exact path="/admin/news/create">
          <DashBoard  />
          <CreateNews />
        </Route>
        <Route exact path="/admin/news/delete/:id">
          <DashBoard  />
          <DeleteNews />
        </Route>

        <Route exact path="/admin/user"  >
         <DashBoard  />
          <UserAdmin  />
        </Route>
        <Route exact path="/admin/category"  >
          <DashBoard  />
          <CategoryAdmin  />
        </Route>




        <Route exact path="*" >
          <div>
            <h1 style={{textAlign:'center',transform:'translate(-50%,-50%)', top:'20%',left:'50%',position:'absolute'}}>Page Not Found</h1>
          </div>
        </Route>
      </Switch>
      </AppContext.Provider>
    </Router>

    </div>

  );
}

export default App;
