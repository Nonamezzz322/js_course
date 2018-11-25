import React from 'react';

export default class Main extends React.Component {
    constructor(){
        super();
    }

    render() {
        return(
            <div>
                <h1>Main component</h1>
                <p>Murloc says: "Mrgl-Mrgl" \(^_^)/</p>
                <a href="https://www.youtube.com/watch?v=IHgRAlkpxJw">click here to become a murloc</a>
            </div>
        )
    }
}