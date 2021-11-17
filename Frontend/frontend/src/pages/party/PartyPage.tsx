import "./PartyPage.scss";
import { useEffect, useState } from "react";
import PartyComponent from "../../components/party/PartyComponent";
import { Party } from "../../globalTypes";
import PartyAPI from "../../api/PartyAPI";

export default function PartyPage() {
    const [party, setParty] = useState<Party>();

    async function getParty() {
        const party = await PartyAPI.getParty(1);
        setParty(party);
    }

    //called once at loading the page
    useEffect(() => {
        getParty();
        console.log(party);
    }, [getParty]);

    return (
        <div className="Fullpage">
            <PartyComponent party={party!} />
        </div>
    );
}
