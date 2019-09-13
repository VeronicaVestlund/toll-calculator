import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';
import Holidays from 'date-holidays';
import AddTimeStamp from './AddTimeStamp'
import TimeStamps from './TimeStamps';
import ChooseVehicleType from './ChooseVehicleType';
import CalculateToll from './CalculateToll';



export default class TollCalculatorApp extends React.Component {
    state = {
        timeStamps : [],
        vehicle: undefined,
        totalFee: undefined,
        holidays: new Holidays('SE')
    }

    handleTimeStamps = (timeStamp) => {
        if(!timeStamp) {
            return 'Enter valid value to add item';
        }

        this.setState((prevState) => ({ 
            timeStamps: prevState.timeStamps.concat([timeStamp])
            }) 
        );
        
    };

    handleVehicleType = (vehicle) => {        
        this.state.vehicle = vehicle;
        
    }


    render () {
        return (
            <div>
                <h1>Toll Calculator</h1>
                <h3>Calculate the toll</h3>
                <div>                
                
                <ChooseVehicleType
                handleVehicleType = {this.handleVehicleType}
                />
                
                    <AddTimeStamp
                    handleTimeStamps = {this.handleTimeStamps}
                    vehicle = {this.state.vehicle}
                    />

                
                <CalculateToll 
                    vehicle = {this.state.vehicle}
                    timeStamps = {this.state.timeStamps}
                    holidays = {this.state.holidays}
                />
                <TimeStamps
                    timeStamps = {this.state.timeStamps}
                />
                </div>

            </div>
        )
    }


}
