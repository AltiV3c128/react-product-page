import React, { useEffect, useState } from "react";
import './product-list.css';
import logo from '../../assets/logo.svg';
import ProductView from "../product-item/product-item";
import { ProductItem } from "../../model/products/product-item";
import { ProductItemList } from "../../model/products/product-item-list";
interface ProductListProps {
  list: ProductItemList,
  isLoading?: boolean;
  filterSearchText?: string
}

interface ProductListState {
  itemsToShow : ProductItemList
}

class ProductListView extends React.Component<ProductListProps, ProductListState> {
  constructor (props: ProductListProps) {
    super(props);
    this.state = {
      itemsToShow : new ProductItemList(),
    }
  }

  componentDidUpdate(oldProps: ProductListProps) {
    if (oldProps.filterSearchText != this.props.filterSearchText && this.props.list.items) {
      const textSearch = this.props.filterSearchText || '';
      const filtered = this.props.list.items.filter((item: { name: string; }) => { 
        return item.name.toLowerCase().search(textSearch.toLowerCase()) >= 0;
      });
      this.setState({itemsToShow : new ProductItemList(filtered)});
    } 

    if(oldProps.list != this.props.list) {
      this.setState({itemsToShow : this.props.list});
    }
  }

  render() {
    return (
      <div className="product-list-view">
        { this.props.isLoading && ( <img src={logo} className="loading-logo" alt="logo" />) }
        
        {this.state.itemsToShow && this.state.itemsToShow.items?.map((item: ProductItem, index: number) => (
          <ProductView key={index} item={item} />
        ))}
      </div>
    );
  }
}

export default ProductListView;