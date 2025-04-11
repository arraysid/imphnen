export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="bg-secondary-background text-foreground font-base relative flex w-full overflow-x-hidden border-t-4 border-b-4">
      <div className="animate-marquee flex py-12 whitespace-nowrap">
        {Array(4) // Increased from 3 to 4
          .fill(items)
          .flat()
          .map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="mx-4 inline-block flex-shrink-0 text-4xl"
            >
              {item}
            </span>
          ))}
      </div>

      <div className="animate-marquee2 absolute top-0 flex py-12 whitespace-nowrap">
        {Array(4) // Increased from 3 to 4
          .fill(items)
          .flat()
          .map((item, index) => (
            <span
              key={`${item}-2-${index}`}
              className="mx-4 inline-block flex-shrink-0 text-4xl"
            >
              {item}
            </span>
          ))}
      </div>
    </div>
  );
}
