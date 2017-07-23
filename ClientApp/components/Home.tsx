import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <div className="col-12 col-md-9">
                <p className="float-right hidden-md-up">
                    <button type="button" className="btn btn-primary btn-sm" data-toggle="offcanvas">Toggle nav</button>
                </p>
                <div className="jumbotron">
                    <h1>Hello, world!</h1>
                    <p>This is an example to show the potential of an offcanvas layout pattern in Bootstrap. Try some responsive-range viewport sizes to see it in action.</p>
                </div>
                <div className="row">
                    <div className="col-6 col-lg-4">
                        <h2>Heading</h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-6 col-lg-4">
                        <h2>Heading</h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-6 col-lg-4">
                        <h2>Heading</h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-6 col-lg-4">
                        <h2>Heading</h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-6 col-lg-4">
                        <h2>Heading</h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-6 col-lg-4">
                        <h2>Heading</h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                    </div>
                </div>
            </div>

            <div className="col-6 col-md-3 sidebar-offcanvas" id="sidebar">
                <div className="list-group">
                    <a href="#" className="list-group-item active">Link</a>
                    <a href="#" className="list-group-item">Link</a>
                    <a href="#" className="list-group-item">Link</a>
                    <a href="#" className="list-group-item">Link</a>
                    <a href="#" className="list-group-item">Link</a>
                    <a href="#" className="list-group-item">Link</a>
                    <a href="#" className="list-group-item">Link</a>
                    <a href="#" className="list-group-item">Link</a>
                    <a href="#" className="list-group-item">Link</a>
                    <a href="#" className="list-group-item">Link</a>
                </div>
            </div>
        </div>;
    }
}
