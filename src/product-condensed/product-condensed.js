import React, {Component} from 'react'
import './product-condensed.css'
import dataService from '../services/data-service'

let ds = new dataService();
class ProductCondensed extends Component {
    constructor(props) {
        super(props)
        this.removeProduct = this.removeProduct.bind(this)
    }
    removeProduct = () => {
        ds.removeWishListItem(this.props.product)
    }
    render() {
        return (
        <li className="list-group-item product-condensed">
            <p><a className="btn btn-outline-danger" onClick={() => this.removeProduct()}>X</a>{this.props.product.title} | <b>{this.props.product.price}$</b></p>
        </li>
        )
    }
}
export default ProductCondensed;