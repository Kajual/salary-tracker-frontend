import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import type { Lesson } from "@/components/NewWeeklyCalendar";

type CalendarDataCardProps = {
    lesson: Lesson;
};

export default function CalendarDataCard({ lesson }: CalendarDataCardProps) {
    return (
        <Card className="w-60 min-w-[90px] p-2 text-left bg-amber-100">
            <CardContent className="p-2 text-left">
                <p className="font-bold"> Group Name: {lesson.groupName}</p>
                <p> Size: {lesson.groupSize}</p>
                <p> Duration: {lesson.duration} min</p>
            </CardContent>
        </Card>
    );
}