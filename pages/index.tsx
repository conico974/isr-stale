export function getStaticProps() {
  return {
    props: {},
    revalidate: 5,
  };
}

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      <h1>Reproduction</h1>
    </div>
  );
}
