import data from "./data";
import JournalCard from "./journalCard";

export default function JournalCards() {
   const journalData = data.map(item => {
    return <JournalCard
    id={item.id}
    item={item}
    />
   })


   return(
    <div>
        {journalData}
    </div>
   )
}