import DialogForm from "@/components/DialogForm";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const times = [
    "08:00", "09:00", "10:00", "11:00", "12:00",
    "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00",
];


export default function WeeklyCalendar() {

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
                <thead>
                <tr>
                    <th className="border p-1 ">
                        <DialogForm />
                    </th>
                    {days.map(day => (
                        <th key={day} className="border p-6">{day}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {times.map(time => (
                    <tr key={time}>
                        <td className="border p-6 font-mono">{time}</td>
                        {days.map(day => (
                            <td key={day + time} className="border p-6 h-16">
                                {/* Place for events or input */}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}