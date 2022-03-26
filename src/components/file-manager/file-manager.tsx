import { useFilePicker } from 'use-file-picker';
import React, { useEffect, useState } from 'react';

const FileManager: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [openFileSelector, { filesContent, loading }] = useFilePicker({
        
    });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={() => openFileSelector()}>Select files </button>
      <br />
      {filesContent.map((file, index) => (
        <div>
          <h2>{file.name}</h2>
          <div key={index}>{file.name}</div>
          <br />
        </div>
      ))}
    </div>
  );
}

export default FileManager;