import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import type { Lesson } from "@/components/NewWeeklyCalendar";
import { Button } from "@/components/ui/button";

type CalendarDataCardProps = {
    lesson: Lesson;
    onEdit: () => void;
    onDelete: () => void;
};

export default function CalendarDataCard({ lesson, onEdit, onDelete }: CalendarDataCardProps) {
    return (
        <Card className="w-60 min-w-[90px] p-2 text-left bg-amber-100">
            <CardContent className="p-1 text-left">
                <p className="font-bold"> Group Name: {lesson.groupName}</p>
                <p> Size: {lesson.groupSize}</p>
                <p> Duration: {lesson.duration} min</p>
            </CardContent>
            <CardFooter className="flex justify-end h-[10px]">
                <Button onClick={onEdit} size="icon" variant="ghost" aria-label="Edit icon">
                    <img
                    src="/edit.png"
                    alt="Edit icon"
                    className="w-4 h-4"
                    style={{ objectFit: "contain" }}
                    />
                </Button>
                <Button onClick={onDelete} size="icon" variant="ghost" aria-label="Delete icon">
                    <img
                        src="/delete.png"
                        alt="Delete icon"
                        className="w-4 h-4"
                        style={{ objectFit: "contain" }}
                    />
                </Button>
            </CardFooter>
        </Card>
    );
}