import { Component } from 'react';

class LikeButton extends Component {
    state = { liked: false }
    
    toggle = () => {
        let clickLike = this.state.liked;

        clickLike = !clickLike;
        this.setState({ liked: clickLike})
    }

    render(){
        return(
            <div>
            {this.state.liked === false ? (
            <button onClick={this.toggle}>Like This?</button>
            ) : (
            <button onClick={this.toggle}>Liked!</button>
            )}
            </div>
        )
    }
}

export default LikeButton