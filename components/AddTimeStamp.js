import React from 'react';

export default class AddTimeStamp extends React.Component {
    state = {
        error: undefined
    };

    handleAddTimeStamps = (e) => {
        e.preventDefault();
        const timeStamp = e.target.elements.timeStamp.value.trim();
        const error = this.props.handleTimeStamps(timeStamp);

        this.setState(() => ({error}));

        if(!error){
            e.target.elements.timeStamp.value = '';
        }
        
    };
    
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <h3>Add your timestamps</h3>
                <form onSubmit={this.handleAddTimeStamps}>
                    <input type="text" name="timeStamp" placeholder="YYYY-MM-DD hh:mm" />
                    <button>Add TimeStamp</button>
                </form>
            </div>
        );
    }
}