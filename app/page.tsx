import WeeklyCalendar from "@/components/WeeklyCalendar";
import DataCard from "@/components/DataCard";


export default function Home() {
  return (
    <div>
        <div className="flex justify-center p-2 space-x-10">
           <DataCard></DataCard>
           <DataCard></DataCard>
           <DataCard></DataCard>
        </div>
        <WeeklyCalendar />
    </div>
  );
}
