import { Component } from './core/rlnrln'
import TheHeader from './components/TheHeader'

export default class App extends Component {
    render() {
        //? router : 구분하고자 하는 하나의 페이지
        const routerview = document.createElement('router-view')
        this.el.append(
            new TheHeader().el,
            routerview
        )
    }
}