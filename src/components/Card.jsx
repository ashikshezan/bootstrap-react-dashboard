const Card = ({ varient }) => {

    return (
        <div className={`card bg-${varient} text-white mb-4`}>
            <div className="card-body">{varient} card</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-white stretched-link" href="#">View Details</a>
                <div className="small text-white">
                    <i className="fas fa-angle-right" />
                </div>
            </div>
        </div>

    );
}

export default Card;