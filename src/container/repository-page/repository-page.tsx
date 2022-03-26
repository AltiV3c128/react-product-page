import React, { useEffect, useState } from "react";
import './style.css';
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import FileListView from "../../components/file-list/file-list";

const RepositoryPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
  
    useEffect(() => {
      if(!isLoading) {
        setIsLoading(true);
      }

      window.setTimeout(() => setIsLoading(false), 1500);
    }, [isLoading]);

    const updateSearchText = (_event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(_event.target.value);
    }

    return (
        <div className="repository-page">
            <Header 
                menuIndex={3}
                searchText={searchText}
				setSearchText={(s : string) => setSearchText(s)}
                updateSearchText={(event:React.ChangeEvent<HTMLInputElement>) => updateSearchText(event)}
            />
			<div className='container'>
				<FileListView isLoading={isLoading} />
			</div>
            <Footer />
        </div>
    );
}

export default RepositoryPage;