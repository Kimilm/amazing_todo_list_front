import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TestYuriComponent from './components/TestYuriComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
// 의존하는 패키지등을 정의한 곳이다. react-router-dom과 최상위 컴포넌트등을 정의

function App() {
  // App() 함수에 최상위 컴포넌트들을 정의함
  return (
    <div>
      <Router> {/* react-router의 적용대상의 컴포넌트를 <Router>로 감싼다*/}
        <HeaderComponent/>{/* 웹 페이지의 헤더부분을 표시하는 컴포넌트를 정의 */}
        <div className='container'>
          <Routes> {/* URL별로 페이지를 전환하기 위한 최상위 컴포넌트들을 <Switch>로 감싼다
                     * <Route>에 컴포넌트에 대응하는 URL과 컴포넌트를 정의.
                     * 헤더와 푸터의 경우 <Switch>로 감싸지지 않았으므로 페이지가 전환되도
                     * 계속 출력된다. */}
            <Route path = "/" exact element = {<TestYuriComponent/>}></Route>
            <Route path = "/yuri" element = {<TestYuriComponent/>}></Route>
          </Routes>
        </div>
        <FooterComponent/>{/* 웹페이지의 푸터부분을 표시하는 컴포넌트를 정의 */}
      </Router>
    </div>
  );
}

export default App;
