import * as React from 'react';
import { NavMenu } from './NavMenu';

export class Layout extends React.Component<{}, {}> {
    public render() {
        return <div className="container">
            <div className="row row-offcanvas row-offcanvas-right">
                <div className="col-12 col-md-9">
                    <NavMenu />
                    {this.props.children}
                    <footer>
                        <p>&copy; Company 2017</p>
                    </footer>
                </div>
            </div>
        </div>;
    }
}
