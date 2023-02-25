type Reputation = {
  score: number;
  prestige: number;
  notoriety: number;
};

export function calculateReputation(reputation: Reputation, change: boolean = true): [Reputation, boolean] {
  if (!change) return [reputation, false];

  if (reputation.score === 0 && reputation.prestige >= 5)
    return calculateReputation(
      {
        score: 1,
        prestige: reputation.prestige - 5,
        notoriety: reputation.notoriety,
      },
      true
    );
  if (reputation.score === 0 && reputation.notoriety <= -3)
    return calculateReputation(
      {
        score: -1,
        prestige: reputation.prestige,
        notoriety: reputation.notoriety + 3,
      },
      true
    );

  if (reputation.score === 1 && reputation.prestige >= 10)
    return calculateReputation(
      {
        score: 2,
        prestige: reputation.prestige - 10,
        notoriety: reputation.notoriety,
      },
      true
    );
  if (reputation.score === 1 && reputation.notoriety <= -3)
    return calculateReputation(
      {
        score: 0,
        prestige: reputation.prestige,
        notoriety: reputation.notoriety + 3,
      },
      true
    );

  if (reputation.score === 2 && reputation.prestige >= 15)
    return calculateReputation(
      {
        score: 3,
        prestige: reputation.prestige - 15,
        notoriety: reputation.notoriety,
      },
      true
    );
  if (reputation.score === 2 && reputation.notoriety <= -3)
    return calculateReputation(
      {
        score: 1,
        prestige: reputation.prestige,
        notoriety: reputation.notoriety + 3,
      },
      true
    );

  if (reputation.score === 3 && reputation.notoriety <= -3)
    return calculateReputation(
      {
        score: 2,
        prestige: reputation.prestige,
        notoriety: reputation.notoriety + 3,
      },
      true
    );

  if (reputation.score === -1 && reputation.prestige >= 5)
    return calculateReputation(
      {
        score: 0,
        prestige: reputation.prestige - 5,
        notoriety: reputation.notoriety,
      },
      true
    );
  if (reputation.score === -1 && reputation.notoriety <= -6)
    return calculateReputation(
      {
        score: -2,
        prestige: reputation.prestige,
        notoriety: reputation.notoriety + 6,
      },
      true
    );

  if (reputation.score === -2 && reputation.prestige >= 5)
    return calculateReputation(
      {
        score: -1,
        prestige: reputation.prestige - 5,
        notoriety: reputation.notoriety,
      },
      true
    );
  if (reputation.score === -2 && reputation.notoriety <= -9)
    return calculateReputation(
      {
        score: -3,
        prestige: reputation.prestige,
        notoriety: reputation.notoriety + 9,
      },
      true
    );

  if (reputation.score === -3 && reputation.prestige >= 5)
    return calculateReputation(
      {
        score: -2,
        prestige: reputation.prestige - 5,
        notoriety: reputation.notoriety,
      },
      true
    );

  return [reputation, false];
}
