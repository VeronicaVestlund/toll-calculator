import React from 'react';

export default class CalculateToll extends React.Component {

    state = {
        totalFee: undefined
    }

    isTollFreeDate = (date) => {

        const dateIn = new Date(date);
    
        const today = this.props.holidays.isHoliday(dateIn);
        const month = dateIn.getMonth()+1;
        const day = dateIn.getDate();
    
        if(today.type==='public' || month === 12 && (day === 24 || day === 31))
        {
            return true;
        }
        else if(dateIn.getDay() === 6 || dateIn.getDay() === 7)
        {
            return true;
        }
        else{
            return false;
        }
    }

    getTollFeeTime = (date, vehicle) => {
        if(this.isTollFreeDate(date) || vehicle == undefined) return 0;
    
        const hour = date.getHours();
        const minute = date.getMinutes();
    
        if (hour == 6 && minute >= 0 && minute <= 29) return 8;
        else if (hour == 6 && minute >= 30 && minute <= 59) return 13;
        else if (hour == 7 && minute >= 0 && minute <= 59) return 18;
        else if (hour == 8 && minute >= 0 && minute <= 29) return 13;
        else if (hour >= 8 && hour <= 14 && minute >= 30 && minute <= 59) return 8;
        else if (hour == 15 && minute >= 0 && minute <= 29) return 13;
        else if (hour == 15 && minute >= 30 || hour == 16 && minute <= 59) return 18;
        else if (hour == 17 && minute >= 0 && minute <= 59) return 13;
        else if (hour == 18 && minute >= 0 && minute <= 29) return 8;
        else return 0;
    }
    
    getTollFeeAmount = (dates, vehicle) => {
        
        let intervalStart = new Date(dates[0]);
        let totalFee = 0;

        dates.forEach(date => {
            let thisDate = new Date(date);
            let nextFee = this.getTollFeeTime(thisDate, vehicle);
            let tempFee = this.getTollFeeTime(intervalStart, vehicle);
            let diffInMinutes = thisDate.getTime() - intervalStart.getTime();
            let minutes = diffInMinutes/1000/60;
            if (minutes <= 60)
            {
                if (totalFee > 0) totalFee -= tempFee;
                if (nextFee >= tempFee) tempFee = nextFee;
                totalFee += tempFee;
            }
            else
            {
                totalFee += nextFee;
            }
    
            intervalStart = thisDate;
        });

    
        
        if(totalFee > 60) totalFee = 60;
        
        this.state.totalFee = totalFee;
    }

    render() {



        return (
            <div>
                <form onSubmit={this.getTollFeeAmount(this.props.timeStamps, this.props.vehicle)}>
                    <p>The toll fee is: {this.state.totalFee} SEK</p>
                </form>
            </div>
        )
    }
}