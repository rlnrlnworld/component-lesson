// !Component
export class Component {
    constructor(payload = {}) {
        const { tagName = 'div', state={}, props={} } = payload
        this.el = document.createElement(tagName)
        this.state = state
        this.props = props
        this.render()
    }
    render() {
    }
}

// !Router
function routeRender(routes) {
    const routerview = document.querySelector('.router-view')
    const [hash, queryString = ''] = location.hash.split('?')

    const currentRoute = routes.find(route => new RegExp(`${route.path}/?s`).test(hash))
    routerview.innerHTML = ''
    routerview.append(new currentRoute.component().el)
}
export function createRouter(routes){
    return function () {
        window.addEventListener('popstate', () => {
            routeRender(routes)
        })
        routeRender(routes)
    }
}