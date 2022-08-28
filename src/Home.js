import React from "react";
import Explore from "./Explore";
import ReactDOM from 'react-dom/client';

class Home extends React.Component{
    home = () =>{
        const root = ReactDOM .createRoot(document.getElementById('root'));
        root.render(<Home/>)
    }
    explore = ()=>{
        const root = ReactDOM .createRoot(document.getElementById('root'));
        root.render(<Explore/>)
    }
     elem=( <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light"> 
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="navbar-brand" href="#">
                                <img src={process.env.PUBLIC_URL + '/images/image001.png'} width="30" height="30" class="d-inline-block align-top" alt=""/>
                                CD Shoppe
                                </a>
                            </li>
                        </ul>
                        <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
                            <li class="nav-item active" Style="border-bottom: 4px solid skyblue;">
                                <a class="nav-link" href="#" onClick={this.home}>Home</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#" onClick={this.explore}>Explore</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">My Account</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="row pl-3">
                    <div class="col-sm-8">
                        <div class="row">
                            <div class="col-sm-12">
                                <p class="font-weight-bold">Your ultimate accessories store!</p>
                            </div>
                            <div class="col-sm-6">
                                <h2>Shop from a wide range of 10k plus products</h2>
                            </div>
                            <div class="col-sm-6"></div>
                            <div class="col-sm-6">
                                <br/>
                                <button class="btn btn-danger mr-3">Shop now</button>
                                <button class="btn btn-danger">Watch Video</button>
                            </div>
                            <div class="col-sm-6"></div>
                            <div class="col-sm-12"><br/><br/></div>
                            <div class="col-sm-12">
                                <h4>Featured Products</h4>
                            </div>
                            <div class="col-sm-12"><br/></div>
                            <div class="row">
                                <div class="col-sm-3 mr-3" Style="border-radius:50px">
                                    <div class="card" Style="width: 14rem;border-radius: 25px; height:15rem;">
                                        <img class="card-img-top" src="/images/gucci bag.jpg" alt="Card image cap" Style="border-radius: 25px;"/>
                                        <div class="card-body">
                                            <h5 class="card-title">Gucci leather bags</h5>
                                            <p class="card-text font-italic" Style="color:red">Flat 20% off*</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-sm-3 ml-4 mr-4">
                                    <div class="card" Style="width: 14rem; border-radius: 20px; height:15rem;">
                                        <img class="card-img-top" src="/images/rayban.jpg" alt="Card image cap" Style="border-radius: 25px;"/>
                                        <div class="card-body">
                                            <h5 class="card-title">Ryan Ban Polaroid</h5>
                                            <p class="card-text font-italic" Style="color:red">Buy 2, get one flat 50%</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-3 ml-4">
                                    <div class="card" Style="width: 15rem; border-radius: 20px; height:15rem;">
                                        <img class="card-img-top" src="/images/nike.jpg" alt="Card image cap" Style="border-radius:25px;"/>
                                        <div class="card-body">
                                            <h5 class="card-title">Nike Limited Edition</h5>
                                            <p class="card-text font-italic" Style="color:red">Black Friday Exculsive</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-sm-3">
                            <img src="./images/landingAccessories.png" width="145%"/>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <h3>Popular Brands</h3>
                            </div>
                        <div class="col-sm-2">
                            <img src="/images/brand1.png" width="90%"/>
                        </div>
                        <div class="col-sm-2">
                            <img src="/images/brand7.png" width="90%"/>
                        </div>
                        <div class="col-sm-2">
                            <img src="/images/brand2.png" width="50%"/>
                        </div>
                        <div class="col-sm-2">
                            <img src="/images/brand3.png" width="60%"/>
                        </div>
                        <div class="col-sm-2">
                            <img src="/images/brand4.png" width="50%"/>
                        </div>
                        <div class="col-sm-2">
                            <img src="/images/brand6.png" width="90%"/>
                        </div>
                    </div>
                </div>
            </div>);
        render(){
            return (<div>{this.elem}</div>)
          }
}
export default Home;