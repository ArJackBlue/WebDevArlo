import React from 'react';


class Item extends React.Component{
constructor(props){
    super(props);

    this.state = {
        clicks: 0 ,
        totalRemaining : 100 
    }
}

    clickMe() {
        console.log("Clicked:", this.props.color);
        this.setState({
            clicks: this.state.clicks + 1,
            totalRemaining : this.state.totalRemaining - 1
        })
        // if(totalRemaining === 0){
        // 
        // }
    }
    render(){
        return (
            <>
            <button onClick={() => this.clickMe()} className='pointer btn'> Hello my favorite color is {this.props.color} </button>
            <span>Times Clicked: {this.state.clicks} </span>
            <span> Remaining Clicks: {this.state.totalRemaining} </span>
            </>
        )
    }
}

export default Item;
