import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './card.component.css';
import { useNavigate } from 'react-router';


function CardComponent({ title, imgSrc, description, tag }) {

    const navigate = useNavigate();

    const renderIcon = () => {
        switch (tag) {
            case 'lab':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-flask" viewBox="0 0 16 16">
                        <path d="M4.5 0a.5.5 0 0 0 0 1H5v5.36L.503 13.717A1.5 1.5 0 0 0 1.783 16h12.434a1.5 1.5 0 0 0 1.28-2.282L11 6.359V1h.5a.5.5 0 0 0 0-1zM10 2H9a.5.5 0 0 0 0 1h1v1H9a.5.5 0 0 0 0 1h1v1H9a.5.5 0 0 0 0 1h1.22l.61 1H10a.5.5 0 1 0 0 1h1.442l.611 1H11a.5.5 0 1 0 0 1h1.664l.611 1H12a.5.5 0 1 0 0 1h1.886l.758 1.24a.5.5 0 0 1-.427.76H1.783a.5.5 0 0 1-.427-.76l4.57-7.48A.5.5 0 0 0 6 6.5V1h4z" />
                    </svg>
                )
            case 'sport':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-dribbble" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z" />
                    </svg>


                )
            case 'electronics':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-battery-charging" viewBox="0 0 16 16">
                        <path d="M9.585 2.568a.5.5 0 0 1 .226.58L8.677 6.832h1.99a.5.5 0 0 1 .364.843l-5.334 5.667a.5.5 0 0 1-.842-.49L5.99 9.167H4a.5.5 0 0 1-.364-.843l5.333-5.667a.5.5 0 0 1 .616-.09z" />
                        <path d="M2 4h4.332l-.94 1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.38l-.308 1H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
                        <path d="M2 6h2.45L2.908 7.639A1.5 1.5 0 0 0 3.313 10H2zm8.595-2-.308 1H12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9.276l-.942 1H12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
                        <path d="M12 10h-1.783l1.542-1.639q.146-.156.241-.34zm0-3.354V6h-.646a1.5 1.5 0 0 1 .646.646M16 8a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8" />
                    </svg>
                )
            case 'music':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-music-note-beamed" viewBox="0 0 16 16">
                        <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2" />
                        <path fill-rule="evenodd" d="M14 11V2h1v9zM6 3v10H5V3z" />
                        <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z" />
                    </svg>
                )
            case 'furniture':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 25 25"><path d="M20 4.5V3.22A2.23 2.23 0 0 0 17.78 1H7.22A2.23 2.23 0 0 0 5 3.22V4.5a.5.5 0 0 0 .5.5H6L5 23.47a.46.46 0 0 0 .14.37.48.48 0 0 0 .36.16h2.1a.51.51 0 0 0 .5-.47L8.41 18H11v5.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V18h2.63l.37 5.53a.51.51 0 0 0 .5.47h2a.48.48 0 0 0 .36-.16.46.46 0 0 0 .14-.37L19 5h.47a.5.5 0 0 0 .53-.5zM6 3.22A1.22 1.22 0 0 1 7.22 2h10.56A1.22 1.22 0 0 1 19 3.22V4H6zM16 8l.42 7H14V8zm-3 7h-1V8h1zm-2 0H8.58L9 8h2zm2 8h-1v-5h1zm-4.54-6 .06-1h8l.06 1zM19 23h-1L17 7.47a.51.51 0 0 0-.5-.47h-8a.5.5 0 0 0-.5.47L7.12 23H6L7 5h11z" style={{fill: '#ffffffff'}} /></svg>
                )
        }
    }


    const renderTagLine = () =>{
        switch (tag) {
            case 'lab':
                return "Tools and instruments for academic experiments."
            case 'sport':
                return "Gear and apparel for all your sporting needs."
            case 'electronics':
                return "Devices and components for research and learning."
            case 'music':
                return "Instruments for practice, performance, and study."
            case 'furniture':
                return "Desks, chairs, and more for study and relaxation."
        }
    }

    const redirectToPage = () =>{
        switch (tag) {
            case 'lab': 
                navigate('/inventory/labs');
                break;
            case 'sport':
                navigate('/inventory/sports');
                break;
            case 'electronics':
                navigate('/inventory/electronics');
                break;
            case 'music':
                navigate('/inventory/music');
                break;
            case 'furniture':
                navigate('/inventory/furniture');
                break;
        }
    }


    return (
        <>
            <div className='card w-25 mb-3 card-size-text' 
                onClick={redirectToPage}
            >
                <div className='card-logo'>
                    {renderIcon()}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{renderTagLine()}</p>
                </div>
            </div>
        </>
    );
}

export default CardComponent;