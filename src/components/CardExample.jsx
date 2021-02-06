import Card from "./Card";

const CardExample = () => {
    return (
        <div className="row">
            <div className="col-xl-3 col-md-6">
                <Card varient="primary" />
            </div>
            <div className="col-xl-3 col-md-6">
                <Card varient="success" />
            </div>
            <div className="col-xl-3 col-md-6">
                <Card varient="danger" />
            </div>
            <div className="col-xl-3 col-md-6">
                <Card varient="warning" />
            </div>
        </div>

    );
}

export default CardExample;