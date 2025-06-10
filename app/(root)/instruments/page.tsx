import { db } from "@/app/utils/drizzle";
import { instruments } from "@/app/utils/schema";


const Page = async () => {
    
    const allInstruments = await db.select().from(instruments);
    
    console.log('All Instruments', allInstruments);

    return (
        <>
            <div className="text-2xl">All Instruments</div>
            {allInstruments.map(e => {
                <p>{e.name}</p>
            })}
        </>
    )
    
}

export default Page;