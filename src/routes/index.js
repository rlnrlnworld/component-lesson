//! routes 폴더는 여러 페이지들을 모아 놓은 폴더
//! index.js는 여러 페이지들을 제어할 수 있는 기본 파일
import { createRouter } from '../core/rlnrln'
import Home from './Home'
import About from './About'

export default createRouter([
    { path: '#/', component: Home },
    { path: '#/about', component: About }
])