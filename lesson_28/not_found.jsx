import React from 'react';

export default class NotFound extends React.Component {
    constructor(){
        super();
    }

    render() {
        return(
            <div>
               <div class="error">404</div>
                <br /><br />
                <span class="info">Page not found</span>
                <img src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif" class="static" />
            </div>
        )
    }
}