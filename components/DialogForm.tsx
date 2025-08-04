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

export default function DialogForm() {
    return (
           <Dialog>
               <form>
                   <DialogTrigger asChild>
                       <Button variant="outline">Add lesson</Button>
                   </DialogTrigger>
                   <DialogContent className="sm:max-w-[425px] z-50">
                       <DialogHeader>
                           <DialogTitle>Add a lesson</DialogTitle>
                           <DialogDescription>
                               Add your lesson information here. Click Add when you are finished
                           </DialogDescription>
                       </DialogHeader>
                       <div className="grid gap-4">
                           <div className="grid gap-3">
                               <Label>Group name</Label>
                               <Input type="text"/>
                           </div>
                           <div className="grid gap-3">
                               <Label>Number of Students</Label>
                               <Input type="number"/>
                           </div>
                           <div className="grid gap-3">
                               <Label>Time of Lesson Start</Label>
                               <Input className="border rounded-md" type="time"/>
                           </div>
                           <div className="grid gap-3">
                               <Label>Lesson duration</Label>
                               <Select>
                                   <SelectTrigger className="w-[180px]">
                                       <SelectValue placeholder="Select a lesson duration" />
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
                               <Select>
                                   <SelectTrigger className="w-[180px]">
                                       <SelectValue placeholder="Select a day of the week" />
                                   </SelectTrigger>
                                   <SelectContent className="bg-white">
                                       <SelectGroup>
                                           <SelectLabel className="font-bold">Day</SelectLabel>
                                           <SelectItem value="Monday">Mon</SelectItem>
                                           <SelectItem value="Tuesday">Tue</SelectItem>
                                           <SelectItem value="Wednesday">Wed</SelectItem>
                                           <SelectItem value="Thursday">Thu</SelectItem>
                                           <SelectItem value="Friday">Fri</SelectItem>
                                       </SelectGroup>
                                   </SelectContent>
                               </Select>
                           </div>
                       </div>
                       <DialogFooter>
                           <DialogClose asChild>
                               <Button variant="outline">Cancel</Button>
                           </DialogClose>
                           <Button className="bg-gray-400 border" type="submit">Save changes</Button>
                       </DialogFooter>
                   </DialogContent>
               </form>
           </Dialog>
    )
}