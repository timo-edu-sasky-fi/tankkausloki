import fuel from '../assets/fuel.svg';

export default function FrontPage(){
    return(
        <div>
        <h1>Tankkausloki</h1>
        <img style={{ width: '15em' }} src={fuel} alt="Fuel" />
        </div>
    );
}