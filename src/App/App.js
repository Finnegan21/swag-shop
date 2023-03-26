import React, {Component} from 'react'
import './App.css';
import logo1 from './logo1.png';
import HttpService from '../services/http-service';
import Product from '../product/product';
import WishList from '../wishlist/wishlist';

const http = new HttpService();
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {products:[]}

    this.loadData = this.loadData.bind(this)
    this.productList = this.productList.bind(this)
    this.loadData();
  }
  loadData = () => {
    var self = this;
    http.getProducts().then(data => {
      self.setState({products: data})
    }, err => {

    })
  }
  productList = () => {
      const list = this.state.products.map((product) =>
        <div className='col-sm-4' key={product._id}>
          <Product product={product} />
        </div>
      )
      return list
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Swag Shop</h1>
          <img src={logo1} className="App-logo" alt="logo" />
        </header>
        <div className="container-fluid App-main">
          <div className='row'>
            <div className="col-sm-8">
              <div className="row">
                {this.productList()}
              </div>
            </div>
            <div className="col-sm-4">
              <WishList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
