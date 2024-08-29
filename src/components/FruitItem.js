import { Component } from '../core/rlnrln'


export default class FruitItem extends Component {
    constructor(payload) {
        super({
            tagName: 'li',
            props: payload.props
        })
    }
    render() {
        //? App.js 의 데이터를 기반으로 출력한다.
        this.el.innerHTML = `
            <span>${this.props.name}</span>
            <span>${this.props.price}</span>
        `
        this.el.addEventListener('click', () => {
            console.log(this.props.name, this.props.price)
        })
    }
}