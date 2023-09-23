import { MatchItem } from "../../molecules/MatchItem";
import { Match as IMatch } from "../../@types/Match.interface";
import { FlatList } from "react-native";

type Props = {
  matches:IMatch[]
}

const MatchListSection: React.FC<Props>= ({matches}) => {
  return (
    <>
      <FlatList
        data={matches}
        renderItem={({item}) => (
          <MatchItem.Root match={item}>
            <MatchItem.Teams teams={{teamOne: item.teamA.name, teamTwo: item.teamB.name}} />
            <MatchItem.Date day={item.day} hour={item.hour} />
            <MatchItem.Icon />
          </MatchItem.Root>
        )}
      />
    </>
  )
}

export default MatchListSection;