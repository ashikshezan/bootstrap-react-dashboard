const ChartExample = () => {
    return (
        <div className="row">
            <div className="col-xl-6">
                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-chart-area mr-1" />
Area Chart Example
</div>
                    <div className="card-body">
                        <canvas id="myAreaChart" width="100%" height={40} />
                    </div>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-chart-bar mr-1" />
Bar Chart Example
</div>
                    <div className="card-body">
                        <canvas id="myBarChart" width="100%" height={40} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ChartExample;