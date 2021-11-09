import './PartyPage.scss'
import { useState } from "react"
import { Calendar, DateObject } from 'react-multi-date-picker'
import DatePanel from "react-multi-date-picker/plugins/date_panel" 
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import "react-multi-date-picker/styles/colors/yellow.css"
import "react-multi-date-picker/styles/layouts/mobile.css"



export default function HistoryPage() {
  const [value, setValue] = useState<DateObject[]>([])
  console.log(value);
  
  console.log(value.map(v => new Date(v.year, v.month.number -1, v.day, v.hour, v.minute).toLocaleString()));
  

  return (
      <div className="Fullpage">
        <form>
          <h1> This is a multiple datepicker I hope that I will get this to be static and not just opened by opening an input </h1>
        
          <Calendar     
              multiple
              numberOfMonths={2}
              weekStartDayIndex={1}
              format="DD/MM/YYYY HH:mm"
            
              className="yellow rmdp-mobile"
              value={value} 
              onChange={(dates: DateObject[]) => setValue(dates)}
              plugins={[
                <DatePanel  sort="date" />,
                <TimePicker hideSeconds />
              ]}

            // mapDays={({ date, selectedDate, isSameDate }) => {
            //   let props = {}
            //   props.style = {
            //     borderRadius: "3px"
            //   }

            //   if (isSameDate(date, selectedDate: DateObject)) props.style = {
            //     ...props.style,
            //     color: "black",
            //     backgroundColor: "yellow",
            //     fontWeight: "bold",
            //     border: "1px solid #777"
            //   }
          
            //   return props
            // }}
          />
        </form>
      </div>
  )
}

