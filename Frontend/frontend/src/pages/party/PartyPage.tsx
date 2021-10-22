import './PartyPage.scss'
//import { CalendarPicker } from '@mui/lab';
//import AdapterDateFns from '@mui/lab/AdapterDateFns';
//import LocalizationProvider from '@mui/lab/LocalizationProvider';

import * as React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

export default function PartyPage() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker<Date>
        orientation="landscape"
        openTo="day"
        value={value}
        shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

// export default function PartyPage() {
//     return (
//         <section className="party-Overview">
//             <div>
//                 <h1><i>Test 123 </i></h1>
//                 <LocalizationProvider dateAdapter={AdapterDateFns}>
//                     <CalendarPicker<Date>
//                         orientation="landscape"
//                         openTo="day"
//                         value={value}
//                         shouldDisableDate={isWeekend}
//                         onChange={(newValue) => {
//                             setValue(newValue);
//                         }}
//                         renderInput={(params) => <TextField {...params} />}
//                     />
//                 </LocalizationProvider>
//             </div>
//         </section>
//     )
// }
