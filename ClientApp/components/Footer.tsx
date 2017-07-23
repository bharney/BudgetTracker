import * as React from 'react';

export class Footer extends React.Component<{}, {}> {
    public render() {
        return <footer>
                    <div className="col-xs-12 text-center p-t-2-em">
                        <p><strong>Made with <i className="fa fa-heart fa-lg"></i> by Brian Harney</strong></p>
                    </div>
                </footer>;
    }
}
