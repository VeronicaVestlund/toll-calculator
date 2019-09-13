import React from 'react';

export default class ChooseVehicleType extends React.Component {
    state = {
        error: undefined,
        tollFreeVehicles: ['Motorbike', 'Tractor', 'Emergency', 'Diplomat', 'Foreign', 'Military'],
        allVehicles: ['Motorbike', 'Tractor', 'Emergency', 'Diplomat', 'Foreign', 'Military', 'Car'],
        chosenVehicle : undefined
    }

    handleVehicleType = (vehicle) => {

        if(this.state.tollFreeVehicles.find(noTollVehicle => (noTollVehicle === vehicle))){
            this.state.error = "Tollfree vehicle! No need to register timestamps."
            return true;
        }
        else{
            this.state.error = undefined;
            return false;
        }
    }
    
    handleVehicleChoice = (e) => {
        this.setState({
            chosenVehicle: e.currentTarget.value
        });
        this.state.chosenVehicle = e.currentTarget.value;
        if(!this.handleVehicleType(e.currentTarget.value)){
            this.props.handleVehicleType(this.state.chosenVehicle);
        }
    }

    render () {
        return (
            <div>
                <p>Choose your vehicle type</p>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <table>
                    <tbody>
                        {this.state.allVehicles.map((vehicle, index) => (
                            <tr key = {index}>
                                <td>
                                    <input type="radio" name="vehicle" 
                                        value={vehicle}  
                                        checked={this.state.chosenVehicle === vehicle}
                                        onChange = {this.handleVehicleChoice}/>                            
                        
                                </td>
                                <td>{vehicle}</td>
                            </tr>
                            )   
                        )}
                    </tbody>                    
                </table>
            </div>
        )
    }


}