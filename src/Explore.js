import React from "react";
import Home from "./Home";
import ReactDOM from 'react-dom/client';


class Explore extends React.Component{
    home = () =>{
        const root = ReactDOM .createRoot(document.getElementById('root'));
        root.render(<Home/>)
    }
    explore = ()=>{
        const root = ReactDOM .createRoot(document.getElementById('root'));
        root.render(<Explore/>)
    }
    elem= (<div class="container">
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
                            <li class="nav-item active">
                                <a class="nav-link" href="#" onClick={this.home}>Home</a>
                            </li>
                            <li class="nav-item active" Style="border-bottom: 4px solid skyblue;">
                                <a class="nav-link" href="#"onClick={this.explore}>Explore</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">My Account</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="row">
                    <div class="col-sm-12"><br/></div>
                    <div class=" ml-5 border border-primary d-flex"  Style="border-radius:8px; height: 65px; width: 80%;">
                        <div class="col-sm-4 mt-3 ml-2">
                            <input type="text" class="border border-0" placeholder="Search Products..."/>
                        </div>
                        <div class="col-sm-4 mt-2 d-flex">
                            <p class="font-weight-light mr-3" Style="font-size:30px; color: gray;">|</p>
                            <p class="d-inline-block mt-3 font-weight-light" Style="font-size:12px" >Filter by:</p>
                            <div class="dropdown mt-1 ml-5">
                                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Categories</button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 mt-2 d-flex">
                            <p class="font-weight-light mr-3" Style="font-size:30px; color: gray;">|</p>
                            <p class="d-inline-block mt-3 font-weight-light" Style="font-size:12px" >Sort Bby:</p>
                            <div class="dropdown mt-1 ml-5">
                                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Relevance</button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-1 mt-1 ml-2">
                            <img src="/images/scart.png"data-toggle="modal" data-target="#exampleModalCenter"/>
                        </div>
                    </div>
                </div>
                <div class="row">
                <div class="col-sm-2  mt-5 ml-4" Style="border-radius:50px">
                    <div class="card" Style="width: 13rem;border-radius: 25px; height:17rem;">
                        <img class="card-img-top" src="/images/gucci bag.jpg" alt="Card image cap" Style="border-radius: 25px;"/>
                        <h6 class="card-text ml-3 mt-2">Gucci leather bags</h6> 
                        <div class="d-flex">
                            <p class="card-text ml-3 mr-4">Rs 5,999</p>
                            <p class="ml-5">4.2</p>
                            <img class="ml-1" src="/images/star.png" width="18px" height="18px"/>
                        </div>
                        <div class="d-flex">
                            <button class="btn btn-outline-danger ml-3 font-weight-bold" Style="font-size:12px;">Add to Cart</button>
                            <button class="btn ml-3 font-weight-bold" Style="background-color: tomato; font-size:12px; color: #fff;">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2 mt-5 ml-4" Style="border-radius:50px">
                    <div class="card" Style="width: 13rem;border-radius: 25px; height:17rem;">
                        <img class="card-img-top" src="/images/sunglass.jpg" alt="Card image cap" Style="border-radius: 25px;"/>
                        <h6 class="card-text ml-3 mt-2">Louis Vuitton Sunglass</h6> 
                        <div class="d-flex">
                            <p class="card-text ml-3 mr-4">Rs 21,899</p>
                            <p class="ml-5">4.8</p>
                            <img class="ml-1" src="/images/star.png" width="18px" height="18px"/>
                        </div>
                        <div class="d-flex">
                            <button class="btn btn-outline-danger ml-3 font-weight-bold" Style="font-size:12px;">Add to Cart</button>
                            <button class="btn ml-3 font-weight-bold" Style="background-color: tomato; font-size:12px; color: #fff;">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2 mt-5 ml-4" Style="border-radius:50px">
                    <div class="card" Style="width: 13rem;border-radius: 25px; height:17rem;">
                        <img class="card-img-top" src="/images/watch.jpg" alt="Card image cap" Style="border-radius: 25px;"/>
                        <h6 class="card-text ml-3 mt-2">Fastrack Watch</h6> 
                        <div class="d-flex">
                            <p class="card-text ml-3 mr-4">Rs 2,799</p>
                            <p class="ml-5">3.7</p>
                            <img class="ml-1" src="/images/star.png" width="18px" height="18px"/>
                        </div>
                        <div class="d-flex">
                            <button class="btn btn-outline-danger ml-3 font-weight-bold" Style="font-size:12px;">Add to Cart</button>
                            <button class="btn ml-3 font-weight-bold" Style="background-color: tomato; font-size:12px; color: #fff;">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2 mt-5 ml-4" Style="border-radius:50px">
                    <div class="card" Style="width: 13rem;border-radius: 25px; height:17rem;">
                        <img class="card-img-top" src="/images/bag combo.jpg" alt="Card image cap" Style="border-radius: 25px;"/>
                        <h6 class="card-text ml-3 mt-2">Travel bag combo</h6> 
                        <div class="d-flex">
                            <p class="card-text ml-3 mr-4">Rs 8,999</p>
                            <p class="ml-5">4.2</p>
                            <img class="ml-1" src="/images/star.png" width="18px" height="18px"/>
                        </div>
                        <div class="d-flex">
                            <button class="btn btn-outline-danger ml-3 font-weight-bold" Style="font-size:12px;">Add to Cart</button>
                            <button class="btn ml-3 font-weight-bold" Style="background-color: tomato; font-size:12px; color: #fff;">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2  mt-5 ml-4" Style="border-radius:50px">
                    <div class="card" Style="width: 13rem;border-radius: 25px; height:17rem;">
                        <img class="card-img-top" src="/images/pendant.jpg" alt="Card image cap" Style="border-radius: 25px;"/>
                        <h6 class="card-text ml-3 mt-2">Swarovski Pendant</h6> 
                        <div class="d-flex">
                            <p class="card-text ml-3 mr-4">Rs 7,589</p>
                            <p class="ml-5">4.5</p>
                            <img class="ml-1" src="/images/star.png" width="18px" height="18px"/>
                        </div>
                        <div class="d-flex">
                            <button class="btn btn-outline-danger ml-3 font-weight-bold" Style="font-size:12px;">Add to Cart</button>
                            <button class="btn ml-3 font-weight-bold" Style="background-color: tomato; font-size:12px; color: #fff;">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2 mt-5 ml-4" Style="border-radius:50px">
                    <div class="card" Style="width: 13rem;border-radius: 25px; height:17rem;">
                        <img class="card-img-top" src="/images/nike.jpg" alt="Card image cap" Style="border-radius: 25px;"/>
                        <h6 class="card-text ml-3 mt-2">Nike Shoes</h6> 
                        <div class="d-flex">
                            <p class="card-text ml-3 mr-4">Rs 6,599</p>
                            <p class="ml-5">4.9</p>
                            <img class="ml-1" src="/images/star.png" width="18px" height="18px"/>
                        </div>
                        <div class="d-flex">
                            <button class="btn btn-outline-danger ml-3 font-weight-bold" Style="font-size:12px;">Add to Cart</button>
                            <button class="btn ml-3 font-weight-bold" Style="background-color: tomato; font-size:12px; color: #fff;">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2  mt-5 ml-4" Style="border-radius:50px">
                    <div class="card" Style="width: 13rem;border-radius: 25px; height:17rem;">
                        <img class="card-img-top" src="/images/gucci bag.jpg" alt="Card image cap" Style="border-radius: 25px;"/>
                        <h6 class="card-text ml-3 mt-2">Gucci leather bag Small</h6> 
                        <div class="d-flex">
                            <p class="card-text ml-3 mr-4">Rs 2,599</p>
                            <p class="ml-5">4.0</p>
                            <img class="ml-1" src="/images/star.png" width="18px" height="18px"/>
                        </div>
                        <div class="d-flex">
                            <button class="btn btn-outline-danger ml-3 font-weight-bold" Style="font-size:12px;">Add to Cart</button>
                            <button class="btn ml-3 font-weight-bold" Style="background-color: tomato; font-size:12px; color: #fff;">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2  mt-5 ml-4" Style="border-radius:50px">
                    <div class="card" Style="width: 13rem;border-radius: 25px; height:17rem;">
                        <img class="card-img-top" src="/images/headphones.jpg" alt="Card image cap" Style="border-radius: 25px;"/>
                        <h6 class="card-text ml-3 mt-2">Headphones</h6> 
                        <div class="d-flex">
                            <p class="card-text ml-3 mr-4">Rs 15,759</p>
                            <p class="ml-5">4.2</p>
                            <img class="ml-1" src="/images/star.png" width="18px" height="18px"/>
                        </div>
                        <div class="d-flex">
                            <button class="btn btn-outline-danger ml-3 font-weight-bold" Style="font-size:12px;">Add to Cart</button>
                            <button class="btn ml-3 font-weight-bold" Style="background-color: tomato; font-size:12px; color: #fff;">Buy Now</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>);
        render(){
            return (<div>{this.elem}</div>);
          }
}
export default Explore;