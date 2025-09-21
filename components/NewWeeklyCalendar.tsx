"use client"
import {useState} from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import DialogForm from "@/components/DialogForm";
import CalendarDataCard from "@/components/CalendarDataCard";

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


export default function NewWeeklyCalendar() {

    const [lessons, setLessons] = useState<Lesson[]>([]);
    const [editionLesson, setEditionLesson] = useState<Lesson | null>(null);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

    function handleAddLesson(lesson: Lesson) {
        setLessons(prev => [...prev, lesson]);
    }

    function handleEdit(lesson: Lesson) {
        setEditionLesson(lesson);
        setIsEditDialogOpen(true);
    }

    function handleDelete(lesson: Lesson) {
        console.log('Delete clicked', lesson);
    }

    function handleUpdateLesson(updatedLesson: Lesson) {
        setLessons(prevLessons =>
            prevLessons.map(lesson =>
                lesson.groupName === editionLesson?.groupName &&
                lesson.startTime === editionLesson?.startTime &&
                lesson.day === editionLesson?.day
                    ? updatedLesson
                    : lesson
            )
        );
        setIsEditDialogOpen(false);
        setEditionLesson(null);
    }

    return (
        <div className="border w-full max-w-4x1 max-h-[500px] overflow-x-auto overflow-y-auto mx-auto">
        <Table className="table-fixed min-w-[700px]">
            <TableHeader>
                <TableRow>
                    <TableHead className="p-2 w-32 text-center">
                        <DialogForm onAddLesson={handleAddLesson}/>
                    </TableHead>
                    {days.map(day => (
                        <TableHead key={day} className="border p-4">{day}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {times.map(time => (
                    <TableRow key={time}>
                        <TableCell className="font-mono font-bold p-2 w-32 text-center">
                           {time}
                        </TableCell>
                        {days.map(day => {
                            const lesson = lessons.find(
                                l => l.day === day && l.startTime === time
                            );
                            return (
                                <TableCell key={day + time} className="border p-2 h-40">
                                    {lesson && (
                                        <div className="flex justify-center items-center h-full">
                                            <CalendarDataCard
                                                lesson={lesson}
                                                onEdit={() => handleEdit(lesson)}
                                                onDelete={() => handleDelete(lesson)}
                                            />
                                        </div>
                                        )}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                ))}
            </TableBody>
        </Table>

            {isEditDialogOpen && editionLesson && (
                <DialogForm
                    onAddLesson={handleUpdateLesson}
                    onClose={() => {setIsEditDialogOpen(false); setEditionLesson(null); }}
                    initialData={editionLesson}
                    isEdit
                    open={isEditDialogOpen}
                />
            )}
        </div>
    )
}