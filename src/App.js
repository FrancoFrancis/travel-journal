
import Navbar from "./journal-components/navbar"
import JournalCard from "./journal-components/journalCard"
import JournalCards from "./journal-components/journalCards"



export default function App() { 
    return (
    <div className="body--of--journal">
        <Navbar/>
    {/* <JournalCard/> */}
    <JournalCards/>
    </div>
    )
    
}
