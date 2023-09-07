type RatingProps = {
  rating: number;
};

export const Rating = ({ rating }: RatingProps) => {
  let color = "bg-green-800";
  if (rating >= 4) {
    color = "bg-green-700";
  } else if (rating >= 3) {
    color = "bg-orange-300";
  } else if (rating >= 2) {
    color = "bg-red-400";
  } else if (rating >= 1) {
    color = "bg-red-500";
  } else {
    color = "bg-red-900";
  }
  return (
    <span className={`${color} text-xs px-2 py-1 rounded-xl text-white`}>
      {rating}
    </span>
  );
};
