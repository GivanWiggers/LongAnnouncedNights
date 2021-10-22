import './LoginPage.scss'
import { useState } from "react"
import DatePicker, { DateObject } from "react-multi-date-picker"

export default function LoginPage() {
  const today = new Date()
  const tomorrow = new Date()

  tomorrow.setDate(tomorrow.getDate() + 1)

  const [values, setValues] = useState<DateObject[]>([])

  return (
      <form>
          <h1> This is a multiple datepicker I hope that I will get this to be static and not just opened by opening an input </h1>
        <DatePicker 
            multiple
            value={values} 
            onChange={(dates: DateObject[]) => setValues(dates)}
        />
    </form>
  )
}

// export default function LoginPage() {
//     return (
//         <section className="login-Overview">
//             <div>
//                 <h1><i>Test 1234 Login </i></h1>
//             </div>
//         </section>
//     )
// }
