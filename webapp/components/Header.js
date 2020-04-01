import Link from 'next/link';

const linkStyle = {
  marginRight: 15,

};

const Header = () => (
  <div className="head">
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/alumni">
    	<a style={linkStyle}>Alumni</a>
    </Link>
    <Link href="/admin">
    	<a style={linkStyle}>Admin</a>
    </Link>
  </div>
);
<style jsx> {`
	.head {
		background-color: grey;
		font-color: red;
	}
	
`}</style>
export default Header;
