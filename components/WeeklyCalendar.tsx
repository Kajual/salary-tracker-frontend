"use client"
import DialogForm from "@/components/DialogForm";
import {useState} from "react";

export type Lesson = {
    groupName: string;
    groupSize: number;
    day: string;
    startTime: string;
    duration: number;
}

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const times = [
    "08:00", "09:00", "10:00", "11:00", "12:00",
    "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00",
];

export default function WeeklyCalendar() {

    const [lessons, setLessons] = useState<Lesson[]>([]);

    function handleAddLesson(lesson: Lesson) {
        setLessons(prev => [...prev, lesson]);
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
                <thead>
                <tr>
                    <th className="border p-1 ">
                        <DialogForm onAddLesson={handleAddLesson} />
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
                        {days.map(day => {
                            const lesson = lessons.find(
                                l => l.day === day && l.startTime === time
                            );
                            return (
                                <td key={day + time} className="border p-6 h-16">
                                    {lesson && (
                                        <div className="bg-blue-100 rounded p-1 text-xs">
                                            {lesson.groupName} ({lesson.groupSize}) [{lesson.duration}mins]
                                        </div>
                                    )}
                                </td>
                            );
                        })}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}