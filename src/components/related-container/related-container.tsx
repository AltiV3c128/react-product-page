import React from "react";
import { ProductItem } from "../../model/products/product-item";
import { Constants } from "../../shared/constants/constants";
import './style.css';
interface RelatedContainerProps {
  item: ProductItem 
}
class RelatedContainer extends React.Component<RelatedContainerProps> {
    contentRef: React.RefObject<HTMLDivElement>;
    containerRef: React.RefObject<HTMLDivElement>;

    constructor(props: RelatedContainerProps) {
        super(props);
        this.containerRef = React.createRef();
        this.contentRef = React.createRef();
    }

    componentDidMount = () => {
        this.checkRelatedResizing();
        this.enableButtonsAction();
        window.addEventListener('resize', this.checkRelatedResizing);
    }

    componentDidUpdate () {
        this.checkRelatedResizing();
    }
    
    checkRelatedResizing = () => {
        const container = this.containerRef.current;
        const content = this.contentRef.current;

        const needToScroll = container && content && container.offsetWidth < content.offsetWidth;
        const isScrollable = container && container.className.search('scrollable') >= 0;
        
        if(needToScroll && container && !isScrollable) {
            container.className += ' scrollable';
        }

        if(!needToScroll && container && isScrollable){
            container.className = container.className.replace(' scrollable', '');
        }
    }

    enableButtonsAction = () => {
        const container = this.containerRef.current;

        const leftButton = container?.querySelector('.button.left');
        const rightButton = container?.querySelector('.button.right');

        rightButton?.addEventListener('click', (ev) => this.scrollRelatedTo('right'));
        leftButton?.addEventListener('click', (ev) => this.scrollRelatedTo('left'));
    }

    scrollRelatedTo = (button: string) => {
        const stepMotion = 30;
        const container = this.containerRef.current;
        const content = this.contentRef.current;
        const related = container && (container.querySelector('.related') as HTMLDivElement);
        
        if(!related || !content ) {
            return false;
        }

        const offset = content.offsetWidth - related.offsetWidth;
        if(button === 'right' && related.scrollLeft+1 < offset) {
            related.scrollLeft += Math.min(offset, stepMotion);
        }

        if(button === 'left' && related.scrollLeft > 0) {
            related.scrollLeft -= Math.min(related.scrollLeft, stepMotion);
        }
    }

    render() {
        return (
            <div className="related-container" ref={this.containerRef}>
                <button className='left button'>
                    {Constants.labels.relatedLeftButton}
                </button>

                <div className='related'>
                    <div className='variant-container' ref={this.contentRef}>
                        {this.props.item.variants && !!this.props.item.variants.length && this.props.item.variants.map((variant: ProductItem) => (
                            <div className='variant'>
                                <span className='availability'>{variant.availability.stock}</span>
                                <img src={Constants.url.productImageVariant} alt={`variant ${variant.availability.stock}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <button className='right button'>
                    {Constants.labels.relatedRightButton}
                </button>
            </div>
        );
    }
}

export default RelatedContainer;