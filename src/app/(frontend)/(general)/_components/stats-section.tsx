export function StatsSection() {
  return (
    <section className="relative h-[40dvh] border-b-4 py-4">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <div className="mx-auto flex h-full max-w-5xl flex-col items-center justify-center gap-6 lg:flex-row lg:gap-20">
        <Stats stats="160K+" description="Members on Facebook" />
        <Stats stats="5K+" description="Members on Discord" />
        <Stats stats="30K+" description="Quality Meme Post" />
      </div>
    </section>
  );
}

function Stats({ stats, description }: { stats: string; description: string }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-mono text-5xl font-extrabold lg:text-7xl">{stats}</h1>
      <span className="text-base font-semibold">{description}</span>
    </div>
  );
}
