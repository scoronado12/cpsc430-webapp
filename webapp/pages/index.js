
import Link from 'next/link'
import Layout from '../components/MyLayout'

const linkStyle = {
  marginRight: 15,
 

};
export default function Index() {
  return (
     <Layout>
    <main>
    <div> 
          <link rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"/> 
    </div>
    <div id="earthIMG"><img src="/earth.png" style={{maxWidth:"250px", maxHeight:"250px"}}/></div>
      <h1 className="title">UMW</h1>
      <h1 className="titletwo"> Earth Science </h1>
    <div className="head">
    <Link href="/">
      <button type="button" className="button1">Home</button>
    </Link>
    <Link href="/about">
      <button type="button" className="button2">About</button>
    </Link>
    <Link href="/alumni">
      <button type="button" className="button3">Alumni</button>
    </Link>
    <Link href="/admin">
      <button type="button" className="button4">Admin</button>
    </Link>
  </div>

    </main>
      <style jsx> {`
         .title {
          text-align: center;
          color: #03254c;
          background-color: grey;
          font-size: 40px;
      }
        .titletwo {
          text-align: center;
          font-size: 40px;
          color: #03254c;
        }
        main {
          background-color: grey;
        }
        .button1{
          background-color: white;
          border-radius: 12px;
        color: black;
        border: 5px solid #03254c;
      padding: 10px 24px;
      margin-left: 450px;   
      margin-right: 100px; 
      margin-bottom: 10px;      
        width: 100px;
        height: 50px;
        }
        .button2{
          background-color: white;
          border-radius: 12px;
        color: black;
        border: 5px solid #03254c;
      padding: 10px 24px;
      margin-left: 100px;  
      margin-right; 150px;
      margin-bottom: 10px;        
        width: 100px;
        height: 50px;
        }
        .button3{
          background-color: white;
          border-radius: 12px;
        color: black;
        border: 5px solid #03254c;
      padding: 10px 24px;   
      margin-left: 150px; 
      margin-right: 100px; 
      margin-bottom: 10px;    
        width: 100px;
        height: 50px;
        }
        .button4{
          background-color: white;
          border-radius: 12px;
        color: black;
        border: 5px solid #03254c;
      padding: 10px 24px;  
      margin-left: 100px;   
      margin-right: 100px;  
      margin-bottom: 10px;  
        width: 100px;
        height: 50px;
        }
        #earthIMG {
          position: absolute;
          top: 35px;
          left: 10px;
        }
      `}
      </style>
    </Layout>
  );
}