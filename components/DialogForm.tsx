"use client"
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {Lesson} from "@/components/WeeklyCalendar";
import React, {useState} from "react";

type DialogFormProps = {
    onAddLesson: (lesson: Lesson) => void;
}

export default function DialogForm({onAddLesson}: DialogFormProps) {

    const [groupName, setGroupName] = useState("");
    const [groupSize, setGroupSize] = useState("");
    const [day, setDay] = useState("");
    const [startTime, setStartTime] = useState("");
    const [duration, setDuration] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!groupName || !groupSize || !day || !startTime || !duration) return;
        onAddLesson({
            groupName,
            groupSize: Number(groupSize),
            day,
            startTime,
            duration: Number(duration),
        });

        setGroupName("");
        setGroupSize("");
        setDay("");
        setStartTime("");
        setDuration("");
    }

    return (
        <Dialog>

            <DialogTrigger asChild>
                <Button variant="outline">Add lesson</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] z-50">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Add a lesson</DialogTitle>
                        <DialogDescription>
                            Add your lesson information here. Click Add when you are finished
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label>Group name</Label>
                            <Input type="text"
                            value={groupName}
                            onChange={(e) => setGroupName(e.target.value)}/>
                        </div>
                        <div className="grid gap-3">
                            <Label>Number of Students</Label>
                            <Input type="number"
                            value={groupSize}
                            onChange={(e) => setGroupSize(e.target.value)}/>
                        </div>
                        <div className="grid gap-3">
                            <Label>Time of Lesson Start</Label>
                            <Input className="border rounded-md" type="time"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}/>
                        </div>
                        <div className="grid gap-3">
                            <Label>Lesson duration</Label>
                            <Select value={duration} onValueChange={setDuration}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a lesson duration"/>
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectGroup>
                                        <SelectLabel className="font-bold">Duration</SelectLabel>
                                        <SelectItem value="45">45mins</SelectItem>
                                        <SelectItem value="60">60mins</SelectItem>
                                        <SelectItem value="90">90mins</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-3">
                            <Label>Day of the week</Label>
                            <Select value={day} onValueChange={setDay}>
                                <SelectTrigger className="w-[180px] p-4">
                                    <SelectValue placeholder="Select a day of the week"/>
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectGroup>
                                        <SelectLabel className="font-bold">Day</SelectLabel>
                                        <SelectItem value="Mon">Mon</SelectItem>
                                        <SelectItem value="Tue">Tue</SelectItem>
                                        <SelectItem value="Wed">Wed</SelectItem>
                                        <SelectItem value="Thu">Thu</SelectItem>
                                        <SelectItem value="Fri">Fri</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" className="border p-2">Cancel</Button>
                        </DialogClose>
                        <Button className="bg-gray-400 border" type="submit">Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}