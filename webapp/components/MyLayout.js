//import Header from './Header';

const layoutStyle = {
  margin: 0,
  padding: 0,
  border: '12px solid #03254c'

};

const Layout = props => (
  <div style={layoutStyle}>
    
    {props.children}
  </div>
);

export default Layout;
