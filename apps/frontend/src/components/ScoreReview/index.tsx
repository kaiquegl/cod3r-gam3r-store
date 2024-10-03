import { useMemo } from "react";
import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";

export interface ScoreReviewProps {
  score: number;
  iconSize?: number;
}

export default function ScoreReview({ score, iconSize = 12 }: ScoreReviewProps) {
  if (!score || score < 0 || score > 5) return null;

  const stars = useMemo(() => {
    const tempStars = [];

    for (let i = 1; i <= 5; i++) {
      if (score >= i) {
        tempStars.push(<IconStarFilled key={i} size={iconSize} />);
      } else if (score >= i - 0.5) {
        tempStars.push(<IconStarHalfFilled key={i} size={iconSize} />);
      } else {
        tempStars.push(<IconStar key={i} size={iconSize} />);
      }
    }

    return tempStars;
  }, [score]);

  return <div className="flex gap-0.5 text-emerald-400">{stars}</div>;
}
