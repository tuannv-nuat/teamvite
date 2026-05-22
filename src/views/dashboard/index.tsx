import HeroSection from "../../components/HeroSection";
import OnlineMembers from "../../components/OnlineMembers";
import QuickPingBar from "../../components/QuickPingBar";
import LunchVoteCard from "../../components/LunchVoteCard";
import FundSummary from "../../components/FundSummary";
import ActivityFeed from "../../components/ActivityFeed";

export default function Dashboard() {
    return (
        <div className="flex gap-2 flex-col">
            <HeroSection userName="Tuấn" />
            <OnlineMembers />
            <QuickPingBar />
            <LunchVoteCard />
            <FundSummary />
            <ActivityFeed />
        </div>
    )
}