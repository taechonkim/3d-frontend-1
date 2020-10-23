import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Main, Login, Mypage, Test } from './pages';
import { StudyApply, StudyCreate, StudyDetail } from './pages/study';
import { ProjectApply, ProjectCreate, ProjectDetail } from './pages/project';
import WrapContent from './content.jsx';
import { Container } from 'react-bootstrap';
import './style.scss';

const App = () => {
    return (
        <>
            <header>
                {/* 예시 */}
                <Link to='/' className='nav-link'>메인</Link>
                {/*<Link to="경로"> : 경로를 나눠주는 역할을 한다.*/}
                <Link to='/mypage' className='nav-link'>마이페이지</Link>
                <Link to='/login' className='nav-link'>로그인</Link>
                <Link to='/authorized' className='nav-link'>Test</Link>
                <Link to='/studyApply' className='nav-link'>스터디 신청</Link>
                <Link to='/studyCreate' className='nav-link'>스터디 생성</Link>
                <Link to='/studyDetail' className='nav-link'>스터디 조회</Link>
                <Link to='/projectApply' className='nav-link'>프로젝트 신청</Link>
                <Link to='/projectCreate' className='nav-link'>프로젝트 생성</Link>
                <Link to='/projectDetail' className='nav-link'>프로젝트 조회</Link>
            </header>
            <Container style={{ paddingTop: '10%', paddingBottom: '10%' }}>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/authorized" component={Test} />
                    <Route path="/mypage" component={Mypage} />
                    <Route path="/studyApply" component={StudyApply} />
                    <Route path="/studyCreate" component={StudyCreate} />
                    <Route path="/studyDetail" component={StudyDetail} />
                    <Route path="/projectApply" component={ProjectApply} />
                    <Route path="/projectCreate" component={ProjectCreate} />
                    <Route path="/projectDetail" component={ProjectDetail} />
                    <Route exact path="/" component={Main} />
                </Switch>
            </Container>
            <footer>Footer</footer>
        </>
    );
};

export default App;