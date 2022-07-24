import refresh from '../assets/desktop/icon-refresh.svg';

export default function Quote(){
    return (
        <div className="fs-3">
            <div>
                <p>Quote would go here</p>
                <img src={refresh} alt='refresh icon'/>
            </div>
            <p>Author</p>
        </div>
    )
}