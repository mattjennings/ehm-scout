import Meta from './Meta'

const layoutStyle = {
  margin: 20,
  padding: 20
}

const Layout = props => (
  <div className={props.className}>
    <Meta />
    {props.children}
  </div>
)

export default Layout
