import { useMedia } from 'react-media';

const MediaQueryBodyClass: React.FC = () => {
    const GlobalMediaQueries = {
        mobilePort: "(max-width: 649px)",
        mobileLand: "(min-width: 650px) and (max-width: 749px)",
        tabletPort: "(min-width: 750px) and (max-width: 959px)",
        tabletLand: "(min-width: 960px) and (max-width: 1278px)",
        desktopSD: "(min-width: 1270px) and (max-width: 1599px)",
        desktopHD: "(min-width: 1600px)",
    };
    const matches = useMedia({ queries: GlobalMediaQueries });
    document.body.className = 
        matches.desktopHD ? 'desktop-hd' : 
        matches.desktopSD ? 'desktop-sd' :
        matches.tabletLand ? 'tablet-land' : 
        matches.tabletPort ? 'tablet-port' : 
        matches.mobileLand ? 'mobile-land' : 
        matches.mobilePort ? 'mobile-port' : '';
    
    return (<></>);
}

export default MediaQueryBodyClass;
