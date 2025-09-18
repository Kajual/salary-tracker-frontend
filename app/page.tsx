import WeeklyCalendar from "@/components/WeeklyCalendar";
import DataCard from "@/components/DataCard";
import NewWeeklyCalendar from "@/components/NewWeeklyCalendar";


export default function Home() {
  return (
    <div>
        <div className="flex justify-center p-2 space-x-10">
           <DataCard></DataCard>
           <DataCard></DataCard>
           <DataCard></DataCard>
        </div>
        <NewWeeklyCalendar></NewWeeklyCalendar>
    </div>
  );
}
