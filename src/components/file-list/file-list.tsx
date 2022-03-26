import React from "react";
import logo from '../../assets/logo.svg';
import { ProductItemList } from "../../model/products/product-item-list";
import FileManager from "../file-manager/file-manager";
import './style.css';
interface FileListProps {
  isLoading?: boolean;
}

interface FileListState {
}

class FileListView extends React.Component<FileListProps, FileListState> {
  constructor (props: FileListProps) {
    super(props);
    this.state = {
      itemsToShow : new ProductItemList(),
    }
  }

  render() {
    return (
      <FileManager />
    );
  }
}

export default FileListView;