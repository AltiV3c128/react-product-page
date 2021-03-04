import { useMedia } from "react-media";
import { Constants } from "../../shared/constants/constants";

interface MediaProductImageProps {
    ref : HTMLImageElement
}

const MediaProductImage: React.FC<MediaProductImageProps> = ({ref}) => {
    const GlobalMediaQueries = {
        verySmallViewport: "(max-width: 320px)",
    };
    
    const matches = useMedia({ queries: GlobalMediaQueries });
    ref.src = matches.verySmallViewport ? Constants.url.smallProductImage : Constants.url.productImage;
    
    return (<></>);
}

export default MediaProductImage;