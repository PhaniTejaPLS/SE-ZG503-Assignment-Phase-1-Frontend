import  CardComponent from './card-component/card.component.jsx';
import './card-grid.component.css';

function CardComponentGrid(){
    return (
        <>
        <div className='card-grid-root'>
            <CardComponent
                title='Laboratory Equipment' 
                tag='lab'
            />
            <CardComponent
                title='Sports Equipment' 
                tag='sport'
            />
            <CardComponent
                title='Electronics'
                tag='electronics'
            />
            <CardComponent
                title='Musical Instruments'
                tag='music'
            />
            <CardComponent
                title='Furniture'
                tag='furniture'
            />
        </div>
        </> 

    );
}

export default CardComponentGrid;